import {Component} from '@angular/core';
import {AppApi} from "../../app/app.api";
import {ViewController, NavParams} from "ionic-angular";
import {CarProvider} from "../../providers/car";

@Component({
    selector: 'carsModal',
    templateUrl: 'carsModal.html'
})

export class carsModal {

  constructor(private carProvider: CarProvider,
              private api: AppApi,
              private viewCtrl: ViewController,
              public navParam: NavParams,) {
      console.log(this.navParam.get("driver"))
  }

    cars:any = this.api.cars;
    driver = this.navParam.get("driver");

    driverToCarAssociate(car){
        car.idDriver = this.driver.idUser;
        console.log(car);
        this.carProvider.updateCar$(car).subscribe(
                responseGet => this.viewCtrl.dismiss(responseGet),
                error => console.error(error)
            )
    }

    closeModal():void{
        this.viewCtrl.dismiss();
    }

}
