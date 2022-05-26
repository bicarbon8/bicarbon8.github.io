import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    if (!this._images?.length) {
      const images: ImageItem[] = await this.getImages(width, height, 20);
      for (var i=0; i<images.length; i++) {
        this._images.push(images[i]);
      }
    }
    imgData = this._images.shift();

    return imgData;
  }

  async getImages(width: number, height: number, count: number): Promise<ImageItem[]> {
    return await this._getRemoteImageList(width, height, count)
      .catch((err: HttpErrorResponse) => {
        console.warn(`'${err?.message}' ocurred when accessing remote image provider. switching to local instead...`);
        return this._getLocalImageList(count);
      });
  }

  private async _getRemoteImageList(width: number, height: number, count: number, remainingAttempts: number = this.MAX_RETRIES): Promise<ImageItem[]> {
    const returnImages: ImageItem[] = [];
    const images: ImageItem[] = await this.http.get<ImageItem[]>(`${this.svcUrl}/v2/list?page=${this._randInt(0, 30)}&count=${count}`)
      .toPromise()
      .catch((err: HttpErrorResponse) => {
        if (remainingAttempts > 1) {
          console.warn(`'${err?.message}' occurred during request; retrying...`);
          return this._getRemoteImageList(width, height, count, remainingAttempts - 1);
        } else {
          return Promise.reject(err);
        }
      });

    for (var i=0; i<images?.length; i++) {
      let img: ImageItem = images[i];
      let url: string = img.download_url.replace(`/${img.width}`, '').replace(`/${img.height}`, '');
      img.download_url = `${url}/${width}/${height}?blur`;
      returnImages.push(img);
    }
    return returnImages;
  }

  private async _getLocalImageList(count: number): Promise<ImageItem[]> {
    const returnImages: ImageItem[] = [];
    const images: ImageItem[] = await this.http.get<ImageItem[]>(environment.localImagesUrl)
      .toPromise()
      .catch((err: any) => {
        console.warn(err);
        return [];
      });
    let index: number = 0;
    while (returnImages.length < count) {
      let img: ImageItem = images[index++];
      returnImages.push(img);
      if (index >= images.length) {
        index = 0;
      }
    }
    return returnImages;
  }

  private _randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}