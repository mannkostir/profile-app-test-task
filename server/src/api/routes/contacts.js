import ContactsService from '../../services/ContactsService';

export default (prefix = '', app) => {
  app.post(`${prefix}`, async (req, res, next) => {
    try {
      const { name, email, phone, comment } = req.body;

      const contactsService = new ContactsService();

      const contact = await contactsService.CreateContact({
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

      const contactsService = new ContactsService();

      await contactsService.DeleteContact({ contactId });

      return res.status(200).json({
        message: 'Contact successfully deleted',
      });
    } catch (e) {
      return next(e);
    }
  });

  app.put(`${prefix}/:contactId`, async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const { payload } = req.body;

      const contactsService = new ContactsService();

      const updatedContact = await contactsService.EditContact({
        contactId,
        newData: payload,
      });

      return res.status(200).json({
        contact: updatedContact,
        message: 'Contact successfully updated',
      });
    } catch (e) {
      return next(e);
    }
  });

  app.get(`${prefix}/:contactId`, async (req, res, next) => {
    try {
      const { contactId } = req.params;

      const contactsService = new ContactsService();

      const contact = await contactsService.GetContact({ contactId });

      return res.status(200).json({
        contact,
      });
    } catch (e) {
      return next(e);
    }
  });
  app.get(`${prefix}`, async (req, res, next) => {
    try {
      const contactsService = new ContactsService();

      const contacts = await contactsService.GetAllContacts({});

      return res.status(200).json({
        contacts,
      });
    } catch (e) {
      return next(e);
    }
  });
};
