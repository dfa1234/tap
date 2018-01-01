import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {AccountPage} from "../pages/account/account";
import {DriversPage} from "../pages/drivers/drivers";
import {CarPage} from "../pages/car/car";
import {HomePage} from "../pages/home/home";
import {HistoryPage} from "../pages/history/history";
import {SettingsPage} from "../pages/settings/settings";
import {DriverProvider} from '../providers/driver';
import { LoginProvider } from '../providers/login';
import {LoginPage} from "../pages/login/login";
import {BaseUrl} from "./app.url";
import { RequestProvider } from '../providers/request';
import { HistoryProvider } from '../providers/history';
import {NewDriverModal} from "../components/newDriverModal/newDriverModal";
import {NewRequestModal} from "../components/newRequestModal/newRequestModal";
import {AppApi} from "./app.api";


@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        TabsPage,
        AccountPage,
        CarPage,
        DriversPage,
        HistoryPage,
        HomePage,
        SettingsPage,
        NewDriverModal,
        NewRequestModal
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        TabsPage,
        AccountPage,
        CarPage,
        DriversPage,
        HistoryPage,
        HomePage,
        SettingsPage,
        NewDriverModal,
        NewRequestModal
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DriverProvider,
        LoginProvider,
        BaseUrl,
        AppApi,
        RequestProvider,
        HistoryProvider
    ]
})
export class AppModule {}
