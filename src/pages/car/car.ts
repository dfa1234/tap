import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {NewCarModal} from "../../components/newCarModal/newCarModal";
import {AppApi} from "../../app/app.api";
import {driversModal} from "../../components/driversModal/driversModal";
import {CarProvider} from "../../providers/car";

@Component({
  selector: 'page-car',
  templateUrl: 'car.html'
})
export class CarPage {


    constructor(public navCtrl: NavController,
                private api: AppApi,
                public modalCtrl: ModalController,
                private carProvider: CarProvider
    ) {

    }

    cars:any = this.api.cars;

    addNewCarModal(){
        let carModal = this.modalCtrl.create(NewCarModal);
        carModal.onDidDismiss(responseGet => {
            console.log(responseGet);
            if(responseGet && responseGet.id){
                this.cars.push(responseGet);
            }else{
                console.error(responseGet);
            }
        });
        carModal.present();
    }

    addCarToDriverModal(car){
        let carToDriverModal = this.modalCtrl.create(driversModal, {"car": car});
        carToDriverModal.onDidDismiss(responseGet => {
            console.log(responseGet);
            if(responseGet && responseGet.constructor === Array && responseGet.length >= 1){
                this.cars = responseGet;
            }else{
                console.error(responseGet);
            }
        });
        carToDriverModal.present();
    }

    updateCar(car){
        console.log(car);
        this.carProvider.updateCar$(car).subscribe(
            responseGet => {
                console.log(responseGet);
                if(responseGet && responseGet.constructor === Array && responseGet.length >= 1){
                    this.cars = responseGet;
                }else{
                    console.error(responseGet);
                }
            },
            error => console.error(error)
        )
    }

    deleteDriver(car){
        car.driver.idUser = null;
        this.updateCar(car);
    }

}
