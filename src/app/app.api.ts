import {Injectable} from "@angular/core";
import {RideProvider} from "../providers/ride";
import {RequestProvider} from "../providers/request";
import {DriverProvider} from "../providers/driver";
import {CarProvider} from "../providers/car";



@Injectable()
export class AppApi{

    constructor(public driverProvider: DriverProvider,
                public carProvider: CarProvider,
                public rideProvider: RideProvider,
                public requestProvider: RequestProvider) {

    }

    requests:any = [];
    homeCars:any = [];
    cars:any = [];
    rides:any = [];
    drivers:any = [];
    myProfile:{user} = {user:{}};
    //TODO merkazia:{location} = {location:null};


    newProcces(){

        this.carProvider.getCars$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('homeCars: ',responseGet);
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
            });


        this.requestProvider.getRequests$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('requests: ',responseGet);
                    responseGet.forEach( (i) => {
                        //TODO if (i.city === this.merkazia.location){
                            this.requests.push(i)
                        //}
                    })
                } else {
                    console.error(responseGet);
                }
            });

        this.rideProvider.getRides$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('rides: ',responseGet);
                    this.rides = responseGet
                } else {
                    console.error(responseGet);
                }
            });

        this.driverProvider.getDrivers$().subscribe(
            responseGet => {
                if(responseGet && responseGet.constructor === Array && responseGet.length >= 1){
                    console.log('drivers: ',responseGet);
                    responseGet.forEach( (i) => {
                        //if (i.status === '1'){
                        this.drivers.push(i)
                        //}
                    })
                }else{
                    console.log(responseGet);
                }
            },
            error => console.error(error)
        );

        this.carProvider.getCars$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('cars: ',responseGet);
                    this.cars = responseGet
                } else {
                    console.error(responseGet);
                }
            });
    }


}
