import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CarProvider} from "../../providers/car";
import {NewCarModal} from "../../components/newCarModal/newCarModal";
import {AppApi} from "../../app/app.api";

@Component({
  selector: 'page-car',
  templateUrl: 'car.html'
})
export class CarPage {


    constructor(public navCtrl: NavController,
                private api: AppApi,
                public modalCtrl: ModalController,
    ) {

    }

    cars:any = this.api.cars;

    newCarModal(){
        let carModal = this.modalCtrl.create(NewCarModal);
        carModal.onDidDismiss(data => {
            if(data === null){

            }else{
                if(data && (Object.keys(data).length !== 0) && data.name !== 'SequelizeDatabaseError'){
                    console.log(data);
                    this.cars.push(data);
                }else{
                    console.error(data);
                }
            }
        });
        carModal.present();
    }

}
