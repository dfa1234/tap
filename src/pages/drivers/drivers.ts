import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TaxiProvider} from "../../providers/taxi";

@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html'
})
export class DriversPage {


  drivers = [];

  constructor(public navCtrl: NavController,
              private taxiProvider: TaxiProvider) {

  }

    ngOnInit(): void {
        this.taxiProvider.getDrivers$().subscribe(
            responseGet => this.drivers = responseGet,
            error => console.error(error)
        );
    }
}
