import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {AuthenticationProvider} from "../../providers/Authentication";
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

    errorRegister:string;

    user = {
        firstName:null,
        lastName:null,
        phone1:null
    };


    register(form){
        console.log(form.value)

        if(form.value.firstName){
            if(form.value.lastName){
                if(form.value.phone1){
                    this.authProvider.register$(this.user).subscribe(
                        responseGet => {
                            console.log(responseGet);
                            if(responseGet && (Object.keys(responseGet).length !== 0)){
                                this.myProfile.user = responseGet;
                                this.navController.setRoot(TabsPage);
                            }else {
                                this.errorRegister = 'an error accord while register';
                                setTimeout(() => { this.errorRegister = ''; },3000)
                            }
                        },
                        error => console.error(error)
                    )
                }else {
                    this.errorRegister = 'Please fill the phone input';
                    setTimeout(() => { this.errorRegister = ''; },3000)
                }
            }else {
                this.errorRegister = 'Please fill the Last Name input';
                setTimeout(() => { this.errorRegister = ''; },3000)
            }
        }else {
            this.errorRegister = 'Please fill the First Name input';
            setTimeout(() => { this.errorRegister = ''; },3000)
        }
    }

    login() {
        this.navController.setRoot(LoginPage);
    }

}
