import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
};
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }
  
  public getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID MXjl4V0NjFFJpIhEKXxWzcczt-R_nljv6yScPo5_gJM',
      }
    }).pipe(
      pluck('urls', 'regular')
    );
  };
  
}
