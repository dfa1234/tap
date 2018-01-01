import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../app/app.url';

@Injectable()
export class RequestProvider {

    constructor(private http: HttpClient,
                private baseUrl: BaseUrl) {
    }

    getRequest$() {
        return this.http.get<any[]>(this.baseUrl.baseUrl+'/api/requests');
    }

    setRequest$(obj) {
        return this.http.post<any[]>(this.baseUrl.baseUrl+'/api/requests',obj);
    }
}



