import { Injectable } from '@angular/core';
import {URL_SERVER} from '../model/constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = URL_SERVER + '/api';
  private urlDetails: string = URL_SERVER + '/api/details/';

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getDetails(name: string): Observable<string> {
    return this.http.get<string>(`${this.urlDetails}${name}`, {responseType: 'text' as 'json'})
      .pipe(
        tap(response => console.log(response))
      );
  }
}
