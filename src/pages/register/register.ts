import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {AuthenticationProvider} from "../../providers/authentication";
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../login/login";
import {AppApi} from "../../app/app.api";

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public authProvider: AuthenticationProvider,
                public navController: NavController,
                public alertCtrl:AlertController,
                public api: AppApi) {
    }

    myProfile = this.api.myProfile;

    errorRegister = false;

    user = {
        firstName:null,
        lastName:null,
        phone1:null
    };


    register(form: NgForm){
        //console.log(form.value)
        if(form.valid){
            this.authProvider.register$(this.user).subscribe(
                responseGet => {
                    console.log(responseGet);
                    if(responseGet && (Object.keys(responseGet).length !== 0)){
                        this.myProfile.user = responseGet;
                        this.navController.setRoot(TabsPage);
                    }
                },
                error => console.error(error)
            )
        }else {
            this.errorRegister = true;
            setTimeout(() => { this.errorRegister = false; },3000)
        }
    }

    login() {
        this.navController.setRoot(LoginPage);
    }

}
