import { Component } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";



export class BaseUrl {

  constructor() {
  }

    baseUrl = 'http://localhost:3000';
    header = new HttpHeaders({
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Origin' : 'http://localhost:8100',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers' : 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Access-Control-Allow-Credentials,Authorization'
    });

}
