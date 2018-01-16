import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {CarProvider} from "../../providers/car";
import {AppApi} from "../../app/app.api";
import {driversModal} from "../../components/driversModal/driversModal";

@Component({
  selector: 'edit-car',
  templateUrl: 'edit-car.html'
})
export class editCar {

    cars = this.api.cars;

    car = this.navParam.get("car");
    errorCar = false;
    savedCar = false;

    constructor(public navCtrl: NavController,
                public navParam: NavParams,
                public modalCtrl: ModalController,
                private api: AppApi,
                private carProvider: CarProvider) {
        console.log(this.car);
    }

    saveCar(){

        console.log('car: ', this.car);

        if(this.car.license_plate){
            this.carProvider.updateCar$(this.car).subscribe(
                responseGet => {
                    console.log(responseGet);
                    this.car = responseGet;
                    this.savedCar = true;
                    setTimeout(() => { this.savedCar = false; },3000)
                    this.api.getCars() ;
                },
                error => console.error(error)
            )
        }else {
            this.errorCar = true;
            setTimeout(() => { this.errorCar = false; },3000)
        }
    }

    addCarToDriverModal(){
        let carToDriverModal = this.modalCtrl.create(driversModal, {"car": this.car});
        carToDriverModal.onDidDismiss(responseGet => {
            console.log(responseGet);
            this.car = responseGet;
            this.savedCar = true;
            setTimeout(() => { this.savedCar = false; },3000)
            this.api.getCars() ;
        });
        carToDriverModal.present();
    }

    deleteDriver(){
        this.car.idDriver = null;
        this.saveCar();
        this.car.driver = null;
    }


}
