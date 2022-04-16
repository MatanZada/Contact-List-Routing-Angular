import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [];
  constructor() {
    let contact = new Contact('1', 'matan', 23, '0509644553', true, new Date());
    let contact2 = new Contact('2', 'nir', 35, '0504201059', false, new Date());
    let contact3 = new Contact(
      '3',
      'yonatan',
      28,
      '0509644552',
      true,
      new Date()
    );
    this.contacts.push(contact, contact2, contact3);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: string): Contact {
    return (
      this.contacts.find((contact) => contact.id === id) ??
      new Contact('', '', 0, '', false, new Date())
    );
  }
  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
