import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageListResponse } from './image-list-response';
import { retryWithBackoff } from '../operators/retry-with-backoff';
import { ImageItem } from './image-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly svcUrl: string;
  private readonly _images: ImageItem[];

  constructor(private http: HttpClient) { 
    this.svcUrl = 'https://picsum.photos';
    this._images = [];
  }

  async getImage(width: number, height: number, useRemote: boolean = false): Promise<ImageItem> {
    let imgData: ImageItem;

    if (useRemote) {
      imgData = await this._getImageFromRemote(width, height);
    } else {
      imgData = await this._getImageFromLocal(width, height);
    }

    return imgData;
  }

  private async _getImageFromLocal(width: number, height: number): Promise<ImageItem> {
    let imgData: ImageItem;

    if (!this._images?.length) {
      let images: ImageListResponse = await this.http.get<ImageListResponse>(environment.carouselDataUrl)
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

  private async _getImageFromRemote(width: number, height: number): Promise<ImageItem> {
    let imgData: ImageItem;

    const imgSrc: string = await this.http.get(`${this.svcUrl}/${width}/${height}/?blur`, { observe: 'response', responseType: 'text' })
      .pipe(retryWithBackoff({maxRetries: 3}))
      .toPromise()
      .then((resp: HttpResponse<any>) => {
        return resp.url;
      })
      .catch((err: any) => {
        console.warn(err);
        return '';
      });

    if (imgSrc) {
      const matches = imgSrc?.match(/^http[s]?\:\/\/[a-z\.]+\/id\/([0-9]+)\/.*/i);
      const id: string = (matches) ? matches[1] : null;
      if (id) {
        imgData = await this.http.get<ImageItem>(`${this.svcUrl}/id/${id}/info`)
          .toPromise()
          .catch((err: any) => {
            console.warn(err);
            return null;
          });
        if (imgData) {
          imgData.download_url = imgSrc;
        }
      } else {
        imgData = {download_url: imgSrc, author: 'unknown', id: -1, height: height, width: width, url: imgSrc};
      }
    }

    return imgData;
  }
}

const randInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min);