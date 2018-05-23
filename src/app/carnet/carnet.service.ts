import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './contact';

@Injectable()
export class CarnetService {
  url = 'http://172.16.16.11:88/~changuels/fw-cote-client/carnet_adresses';
  constructor(private ws: Http) { }

  public getContacts() {
    return this.ws.get(this.url + '/ajax_liste.php');
  } 
  public getDetails(contact : Contact) {
    return this.ws.get(this.url + '/ajax_details.php?id=' + contact.id);
  }
  public doSupprimer(contact: Contact) {
    return this.ws.get(this.url + '/ajax_supprime.php?id=' + contact.id);
  }
}
