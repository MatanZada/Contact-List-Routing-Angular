import { Contact } from './../../classes/contact';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact: Contact = new Contact(
    '',
    'nir',
    33,
    '0504201059',
    false,
    new Date()
  );
  constructor() {}
}
