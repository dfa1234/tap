import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HistoryProvider} from "../../providers/history";

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

    history = [];

  constructor(public navCtrl: NavController,
              private historyProvider: HistoryProvider) {

  }

    ngOnInit(): void {
        this.historyProvider.getHistory$().subscribe(
            responseGet => this.history = responseGet,
            error => console.error(error)
        );
    }
}
