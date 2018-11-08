import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NetworkEngineProvider Provider');
  }

  readTable() : Promise<any>
  {
     let url = "http://localhost:1234/api/getData.php";
     let request = this.http.get(url);

     return request.toPromise();
  }

  addFarmer(_fullname, _farm_location_latitude, _farm_location_longitude, 
    _no_of_trays, _permanent_warehouse, _warehouse_comments, _multiple_packing, 
    _packing_comments, _contact_person, _contact_no, _bank, _bank_branch, _bank_account_number, _bank_title,
     _swift_code, _credit_card_number, _cvv, _expiry_date)
  {
    let url = "http://localhost:1234/api/insertFarmer.php";

    let param = {
      fullname: _fullname, 
      farm_location_latitude: _farm_location_latitude,
      farm_location_longitude: _farm_location_longitude,
      no_of_trays: _no_of_trays,
      permanent_warehouse: _permanent_warehouse,
      warehouse_comments: _warehouse_comments,
      multiple_packing: _multiple_packing,
      packing_comments: _packing_comments,
      contact_person: _contact_person,
      contact_no: _contact_no, 
      bank: _bank,
      bank_branch: _bank_branch,
      bank_account_number: _bank_account_number,
      bank_title: _bank_title,
      swift_code: _swift_code,
      credit_card_number: _credit_card_number,
      cvv: _cvv,
      expiry_date: _expiry_date};

      let request = this.http.post(url, param);

      return request.toPromise();
  }

}
