import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {LoginProvider} from "../../providers/login";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public loginProvider: LoginProvider,
                public navController: NavController,
                public alertCtrl:AlertController) {
    }

    errorLogin = false;

    user = {
        username:null,
        password:null
    };


    login(){
        this.loginProvider.login$(this.user).subscribe(
            responseGet => {
                console.log(responseGet)
                if(responseGet){
                    this.navController.setRoot(TabsPage);
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

}
