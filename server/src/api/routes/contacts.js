import ContactsService from '../../services/ContactsService';
import attachCurrentUser from '../middlewares/attachCurrentUser';
import getCurrentUserId from '../middlewares/getCurrentUserId';
import { EventEmitter } from 'events';

export default (prefix = '', app, wss) => {
  app.use(`${prefix}`, getCurrentUserId, attachCurrentUser);

  app.post(`${prefix}`, async (req, res, next) => {
    try {
      const { name, email, phone, comment } = req.body;

      const contactsService = new ContactsService(res.locals.user);

      const { contact } = await contactsService.CreateContact({
        name,
        email,
        phone,
        comment,
      });

      return res
        .status(201)
        .json({ contact, message: `Contact successfully created` });
    } catch (e) {
      return next(e);
    }
  });

  app.delete(`${prefix}/:contactId`, async (req, res, next) => {
    try {
      const { contactId } = req.params;

      console.log(req.params);

      const contactsService = new ContactsService(res.locals.user);

      const { message } = await contactsService.DeleteContact({ contactId });

      return res.status(200).json({
        message,
      });
    } catch (e) {
      return next(e);
    }
  });

  app.put(`${prefix}/:contactId`, async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const { payload } = req.body;

      const contactsService = new ContactsService(res.locals.user);

      const { contact } = await contactsService.EditContact({
        contactId,
        newData: payload,
      });

      return res.status(200).json({
        contact,
        message: 'Contact successfully updated',
      });
    } catch (e) {
      return next(e);
    }
  });

  app.get(`${prefix}/:contactId`, async (req, res, next) => {
    try {
      const { contactId } = req.params;

      const contactsService = new ContactsService(res.locals.user);

      const { contact } = await contactsService.GetContact({ contactId });

      return res.status(200).json({
        contact,
      });
    } catch (e) {
      return next(e);
    }
  });
  app.get(`${prefix}`, async (req, res, next) => {
    try {
      const contactsService = new ContactsService(res.locals.user);

      const { contacts } = await contactsService.GetAllContacts({});

      console.log('CONTACTS', contacts);

      return res.status(200).json({
        contacts,
      });
    } catch (e) {
      return next(e);
    }
  });
};
