import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RideProvider} from "../../providers/ride";

@Component({
  selector: 'page-ride',
  templateUrl: 'ride.html'
})
export class RidePage {

    rides = [];

  constructor(public navCtrl: NavController,
              private rideProvider: RideProvider) {

  }

    ngOnInit(): void {
        this.rideProvider.getRides$().subscribe(
            responseGet => {
                if (responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log(responseGet);
                    this.rides = responseGet
                } else {
                    console.error(responseGet);
                }
            })
    }
}
