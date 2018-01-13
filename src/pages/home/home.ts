import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {RideProvider} from "../../providers/ride";
import {NewRequestModal} from "../../components/newRequestModal/newRequestModal";
import {AppApi} from "../../app/app.api";
import {CarProvider} from "../../providers/car";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    constructor(private rideProvider: RideProvider,
                private carProvider: CarProvider,
                public modalCtrl: ModalController,
                private api: AppApi) {
        console.log('home',this.homeCars)
    }

    homeCars:any = this.api.homeCars;
    requests:any = this.api.requests;
    confirmation:number = null;
    cancel:number = null;
    canceled:number = null;

    Ride = {Car:null,Request:null};

    sendToDriver(){

        setTimeout(() => {
            if(this.Ride.Car && this.Ride.Request){

                let address =
                    this.Ride.Request.street+" "+
                    this.Ride.Request.street_num+", "+
                    this.Ride.Request.city+", "+
                    //this.Ride.Request.country+
                    " ("+this.Ride.Request.zipcode+")"
                ;
                let rideObj = {
                    car:this.Ride.Car.id,
                    driver_name:this.Ride.Car.driver.user.firstName+' '+this.Ride.Car.driver.user.lastName,
                    client_name:this.Ride.Request.firstName+' '+this.Ride.Request.lastName,
                    address_from:address,
                    driver_phone:this.Ride.Car.driver.user.phone1,
                    client_phone:this.Ride.Request.phone,
                    date:new Date(),
                    status:'1'
                };

                this.rideProvider.setRide$(rideObj).subscribe(

                    responseGet => {
                        console.log(responseGet);
                        this.api.rides.push(responseGet);

                        this.Ride.Car.status = '1';
                        console.log('test:');

                        this.carProvider.updateCar$(this.Ride.Car).subscribe(
                            responseGet => {
                                console.log('homeCars: ',responseGet);
                                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                                    this.requests.splice(this.requests.indexOf(this.Ride.Request),1);
                                    this.api.cars = responseGet;
                                    this.Ride.Car = null;
                                    this.Ride.Request = null;
                                    this.confirmation = null;
                                    this.cancel = null;
                                    this.homeCars = [];
                                    responseGet.forEach( (i) => {
                                        if (
                                            //TODO i.location === this.merkazia.location &&
                                        i.driver &&
                                        i.status < 1
                                        ){
                                            this.homeCars.push(i);
                                        }
                                    })
                                } else {
                                    console.error(responseGet);
                                }
                            },
                            error => console.error(error)
                        );
                    },
                    error => console.error(error)
                );
            }
        }, 2000);

    }


    selectThis(type,obj){
        if(type==='car'){
            this.Ride.Car = obj
        }else{
            this.Ride.Request = obj
        }
        console.log(type,obj);

        if(this.Ride.Car && this.Ride.Request){
            this.confirmation = 1;
            this.cancel = 1;
            this.sendToDriver();
        }
    }

    cancelThis(){
        this.Ride.Car = null;
        this.Ride.Request = null;
        this.confirmation = null;
        this.cancel = null;
        this.canceled = 1;

        setTimeout(() => {
            this.canceled = null;
        }, 700);
    }

    requestModal(){
        let reqModal = this.modalCtrl.create(NewRequestModal);
        reqModal.onDidDismiss(responseGet => {
            console.log(responseGet);
            if(responseGet && responseGet.id){
               this.requests.push(responseGet);
            }else{
                console.error(responseGet);
            }
        });
        reqModal.present();
    }

}
