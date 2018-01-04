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
        license_plate:null,
        brand:'hyundai',
        place_number:5,
        equipment:null,
        hardware_version:null
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

}
