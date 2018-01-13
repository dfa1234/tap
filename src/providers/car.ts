import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../app/app.url';


@Injectable()
export class CarProvider {

  constructor(private http: HttpClient,
              private baseUrl: BaseUrl) {
  }

    getCars$() {
      return this.http.get<any[]>(this.baseUrl.baseUrl+'/api/cars');
    }

    setCar$(obj) {
        return this.http.post<any[]>(this.baseUrl.baseUrl+'/api/car',obj);
    }

    updateCar$(obj) {
        return this.http.put<any[]>(this.baseUrl.baseUrl+'/api/car',obj);
    }

}
