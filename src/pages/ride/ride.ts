import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RideProvider} from "../../providers/ride";
import {AppApi} from "../../app/app.api";

@Component({
  selector: 'page-ride',
  templateUrl: 'ride.html'
})
export class RidePage {

  constructor(public navCtrl: NavController,
              private rideProvider: RideProvider,
              private api: AppApi) {

  }

    rides:any = this.api.rides;

}
