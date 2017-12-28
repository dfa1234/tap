import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {LoginProvider} from "../../providers/login";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController,
                public loginProvider: LoginProvider,
                public alertCtrl:AlertController) {
    }

    username:string;
    password:string;
    res;

    login(){
        this.loginProvider.login$(this.username,this.password).subscribe(
            responseGet => this.res = responseGet,
            error => console.error(error)
        )
    }

}
