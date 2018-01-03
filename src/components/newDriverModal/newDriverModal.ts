import {Component} from '@angular/core';
import {DriverProvider} from "../../providers/driver";
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'newDriverModal',
    templateUrl: 'newDriverModal.html'
})

export class NewDriverModal {

  constructor(private driverProvider: DriverProvider,
              private viewCtrl: ViewController) {
  }

    driver = {
        license:null,
        type:'TAXI',
        user:{
            category:'DRIVER',
            firstName:null,
            lastName:null,
            email:null,
        }
    };

    newDriver(){
        console.log(this.driver);
        this.driverProvider.setDriver$(this.driver).subscribe(
            responseGet => this.viewCtrl.dismiss(responseGet),
            error => console.error(error)
        );
    }

}
