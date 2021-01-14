import fs from 'fs';
import Contact from '../models/Contact';

const fsPromises = fs.promises;

export default class AuthService {
  constructor(contactModel = Contact) {
    this.contactModel = contactModel;
  }
  async CreateContact({ name = '', email = '', phone = '', comment = '' }) {
    try {
      const db = await fsPromises.readFile('db.json');
      const data = JSON.parse(db);

      const isContactExists = !!data.contacts.find(
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

      const lastContactId = data.contacts[data.contacts.length - 1]?.id || 0;

      const contact = {
        ...this.contactModel,
        name,
        email,
        phone,
        id: lastContactId,
      };

      data.contacts.push(contact);

      await fsPromises.writeFile('db.json', JSON.stringify(data));

      return { contact };
    } catch (e) {
      throw e;
    }
  }
  async DeleteContact({ contactId = '' }) {
    try {
      const db = await fsPromises.readFile('db.json');
      const data = JSON.parse(db);

      const previousLength = data.contacts.length;

      data.contacts = data.contacts.filter(
        (contact) => contact.id !== contactId
      );

      if (data.contacts.length === previousLength) {
        const err = new Error('No such contact is found');
        err.status = '404';

        throw err;
      }

      await fsPromises.writeFile('db.json', JSON.stringify(data));

      return { contacts: data.contacts };
    } catch (e) {
      throw e;
    }
  }
  async EditContact({ contactId = '', newData = {} }) {
    const db = await fsPromises.readFile('db.json');
    const data = JSON.parse(db);

    let isFound = false;
    let updatedContact = {};

    data.contacts = data.contacts.map((contact) => {
      if (contact.id === contactId) {
        isFound = true;
        updatedContact = { ...contact, ...newData };
        return { ...contact, ...newData };
      }
    });

    if (!isFound) {
      const err = new Error('No such contact is found');
      err.status = '404';

      throw err;
    }

    await fsPromises.writeFile('db.json', JSON.stringify(data));

    return { updatedContact };
  }
  async GetContact({ contactId = '' }) {
    const db = await fsPromises.readFile('db.json');
    const data = JSON.parse(db);

    const contact = data.contacts.find((contact) => contact.id === contactId);

    if (!contact) {
      const err = new Error('No such contact is found');
      err.status = '404';

      throw err;
    }

    return { contact };
  }
  async GetAllContacts({}) {
    const db = await fsPromises.readFile('db.json');
    const data = JSON.parse(db);

    return { contacts: data.contacts };
  }
}
