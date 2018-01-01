import {Component} from '@angular/core';
import { ViewController } from 'ionic-angular';
import {RequestProvider} from "../../providers/request";

@Component({
    selector: 'newRequestModal',
    templateUrl: 'newRequestModal.html'
})

export class NewRequestModal {

  constructor(private requestProvider: RequestProvider,
              private viewCtrl: ViewController) {
  }


    request = {
        firstName:null,
        lastName:null,
        phone:null,
        street:null,
        street_num:null,
        city:null,
        country:null,
        zipcode:null
    };

    newRequest(){
        console.log(this.request);
        this.requestProvider.setRequest$(this.request).subscribe(
            responseGet => this.viewCtrl.dismiss(responseGet),
            error => console.error(error)
        );
    }

}
