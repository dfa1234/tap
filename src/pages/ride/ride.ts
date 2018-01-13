import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppApi} from "../../app/app.api";

@Component({
  selector: 'page-ride',
  templateUrl: 'ride.html'
})
export class RidePage {

  constructor(public navCtrl: NavController,
              private api: AppApi) {

  }

    rides:any = this.api.rides;

}
