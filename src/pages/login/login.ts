import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {LoginProvider} from "../../providers/login";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public loginProvider: LoginProvider,
                public navController: NavController,
                public alertCtrl:AlertController) {
    }

    user = {
        username:null,
        password:null
    };


    login(){
        this.loginProvider.login$(this.user).subscribe(
            responseGet => {
                console.log(responseGet)
                if(responseGet){
                    this.navController.setRoot(HomePage);
                }else {
                    let alert = this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'username or password is incorrect',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            },
            error => console.error(error)
        )
    }

}
