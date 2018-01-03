import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {AuthenticationProvider} from "../../providers/Authentication";
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";
import {AppApi} from "../../app/app.api";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public authProvider: AuthenticationProvider,
                public navController: NavController,
                public alertCtrl:AlertController,
                public api: AppApi) {
    }

    myProfile = this.api.myProfile;

    errorLogin = false;

    user = {
        username:null,
        password:null
    };


    login(){
        this.authProvider.login$(this.user).subscribe(
            responseGet => {
                console.log(responseGet);
                if(responseGet && (Object.keys(responseGet).length !== 0)){
                    this.myProfile.user = responseGet;
                    this.navController.setRoot(TabsPage, {opentab: 2});
                }else {
                    this.errorLogin = true
                    setTimeout(() => {
                        this.errorLogin = false;
                    },3000)
                }
            },
            error => console.error(error)
        )
    }

    register() {
        this.navController.setRoot(RegisterPage);
    }

}
