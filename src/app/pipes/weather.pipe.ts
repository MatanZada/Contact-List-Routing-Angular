import { Contact } from './../classes/contact';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather',
})
export class WeatherPipe implements PipeTransform {
  transform(contact: Contact, ...args: unknown[]): string {
    return contact.isLikeCold + (contact.isLikeCold ? '🧊' : '🔥');
  }
}
