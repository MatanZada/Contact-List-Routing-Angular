import { ContactsService } from './../../services/contacts.service';
import { Contact } from './../../classes/contact';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-fill',
  templateUrl: './contact-fill.component.html',
  styleUrls: ['./contact-fill.component.scss'],
})
export class ContactFillComponent implements OnInit {
  @Input() contact: Contact = new Contact('', '', 0, '', false, new Date());
  constructor() {}

  ngOnInit(): void {}
}
