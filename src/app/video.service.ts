import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = '/api/videos';
  private _postUrl = '/api/video';
  private _putUrl = '/api/video/';
  private _deleteUrl = '/api/video/';

  constructor(private _http: HttpClient) {
    this._getUrl = environment.baseUrl + this._getUrl;
    this._postUrl = environment.baseUrl + this._postUrl;
    this._putUrl = environment.baseUrl + this._putUrl;
    this._deleteUrl = environment.baseUrl + this._deleteUrl;
  }

  getVideos() {
    return this._http.get<Array<Video>>(this._getUrl);
  }

  addVideos(video: Video) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post<Video>(
      this._postUrl,
      JSON.stringify(video),
      httpOptions
    );
  }

  updateVideos(video: Video) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.put<Video>(
      this._putUrl + video._id,
      JSON.stringify(video),
      httpOptions
    );
  }

  deleteVideos(video: Video) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.delete<Video>(this._deleteUrl + video._id, httpOptions);
  }
}
