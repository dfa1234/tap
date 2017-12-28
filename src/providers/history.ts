import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../app/app.url';

@Injectable()
export class HistoryProvider {

  constructor(public http: HttpClient,
              private baseUrl: BaseUrl) {
  }

    getHistory$() {
        return this.http.get<any[]>(this.baseUrl.baseUrl+'/api/history');
    }

}
