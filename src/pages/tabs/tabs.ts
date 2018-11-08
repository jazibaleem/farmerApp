import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { FormerDetailsPage } from '../former-details/former-details';
import { DeliveryRequestPage } from '../delivery-request/delivery-request';
import { TrucksPage } from '../trucks/trucks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab4Root = FormerDetailsPage;
  tab5Root = DeliveryRequestPage;
  tab6Root = TrucksPage;

  constructor() {

  }
}
