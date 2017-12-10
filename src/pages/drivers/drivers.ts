import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html'
})
export class DriversPage {


  drivers = [
    {
      "firstName": "Moshe",
      "lastName": "Levy",
      "mobile1": "0564565535",
      "mobile2": "0564565535",
      "email": "mochelevy@gmail.com"
    },
    {
      "firstName": "Patrick",
      "lastName": "Bruel",
      "mobile1": "0564565535",
      "mobile2": "0564565535",
      "email": "Patrick.Bruel@gmail.com"
    },
    {
      "firstName": "Jean Jacques",
      "lastName": "Goldman",
      "mobile1": "0564565535",
      "mobile2": "0564565535",
      "email": "jjgoldman@gmail.com"
    },
    {
      "firstName": "David",
      "lastName": "Bouhana",
      "mobile1": "0564565535",
      "mobile2": "0564565535",
      "email": "davidb@gmail.com"
    },
    {
      "firstName": "Gabriel",
      "lastName": "Tapiero",
      "mobile1": "0564565535",
      "mobile2": "0564565535",
      "email": "Gaby.tap@gmail.com"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
