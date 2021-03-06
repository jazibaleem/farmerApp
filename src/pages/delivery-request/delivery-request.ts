import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeliveryRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery-request',
  templateUrl: 'delivery-request.html',
})
export class DeliveryRequestPage {
 public anArray:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryRequestPage');
  }

  Add() {
    this.anArray.push({ 'value': '' });
  }

  Remove() {
    this.anArray.pop({ 'value': '' });
  }

}
