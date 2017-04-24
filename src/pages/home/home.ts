import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Contacts]
})
export class HomePage {

  constructor(public navCtrl: NavController, private contacts: Contacts) {

  }
  testFun(){
    let contact: Contact = this.contacts.create();
    contact.find(['*']).then((contacts)=>{
      alert(JSON.stringify(contacts[0]));
    })
  }
}
