import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageListResponse } from './image-list-response';
import { ImageItem } from './image-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly MAX_RETRIES: number = 3;
  private readonly svcUrl: string;
  private readonly _images: ImageItem[];

  constructor(private http: HttpClient) { 
    this.svcUrl = 'https://picsum.photos';
    this._images = [];
  }

  async getImage(width: number, height: number): Promise<ImageItem> {
    let imgData: ImageItem;

    imgData = await this._getImageItemFromRemote(width, height)
      .catch((err: any) => {
        console.warn(`error in accessing remote image provider. switching to local instead.\n${err}`);
        return this._getImageItemFromLocal(width, height);
      });

    return imgData;
  }

  private async _getImageItemFromLocal(width: number, height: number): Promise<ImageItem> {
    let imgData: ImageItem;

    if (!this._images?.length) {
      let images: ImageListResponse = await this.http.get<ImageListResponse>(environment.localImagesUrl)
        .toPromise()
        .catch((err: any) => {
          console.warn(err);
          return {data: []};
        });
      for (var i=0; i<images?.data?.length; i++) {
        this._images.push(images.data[i]);
      }
    }

    imgData = this._images.shift();

    return imgData;
  }

  private async _getImageItemFromRemote(width: number, height: number): Promise<ImageItem> {
    let imgData: ImageItem;

    const imgSrc: string = await this._getRemoteImage(width, height);

    if (imgSrc) {
      const matches = imgSrc?.match(/^http[s]?\:\/\/[a-z\.]+\/id\/([0-9]+)\/.*/i);
      const id: string = (matches) ? matches[1] : null;
      if (id) {
        imgData = await this._getRemoteImageMetadata(id);
        if (imgData) {
          imgData.download_url = imgSrc;
        }
      } else {
        imgData = {download_url: imgSrc, author: 'unknown', id: -1, height: height, width: width, url: imgSrc};
      }
    }

    return imgData;
  }

  private async _getRemoteImage(width: number, height: number, remainingAttempts: number = this.MAX_RETRIES): Promise<string> {
    return this.http.get(`${this.svcUrl}/${width}/${height}/?blur`, { observe: 'response', responseType: 'text' })
      .toPromise()
      .catch((err: any) => {
        if (remainingAttempts > 1) {
          return this._getRemoteImage(width, height, remainingAttempts - 1);
        } else {
          Promise.reject(err);
        }
      })
      .then((resp: HttpResponse<any>) => {
        return resp.url;
      });
  }

  private async _getRemoteImageMetadata(id: string): Promise<ImageItem> {
    return this.http.get<ImageItem>(`${this.svcUrl}/id/${id}/info`)
      .toPromise()
      .catch((err: any) => {
        console.warn(err);
        return null;
      });
  }
}