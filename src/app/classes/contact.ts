export class Contact {
  id: string = '';
  name: string = '';
  age: number = 0;
  phone: string = '';
  isLikeCold: boolean = false;
  dateOfBirth: Date = new Date();

  constructor(
    id: string,
    name: string,
    age: number,
    phone: string,
    isLikeCold: boolean,
    dateOfBirth: Date
  ) {
    this.id = id;
    this.setName(name);
    this.age = age;
    this.setPhone(phone);
    this.isLikeCold = isLikeCold;
    this.setDateOfBirth(dateOfBirth);
  }
  setName(name: string) {
    if (name.length > 1) {
      this.name = name;
    }
  }
  setPhone(phone: string) {
    if (phone.length > 8) {
      this.phone = phone;
    }
  }
  setDateOfBirth(dateOfBirth: Date) {
    if (dateOfBirth < new Date()) {
      this.dateOfBirth = dateOfBirth;
    }
  }
}
