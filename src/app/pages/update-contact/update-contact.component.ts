import { ContactsService } from './../../services/contacts.service';
import { Contact } from './../../classes/contact';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss'],
})
export class UpdateContactComponent implements OnInit {
  contact: Contact = new Contact('', '', 0, '', false, new Date());
  constructor(
    private _route: ActivatedRoute,
    private _contactsService: ContactsService
  ) {
    let contactId = this._route.snapshot.paramMap.get('contactId');
    if (contactId) {
      this.contact = this._contactsService.getContactById(contactId);
    }
  }

  ngOnInit(): void {}
}
