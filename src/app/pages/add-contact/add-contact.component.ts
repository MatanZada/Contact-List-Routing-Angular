import { Contact } from './../../classes/contact';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact('', '', 0, '', false, new Date());
  constructor(
    private _contactService: ContactsService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  addContact(): void {
    this._contactService.addContact(this.contact);
    this._router.navigate(['..']);
  }
}
