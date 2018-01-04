import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {CarProvider} from "../../providers/car";
import {NewCarModal} from "../../components/newCarModal/newCarModal";

@Component({
  selector: 'page-car',
  templateUrl: 'car.html'
})
export class CarPage {

    cars = [];

    constructor(public navCtrl: NavController,
                private carProvider: CarProvider,
                public modalCtrl: ModalController,
    ) {

    }

    ngOnInit(): void {
        this.carProvider.getCars$().subscribe(
            responseGet => this.cars = responseGet,
            error => console.error(error)
        );
    }

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
