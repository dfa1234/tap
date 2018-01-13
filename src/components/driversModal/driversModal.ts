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
              public navParam: NavParams,) {
      console.log(this.navParam.get("car"))
  }

    drivers:any = this.api.drivers;
    car = this.navParam.get("car")


    carToDriverAssociate(driver){
        this.car.driver = driver;
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
