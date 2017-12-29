import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {TaxiProvider} from "../../providers/taxi";
import {RequestProvider} from "../../providers/request";
import {HistoryProvider} from "../../providers/history";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    taxis = [];
    requests = [];
    confirmation:number = null;

    Drive = {Taxi:null,Request:null};

    constructor(public navCtrl: NavController,
                public taxiProvider: TaxiProvider,
                public historyProvider: HistoryProvider,
                public requestProvider: RequestProvider,
                public alertCtrl:AlertController) {
    }

    ngOnInit(): void {
        this.taxiProvider.getDrivers$().subscribe(
            responseGet => this.taxis = responseGet,
            error => console.error(error)
        );
        this.requestProvider.getRequest$().subscribe(
            responseGet => this.requests = responseGet,
            error => console.error(error)
        )
    }


  selectThis(type,obj){

        if(type==='taxi'){
            this.Drive.Taxi = obj
        }else{
            this.Drive.Request = obj
        }

        console.log(type,obj);

      if(this.Drive.Taxi && this.Drive.Request){
          this.taxis.splice(this.taxis.indexOf(this.Drive.Taxi),1);
          this.requests.splice(this.requests.indexOf(this.Drive.Request),1);

          this.historyProvider.setHistory$().subscribe(
              responseGet => this.requests = responseGet,
              error => console.error(error)
          )

          setTimeout(() => {
              this.Drive.Taxi = null;
              this.Drive.Request = null;
              this.confirmation = 1;
          }, 300);


          setTimeout(() => {
              this.confirmation = null;
          }, 3000);
      }
  }


}
