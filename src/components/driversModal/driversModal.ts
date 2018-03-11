import {Component} from '@angular/core';
import {CarProvider} from "../../providers/car";
import {AppApi} from "../../app/app.api";
import {ViewController, NavParams} from "ionic-angular";

@Component({
    selector: 'driversModal',
    templateUrl: 'driversModal.html'
})

export class driversModal {

  constructor(private carProvider: CarProvider,
              private api: AppApi,
              private viewCtrl: ViewController,
              private navParam: NavParams) {
      console.log(this.navParam.get("car"))
  }

    driversList:any = this.api.drivers;

    getCars(){
        let myDrivers = [];
        this.carProvider.getCars$().subscribe(
            responseGet => {
                this.driversList.forEach( (i) => {
                    let test = responseGet.find(x => x.idDriver === i.idUser);
                    if (!test){
                        myDrivers.push(i)
                    }
                });
            },
            error => console.error(error)
        );
        return myDrivers;
    }

    drivers = this.getCars();
    car = this.navParam.get("car")


    carToDriverAssociate(driver){
        this.car.idDriver = driver.idUser;
        console.log(driver,this.car);
            this.carProvider.updateCar$(this.car).subscribe(
                responseGet => this.viewCtrl.dismiss(responseGet),
                error => console.error(error)
            )
    }

    closeModal():void{
        this.viewCtrl.dismiss();
    }

}
