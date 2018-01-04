import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
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
import {RidePage} from "../pages/ride/ride";
import {SettingsPage} from "../pages/settings/settings";
import {DriverProvider} from '../providers/driver';
import {AuthenticationProvider} from '../providers/Authentication';
import {LoginPage} from "../pages/login/login";
import {BaseUrl} from "./app.url";
import { RequestProvider } from '../providers/request';
import { RideProvider } from '../providers/ride';
import {NewDriverModal} from "../components/newDriverModal/newDriverModal";
import {NewRequestModal} from "../components/newRequestModal/newRequestModal";
import {AppApi} from "./app.api";
import {RegisterPage} from "../pages/register/register";
import {CarProvider} from "../providers/car";
import {NewCarModal} from "../components/newCarModal/newCarModal";


@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        RegisterPage,
        TabsPage,
        AccountPage,
        CarPage,
        DriversPage,
        RidePage,
        HomePage,
        SettingsPage,
        NewDriverModal,
        NewRequestModal,
        NewCarModal
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        RegisterPage,
        TabsPage,
        AccountPage,
        CarPage,
        DriversPage,
        RidePage,
        HomePage,
        SettingsPage,
        NewDriverModal,
        NewRequestModal,
        NewCarModal
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DriverProvider,
        AuthenticationProvider,
        BaseUrl,
        AppApi,
        RequestProvider,
        RideProvider,
        CarProvider
    ]
})
export class AppModule {}
