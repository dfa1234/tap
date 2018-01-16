import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../app/app.url';


@Injectable()
export class DriverProvider {

  constructor(private http: HttpClient,
              private baseUrl: BaseUrl) {
  }

    getDrivers$() {
      return this.http.get<any[]>(this.baseUrl.baseUrl+'/api/drivers');
    }

    setDriver$(obj) {
        return this.http.post<any[]>(this.baseUrl.baseUrl+'/api/driver',obj);
    }

    updateDriver$(obj) {
        return this.http.put<any[]>(this.baseUrl.baseUrl+'/api/driver',obj);
    }
}
