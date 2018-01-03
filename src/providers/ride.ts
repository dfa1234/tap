import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../app/app.url';

@Injectable()
export class RideProvider {

  constructor(public http: HttpClient,
              private baseUrl: BaseUrl) {
  }
    getRides$() {
        return this.http.get<any[]>(this.baseUrl.baseUrl+'/api/rides');
    }

    setRide$(obj) {
        return this.http.post<any[]>(this.baseUrl.baseUrl+'/api/ride',obj);
    }

}
