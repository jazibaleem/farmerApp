import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  wareHouseToggle: boolean = false;
  multiplePackingToggle: boolean = false;
  constructor(public navCtrl: NavController, public network:NetworkEngineProvider) {

  }

  

}
