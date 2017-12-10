import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {CarPage} from "../car/car";
import {DriversPage} from "../drivers/drivers";
import {SettingsPage} from "../settings/settings";
import {AccountPage} from "../account/account";
import {HistoryPage} from "../history/history";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  carPage = CarPage;
  driversPage = DriversPage;
  settingsPage = SettingsPage;
  accountPage = AccountPage;
  historyPage = HistoryPage;

  constructor() {

  }
}
