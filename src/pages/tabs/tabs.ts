import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {CarPage} from "../car/car";
import {DriversPage} from "../drivers/drivers";
import {SettingsPage} from "../settings/settings";
import {AccountPage} from "../account/account";
import {RidePage} from "../ride/ride";
import {NavParams} from "ionic-angular";
import {AppApi} from "../../app/app.api";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  carPage = CarPage;
  driversPage = DriversPage;
  settingsPage = SettingsPage;
  accountPage = AccountPage;
  ridePage = RidePage;

    seltabix: number;

    constructor(np: NavParams,
                public api: AppApi) {
        this.seltabix = np.get('opentab');
    }

    myProfile = this.api.myProfile;

}
