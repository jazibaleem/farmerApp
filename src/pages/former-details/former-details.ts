import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';


/**
 * Generated class for the FormerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-former-details',
  templateUrl: 'former-details.html',
})
export class FormerDetailsPage {
  responseTxt: any;
  constructor(public navCtrl: NavController,public navParams:NavParams, public network: NetworkEngineProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormerDetailsPage');
  }

  showTable(){
    this.network.readTable().then(data => {
      console.log("Data is : " + JSON.stringify(data));
      this.responseTxt = "" + JSON.stringify(data);
    })
  }

  addFarmer(_fullname, _farm_location_latitude, _farm_location_longitude, 
    _no_of_trays, _permanent_warehouse, _warehouse_comments, _multiple_packing, 
    _packing_comments, _contact_person, _contact_no, _bank, _bank_branch, _bank_account_number, _bank_title,
     _swift_code, _credit_card_number, _cvv, _expiry_date)
  {
    this.network.addFarmer(_fullname, _farm_location_latitude, _farm_location_longitude, 
      _no_of_trays, _permanent_warehouse, _warehouse_comments, _multiple_packing, 
      _packing_comments, _contact_person, _contact_no, _bank, _bank_branch, _bank_account_number, _bank_title,
       _swift_code, _credit_card_number, _cvv, _expiry_date).then(data => {
        console.log("Data is : " + JSON.stringify(data));
        this.responseTxt = "" + JSON.stringify(data);
      })
  }

}
