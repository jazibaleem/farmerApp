import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDeliveryPage } from './new-delivery';

@NgModule({
  declarations: [
    NewDeliveryPage,
  ],
  imports: [
    IonicPageModule.forChild(NewDeliveryPage),
  ],
})
export class NewDeliveryPageModule {}
