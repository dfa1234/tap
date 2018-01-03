import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BaseUrl} from "../app/app.url";

@Injectable()
export class AuthenticationProvider {

  constructor(public http: HttpClient,
              private baseUrl: BaseUrl) {

  }

    login$(obj) {
        return this.http.get<any[]>(this.baseUrl.baseUrl+'/api/login', { params:obj })
    }

    register$(obj) {
        return this.http.post<any[]>(this.baseUrl.baseUrl+'/api/user',obj);
    }
}
