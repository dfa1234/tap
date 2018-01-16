import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
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

    errorRequest = false;

    request = {
        firstName:null,
        lastName:null,
        phone:null,
        street:null,
        street_num:null,
        city:null,
        country:null,
        zipcode:null,
        baggage:'0',
        notice:null
    };

    newRequest(form: NgForm){
        if(form.valid){
            this.requestProvider.setRequest$(this.request).subscribe(
                responseGet => this.viewCtrl.dismiss(responseGet),
                error => console.error(error)
            )
        }else {
            this.errorRequest = true;
            setTimeout(() => { this.errorRequest = false; },3000)
        }
    }

    closeModal():void{
       this.viewCtrl.dismiss();
    }

}
