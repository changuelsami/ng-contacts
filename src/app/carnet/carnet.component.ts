import { CarnetService } from './carnet.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css', './bootstrap.css']
})
export class CarnetComponent implements OnInit {

  contacts: Contact[];
  unContact: Contact;
  constructor(private service: CarnetService) {}

  ngOnInit() {
    this.service.getContacts().subscribe(response => {
        this.contacts = response.json();
      })
  }

  details(contact) {
    this.service.getDetails(contact).subscribe(response => {
      this.unContact = response.json();
    })
  }

  supprimer(contact) {
    console.log("Supp : ", contact)
    this.service.doSupprimer(contact).subscribe(response => {
      console.log('Retour:', response);
      let resultat = response.json();
      if (resultat == 1) {
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
      }
    })
  }

}
