import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {AccountPage} from "../pages/account/account";
import {DriversPage} from "../pages/drivers/drivers";
import {CarPage} from "../pages/car/car";
import {HomePage} from "../pages/home/home";
import {HistoryPage} from "../pages/history/history";
import {SettingsPage} from "../pages/settings/settings";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AccountPage,
    CarPage,
    DriversPage,
    HistoryPage,
    HomePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AccountPage,
    CarPage,
    DriversPage,
    HistoryPage,
    HomePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
