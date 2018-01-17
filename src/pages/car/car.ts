import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {NewCarModal} from "../../components/newCarModal/newCarModal";
import {AppApi} from "../../app/app.api";
import {driversModal} from "../../components/driversModal/driversModal";
import {CarProvider} from "../../providers/car";
import {editCar} from "../edit-car/edit-car";

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
                this.api.refreshDatas("cars") ;
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
            this.api.refreshDatas("cars") ;
            car = responseGet;

        });
        carToDriverModal.present();
    }

    deleteDriver(car){
        car.idDriver = null;
        console.log(car);
        this.carProvider.updateCar$(car).subscribe(
            responseGet => {
                console.log(responseGet);
                this.api.refreshDatas("cars") ;
                car = responseGet;
            },
            error => console.error(error)
        )
    }

    editCar(car){
        this.navCtrl.setRoot(editCar, {car: car});
    }

}
