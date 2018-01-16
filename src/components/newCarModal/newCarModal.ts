import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CarProvider} from "../../providers/car";
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'newCarModal',
    templateUrl: 'newCarModal.html'
})

export class NewCarModal {

  constructor(private carProvider: CarProvider,
              private viewCtrl: ViewController) {
  }

    errorCar = false;
    car = {
        idDriver:null,
        license_plate:null,
        brand:"hyundai",
        place_number:4,
        equipment:null,
        hardware_version:null,
        availability:null,
        location:null,
        status:"5"
    };

    newCar(form: NgForm){


        if(form.valid){
            this.carProvider.setCar$(this.car).subscribe(
                responseGet => this.viewCtrl.dismiss(responseGet),
                error => console.error(error)
            )
        }else {
            this.errorCar = true;
            setTimeout(() => { this.errorCar = false; },3000)
        }
    }

    closeModal():void{
        this.viewCtrl.dismiss();
    }

}
