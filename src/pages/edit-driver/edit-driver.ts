import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {AppApi} from "../../app/app.api";
import {carsModal} from "../../components/carsModal/carsModal";
import {DriverProvider} from "../../providers/driver";
import {CarProvider} from "../../providers/car";
import {DriversPage} from "../drivers/drivers";

@Component({
  selector: 'edit-driver',
  templateUrl: 'edit-driver.html'
})
export class editDriver {

    driver = this.navParam.get("driver");
    errorDriver = false;
    savedDriver = false;

    constructor(public navCtrl: NavController,
                public navParam: NavParams,
                public modalCtrl: ModalController,
                private api: AppApi,
                private driverProvider: DriverProvider,
                private carProvider: CarProvider) {
        console.log(this.driver);

        let car = {idDriver:this.driver.idUser}

        this.carProvider.getCar$(car).subscribe(
        responseGet => {
                console.log('car: ',responseGet);
                this.driver.car = responseGet
            },
            error => console.error(error)
        );
    }


    saveDriver(){

        console.log('car: ', this.driver);

        if(this.driver.license){
            this.driverProvider.updateDriver$(this.driver).subscribe(
                responseGet => {
                    console.log(responseGet);
                    this.savedDriver = true;
                    setTimeout(() => { this.savedDriver = false; },3000)
                    this.api.getDrivers() ;
                },
                error => console.error(error)
            )
        }else {
            this.errorDriver = true;
            setTimeout(() => { this.errorDriver = false; },3000)
        }
    }

    addCarToDriverModal(){
        let driverToCarModal = this.modalCtrl.create(carsModal, {"driver": this.driver});
        driverToCarModal.onDidDismiss(responseGet => {
            console.log(responseGet);
            if(responseGet){
                this.savedDriver = true;
                setTimeout(() => { this.savedDriver = false; },3000);
                this.driver.car = responseGet;
                this.api.getCars() ;
            }else{
                console.error(responseGet);
            }
        });
        driverToCarModal.present();
    }

    deleteCar(){
        this.driver.car.idDriver = null;
        this.carProvider.updateCar$(this.driver.car).subscribe(
            responseGet => {
                console.log(responseGet);
                this.savedDriver = true;
                setTimeout(() => { this.savedDriver = false; },3000)
                this.api.getCars() ;
            },
            error => console.error(error)
        )
        this.driver.car = null;
    }

    deleteDriver(){
        this.driverProvider.deleteDriver$({idUser:this.driver.idUser}).subscribe(
            responseGet => {
                console.log(responseGet);
                this.api.refreshDatas('drivers') ;
                this.api.refreshDatas('cars') ;
                this.savedDriver = true;
                setTimeout(() => {
                    this.savedDriver = false;
                    this.navCtrl.setRoot(DriversPage);
                },2000)
            },
            error => console.error(error)
        )
    }


}
