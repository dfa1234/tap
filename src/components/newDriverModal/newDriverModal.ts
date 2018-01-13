import {Component} from '@angular/core';
import {DriverProvider} from "../../providers/driver";
import { ViewController } from 'ionic-angular';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'newDriverModal',
    templateUrl: 'newDriverModal.html'
})

export class NewDriverModal {

  constructor(private driverProvider: DriverProvider,
              private viewCtrl: ViewController) {
  }

    errorAddDriver =false;

    driver = {
        license:null,
        type:'TAXI',
        user:{
            category:'driver',
            firstName:null,
            lastName:null,
            email:null,
        }
    };

    newDriver(f: NgForm){
        if(f.valid){
            this.driverProvider.setDriver$(this.driver).subscribe(
                responseGet => this.viewCtrl.dismiss(responseGet),
                error => console.error(error)
            );
        }else{
            this.errorAddDriver = true;
            setTimeout(() => { this.errorAddDriver = false; },3000)
        }
    }

    closeModal():void{
        this.viewCtrl.dismiss();
    }

}
