import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppApi} from "../../app/app.api";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

    myProfile;

    constructor(public navCtrl: NavController,
              public api: AppApi) {
      this.myProfile = this.api.myProfile;
      console.log(this.myProfile);
  }


}
