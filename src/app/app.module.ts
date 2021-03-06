import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FormerDetailsPage } from '../pages/former-details/former-details';
import { DeliveryRequestPage } from '../pages/delivery-request/delivery-request';
import { TrucksPage } from '../pages/trucks/trucks';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NetworkEngineProvider } from '../providers/network-engine/network-engine';

import { HttpClientModule} from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { NewDeliveryPage } from '../pages/new-delivery/new-delivery';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormerDetailsPage,
    DeliveryRequestPage,
    TrucksPage,
    LoginPage,
    NewDeliveryPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FormerDetailsPage,
    DeliveryRequestPage,
    TrucksPage,
    LoginPage,
    NewDeliveryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkEngineProvider
  ]
})
export class AppModule {}
