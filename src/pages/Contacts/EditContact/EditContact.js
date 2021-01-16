import ErrorMessage from 'components/ErrorMessage';
import { interactionModes } from 'constants/interactionModes';
import { useContactsContext } from 'context/ContactsContext';
import { useAPI } from 'hooks/useAPI';
import React, { useEffect, useState } from 'react';
import ContactFormCompound from '../ContactForm';

const EditContact = ({
  contactData = { contactId: '', name: '', email: '', phone: '', comment: '' },
}) => {
  const { setInteractionMode, editContact } = useContactsContext();

  const [error, setError] = useState({ message: '' });

  const api = useAPI();

  useEffect(() => {
    return () => setInteractionMode(interactionModes.view);
  }, []);

  const handleEdit = async (formValues = {}) => {
    try {
      const data = await api.updateContact({
        contactId: contactData.contactId,
        updatedData: formValues,
      });

      const newContact = data.contact;

      editContact(contactData.contactId, newContact);

      setInteractionMode(interactionModes.view);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <ContactFormCompound disabled={error?.message} onSubmit={handleEdit}>
      <ErrorMessage>{error?.message}</ErrorMessage>
      <ContactFormCompound.Form>
        <ContactFormCompound.NameInput defaultValue={contactData.name} />
        <ContactFormCompound.PhoneInput defaultValue={contactData.phone} />
        <ContactFormCompound.EmailInput defaultValue={contactData.email} />
        <ContactFormCompound.CommentInput defaultValue={contactData.comment} />
        <ContactFormCompound.SubmitButton>
          Save Changes
        </ContactFormCompound.SubmitButton>
      </ContactFormCompound.Form>
    </ContactFormCompound>
  );
};

export default EditContact;
