import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {TaxiProvider} from "../../providers/taxi";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,
                public taxiProvider: TaxiProvider,
                public alertCtrl:AlertController) {

    }

    taxis = this.taxiProvider.getDrivers$();

  streets =[
    "Kiryat Belz 18",
    "Kiryat Hayovel 1",
    "Kiryat Mattersdorf 15",
    "Kiryat Menachem 52",
    "Kiryat Moshe 8",
    "Kiryat Sanz 1",
    "Kiryat Shmuel 8",
    "Kiryat Wolfson 18",
    "Machane Yehuda 1",
    "Machane Yisrael 8",
    "Malha 68",
    "Mamilla 88",
    "Mazkeret Moshe 45",
    "Meah Shearim 18",
    "Mekor Baruch 74",
  ];


  selectThis(currentTaxi,currentStreet){

    //this.taxis.splice(this.taxis.indexOf(currentTaxi),1);

    this.streets.splice(this.streets.indexOf(currentStreet),1);

    this.currentTaxi = null;
    this.currentStreet = null;
    //this.alertCtrl.create({'Confirmation','Taxi '+currentTaxi.name+' sent'}).present();
  }


  currentTaxi:any;
  currentStreet:any;

}
