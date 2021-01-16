import fs from 'fs';
import User from '../models/User';
import ContactModel from '../models/Contact';

const fsPromises = fs.promises;

export default class ContactsService {
  constructor(user = User) {
    this.user = user;
  }
  async CreateContact({ name = '', email = '', phone = '', comment = '' }) {
    try {
      let db = await fsPromises.readFile('db.json');
      db = JSON.parse(db);

      const isContactExists = !!this.user.contacts.find(
        (contact) =>
          contact.name === name &&
          contact.email === email &&
          contact.phone === phone
      );

      if (isContactExists) {
        const err = new Error('User with such data already exists');
        err.status = '409';

        throw err;
      }

      const lastContactId =
        this.user.contacts[this.user.contacts.length - 1]?.id || 0;

      const contact = {
        ...ContactModel,
        name,
        email,
        phone,
        comment,
        id: `${+lastContactId + 1}`,
      };

      this.user.contacts.push(contact);

      db.users.map((user) => {
        if (user.id === this.user.id) {
          user.contacts = this.user.contacts;
        }
        return user;
      });

      await fsPromises.writeFile('db.json', JSON.stringify(db));

      return { contact };
    } catch (e) {
      throw e;
    }
  }
  async DeleteContact({ contactId = '' }) {
    try {
      let db = await fsPromises.readFile('db.json');
      db = JSON.parse(db);

      const previousLength = this.user.contacts.length;

      this.user.contacts = this.user.contacts.filter(
        (contact) => contact.id !== contactId
      );

      if (this.user.contacts.length === previousLength) {
        const err = new Error('No such contact is found');
        err.status = '404';

        throw err;
      }

      db.users.map((user) => {
        if (user.id === this.user.id) {
          user.contacts = this.user.contacts;
        }
        return user;
      });

      await fsPromises.writeFile('db.json', JSON.stringify(db));

      return { message: 'Contact deleted' };
    } catch (e) {
      throw e;
    }
  }
  async EditContact({ contactId = '', newData = {} }) {
    let db = await fsPromises.readFile('db.json');
    db = JSON.parse(db);

    const contactIndex = this.user.contacts.findIndex(
      (contact) => contact.id === contactId
    );

    if (contactIndex < 0) {
      const err = new Error('No such contact is found');
      err.status = '404';

      throw err;
    }

    this.user.contacts[contactIndex] = {
      ...this.user.contacts[contactIndex],
      ...newData,
    };

    db.users.map((user) => {
      if (user.id === this.user.id) {
        user.contacts = this.user.contacts;
      }
      return user;
    });

    await fsPromises.writeFile('db.json', JSON.stringify(db));

    return { contact: this.user.contacts[contactIndex] };
  }
  async GetContact({ contactId = '' }) {
    let db = await fsPromises.readFile('db.json');
    db = JSON.parse(db);

    const contact = this.user.contacts.find(
      (contact) => contact.id === contactId
    );

    if (!contact) {
      const err = new Error('No such contact is found');
      err.status = '404';

      throw err;
    }

    return { contact };
  }
  async GetAllContacts({}) {
    const contacts = this.user.contacts;

    return { contacts };
  }
}
