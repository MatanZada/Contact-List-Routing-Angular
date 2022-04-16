import { Contact } from './../../classes/contact';
import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-wrapper',
  templateUrl: './contacts-wrapper.component.html',
  styleUrls: ['./contacts-wrapper.component.scss'],
})
export class ContactsWrapperComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private _contactsService: ContactsService) {
    this.contacts = this._contactsService.getContacts();
  }

  ngOnInit(): void {}
}
