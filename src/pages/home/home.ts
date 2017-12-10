import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  taxis = [
    {
      "name":"Nom",
      "id":6848646
    },
    {
      "name":"Nom",
      "id":6446664
    },
    {
      "name":"Nom",
      "id":6448668
    },
    {
      "name":"Nom",
      "id":6465466
    },
    {
      "name":"Nom",
      "id":6456646
    },
    {
      "name":"Nom",
      "id":65464566
    },
    {
      "name":"Nom",
      "id":864668
    },
    {
      "name":"Nom",
      "id":8966468
    },
    {
      "name":"Nom",
      "id":864688
    },
    {
      "name":"Nom",
      "id":6546888
    },
    {
      "name":"Nom",
      "id":98794848
    },
    {
      "name":"Nom",
      "id":9874848
    },
    {
      "name":"Nom",
      "id":554848
    },
    {
      "name":"Nom",
      "id":1659948
    },
    {
      "name":"Nom",
      "id":1658568
    },
    {
      "name":"Nom",
      "id":8954848
    },


  ];



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

    this.taxis.splice(this.taxis.indexOf(currentTaxi),1);

    this.streets.splice(this.streets.indexOf(currentStreet),1);

    this.currentTaxi = null;
    this.currentStreet = null;
    //this.alertCtrl.create({'Confirmation','Taxi '+currentTaxi.name+' sent'}).present();
  }


  currentTaxi:any;
  currentStreet:any;


  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

  }

}
