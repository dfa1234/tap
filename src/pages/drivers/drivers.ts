import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {NewDriverModal} from "../../components/newDriverModal/newDriverModal";
import {DriverProvider} from "../../providers/driver";

@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html'
})
export class DriversPage {


  drivers = [];

  constructor(public navCtrl: NavController,
              private driverProvider: DriverProvider,
               public modalCtrl: ModalController,
              ) {

  }

    ngOnInit(): void {
        this.driverProvider.getDrivers$().subscribe(
            responseGet => this.drivers = responseGet,
            error => console.error(error)
        );
    }

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
