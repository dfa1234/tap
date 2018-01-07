import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {NewDriverModal} from "../../components/newDriverModal/newDriverModal";
import {AppApi} from "../../app/app.api";

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


    newDriverModal(){
        let driverModal = this.modalCtrl.create(NewDriverModal);
        driverModal.onDidDismiss(data => {
            if(data === null){

            }else{
                if(data && (Object.keys(data).length !== 0) && data.name !== 'SequelizeDatabaseError'){
                    console.log(data);
                    this.drivers.push(data);
                }else{
                    console.error(data);
                }
            }
        });
        driverModal.present();
    }
}
