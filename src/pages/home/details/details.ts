import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home-details',
  templateUrl: 'details.html'
})
export class HomeDetailsPage {

  first = true;

  constructor(public navCtrl: NavController) {
  }

  back(e) {
    if (this.first) {
      if (e.deltaX > 0) { // swipe to right
        this.navCtrl.pop();
        this.first = false;
      }
    }
  }

}
