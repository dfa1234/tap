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

    myProfile:{user:{}} = {user:JSON.parse(sessionStorage.getItem('myProfile'))};
    requests:any = JSON.parse(sessionStorage.getItem('requests'));
    rides:any = JSON.parse(sessionStorage.getItem('rides'));
    drivers:any = JSON.parse(sessionStorage.getItem('drivers'));
    cars:any = JSON.parse(sessionStorage.getItem('cars'));

    //TODO merkazia;


    isLoggedIn(){
        return sessionStorage.getItem('myProfile') !== null;
    }

    setProfile(profile){
        sessionStorage.setItem('myProfile', JSON.stringify(profile));
    }


    getRequests(){
        this.requestProvider.getRequests$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('requests: ',responseGet);
                    sessionStorage.setItem('requests', JSON.stringify(responseGet));
                    this.requests = responseGet;
                } else {
                    console.error(responseGet);
                }
            },
            error => console.error(error)
        );
    }

    getRides(){
        this.rideProvider.getRides$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('rides: ',responseGet);
                    sessionStorage.setItem('rides', JSON.stringify(responseGet));
                    this.rides = responseGet;
                } else {
                    console.error(responseGet);
                }
            },
            error => console.error(error)
        );
    }

    getDrivers(){
        this.driverProvider.getDrivers$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('drivers: ',responseGet);
                    sessionStorage.setItem('drivers', JSON.stringify(responseGet));
                    this.drivers = responseGet;
                } else {
                    console.error(responseGet);
                }
            },
            error => console.error(error)
        );
    }

    getCars(){
        this.carProvider.getCars$().subscribe(
            responseGet => {
                if (responseGet && responseGet.constructor === Array && responseGet.length >= 1) {
                    console.log('cars: ',responseGet);
                    this.cars = responseGet;
                    sessionStorage.setItem('cars', JSON.stringify(responseGet));
                } else {
                    console.error(responseGet);
                }
            },
            error => console.error(error)
        );
    }


    refreshDatas(type){

        console.log(type);
        if(type === 'all'){
            this.getCars();
            this.getRequests();
            this.getRides();
            this.getDrivers();

        }else if (type === 'requests'){
            this.getRequests()
        }else if (type === 'rides'){
            this.getRides()
        }else if (type === 'drivers'){
            this.getDrivers()
        }else if (type === 'cars'){
            this.getCars()
        }
    }


}
