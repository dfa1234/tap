import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {DriverProvider} from "../../providers/driver";
import {RequestProvider} from "../../providers/request";
import {RideProvider} from "../../providers/ride";
import {NewRequestModal} from "../../components/newRequestModal/newRequestModal";
import {NewDriverModal} from "../../components/newDriverModal/newDriverModal";
import {AppApi} from "../../app/app.api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    drivers = [];
    requests = [];
    confirmation:number = null;
    cancel:number = null;
    canceled:number = null;

    Drive = {Driver:null,Request:null};

    constructor(public driverProvider: DriverProvider,
                public rideProvider: RideProvider,
                public requestProvider: RequestProvider,
                public modalCtrl: ModalController,
                private api: AppApi) {
    }

    ngOnInit(): void {
        this.driverProvider.getDrivers$().subscribe(
            responseGet => {
                if(responseGet.constructor === Array && responseGet.length >= 1){
                    console.log(responseGet);
                    responseGet.forEach( (i) => {
                        if (i.license){
                            this.drivers.push(i)
                        }
                    })
                }else{
                    console.log(responseGet);
                }
            },
            error => console.error(error)
        );


        this.requestProvider.getRequests$().subscribe(
            responseGet => this.requests = responseGet,
            error => console.error(error)
        )
    }


    sendToDriver(){

        setTimeout(() => {
            if(this.Drive.Driver && this.Drive.Request){
                this.drivers.splice(this.drivers.indexOf(this.Drive.Driver),1);
                this.requests.splice(this.requests.indexOf(this.Drive.Request),1);

                let address =
                    this.Drive.Request.street+" "+
                    this.Drive.Request.street_num+", "+
                    this.Drive.Request.city+", "+
                    //this.Drive.Request.country+
                    " ("+this.Drive.Request.zipcode+")"
                ;
                let rideObj = {
                    driver_name:this.Drive.Driver.user.firstName+' '+this.Drive.Driver.user.lastName,
                    client_name:this.Drive.Request.firstName+' '+this.Drive.Request.lastName,
                    address_from:address,
                    driver_phone:this.Drive.Driver.user.phone1,
                    client_phone:this.Drive.Request.phone,
                    date:new Date()
                };

                this.rideProvider.setRide$(rideObj).subscribe(
                    responseGet => {
                        console.log(responseGet)
                        this.api.rides.push(responseGet);
                        console.log(this.api.rides)
                    },
                    error => console.error(error)
                );

                this.Drive.Driver = null;
                this.Drive.Request = null;
                this.confirmation = null;
                this.cancel = null;
            }
        }, 2000);

    }


    selectThis(type,obj){
        if(type==='driver'){
            this.Drive.Driver = obj
        }else{
            this.Drive.Request = obj
        }
        console.log(type,obj);

        if(this.Drive.Driver && this.Drive.Request){
            this.confirmation = 1;
            this.cancel = 1;
            this.sendToDriver();
        }
    }

    cancelThis(){
        this.Drive.Driver = null;
        this.Drive.Request = null;
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
            if(responseGet && (Object.keys(responseGet).length !== 0) && responseGet.name !== 'SequelizeDatabaseError'){
                this.requests.push(responseGet);
            }else{
                console.error(responseGet);
            }
        });
        reqModal.present();
    }

    driverModal(){
        let uModal = this.modalCtrl.create(NewDriverModal);
        uModal.onDidDismiss(data => {
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
        uModal.present();
    }


}
