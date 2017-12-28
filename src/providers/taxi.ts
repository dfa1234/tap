import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TaxiProvider {

  baseUrl = 'http://localhost:3000';
  header = new HttpHeaders({
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Origin' : 'http://localhost:8100',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers' : 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Access-Control-Allow-Credentials,Authorization'
  });

    constructor(private http: HttpClient) {
  }

  getDrivers$() {
      return this.http.get<any[]>(this.baseUrl+'/api/drivers', {withCredentials:true, headers:this.header})

  }


}
