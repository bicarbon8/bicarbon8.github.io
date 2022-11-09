import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SiteMap } from '../types/site-map';
import { retryWithBackoff } from '../operators/retry-with-backoff';

@Injectable({
  providedIn: 'root'
})
export class SplashService {
  constructor(private http: HttpClient) { }

  getSiteMap(): Observable<SiteMap> {
      return this.http.get<SiteMap>(environment.siteMapUrl)
      .pipe(retryWithBackoff({maxRetries: 5}));
  }
}
