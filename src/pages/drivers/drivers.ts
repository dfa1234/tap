import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {NewDriverModal} from "../../components/newDriverModal/newDriverModal";
import {AppApi} from "../../app/app.api";
import {carsModal} from "../../components/carsModal/carsModal";
import {editDriver} from "../edit-driver/edit-driver";
import {CarProvider} from "../../providers/car";

@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html'
})
export class DriversPage {


  constructor(public navCtrl: NavController,
              private api: AppApi,
               private carProvider: CarProvider,
               public modalCtrl: ModalController,
              ) {
  }

  driversList:any = this.api.drivers;

  getCars(){
      let myDrivers = [];
      this.driversList.forEach( (i) => {
          let car = {idDriver:i.idUser};
          this.carProvider.getCar$(car).subscribe(
              responseGet => {
                  console.log('car: ',responseGet);
                  i.car = responseGet;
                  myDrivers.push(i)
              },
              error => console.error(error)
          );
      });
      return myDrivers;
  }

    drivers = this.getCars();
    cars:any = this.api.cars;


    newDriverModal(){
        let driverModal = this.modalCtrl.create(NewDriverModal);
        driverModal.onDidDismiss(responseGet => {
            console.log(responseGet);
            if(responseGet.errors){
                alert(responseGet.original.sqlMessage);
            }else if(responseGet.idUser){
                responseGet.car = null;
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
            if(responseGet){
                driver.car = responseGet;
                this.api.refreshDatas("drivers") ;
                this.api.refreshDatas("cars") ;
                this.drivers = this.getCars();
            }
        });
        carToDriverModal.present();
    }

    editDriver(driver){
        this.navCtrl.setRoot(editDriver, {driver: driver});
    }

    deleteCar(driver){
        driver.car.idDriver = null;
        this.carProvider.updateCar$(driver.car).subscribe(
            responseGet => {
                console.log(responseGet);
                this.api.refreshDatas("drivers") ;
            },
            error => console.error(error)
        )
        driver.car = null;
    }
}
