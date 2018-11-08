import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryRequestPage } from './delivery-request';

@NgModule({
  declarations: [
    DeliveryRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliveryRequestPage),
  ],
})
export class DeliveryRequestPageModule {}
