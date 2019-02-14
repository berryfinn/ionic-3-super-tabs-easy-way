import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomeDetailsPage} from '../../pages/home/details/details';
//import { SuperTabsController } from '../../providers/super-tabs-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //@ViewChild(SuperTabs) superTabs: SuperTabs;

  public rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    //public superTabs: SuperTabsController
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  details() { 
    //this.superTabs.showToolbar(false);
    //this.navCtrl.canSwipeBack();
    this.rootNavCtrl.push(HomeDetailsPage);
  }
}
