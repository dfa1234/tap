import {HttpHeaders} from "@angular/common/http";



export class BaseUrl {

  constructor() {
  }

    baseUrl = 'http://vps160905.vps.ovh.ca:3000';
    header = new HttpHeaders({
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Origin' : 'http://vps160905.vps.ovh.ca',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers' : 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Access-Control-Allow-Credentials,Authorization'
    });

}
