import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {NewDriverModal} from "../../components/newDriverModal/newDriverModal";
import {AppApi} from "../../app/app.api";
import {carsModal} from "../../components/carsModal/carsModal";
import {editDriver} from "../edit-driver/edit-driver";

@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html'
})
export class DriversPage {


  constructor(public navCtrl: NavController,
              private api: AppApi,
               public modalCtrl: ModalController,
              ) {

  }

    drivers:any = this.api.drivers;
    cars:any = this.api.cars;


    newDriverModal(){
        let driverModal = this.modalCtrl.create(NewDriverModal);
        driverModal.onDidDismiss(responseGet => {
            console.log(responseGet);
            if(responseGet && responseGet.user.id){
                this.drivers.push(responseGet);
            }else{
                console.error(responseGet);
            }
        });
        driverModal.present();
    }

    addCarToDriverModal(driver){
        let carToDriverModal = this.modalCtrl.create(carsModal, {"driver": driver});
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

    editDriver(driver){
        this.navCtrl.setRoot(editDriver, {driver: driver});
    }
}
