import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormerDetailsPage } from './former-details';

@NgModule({
  declarations: [
    FormerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FormerDetailsPage),
  ],
})
export class FormerDetailsPageModule {}
