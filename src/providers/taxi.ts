import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TaxiProvider {

  baseUrl = 'localhost:3000';

  constructor(private http: HttpClient) {
  }

  getDrivers$() {
      return this.http.get(this.baseUrl+'/api/drivers', {withCredentials:false})
          .subscribe(data => {
              console.log('before component',JSON.stringify(data,undefined,2))
          });
  }


}
