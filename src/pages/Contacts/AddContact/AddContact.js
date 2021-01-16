import ErrorMessage from 'components/ErrorMessage';
import SideSection from 'components/SideSection';
import { useContactsContext } from 'context/ContactsContext';
import { useAPI } from 'hooks/useAPI';
import { useInput } from 'hooks/useInput';
import { useToggle } from 'hooks/useToggle';
import React, { useEffect, useRef, useState } from 'react';
import ContactFormCompound from '../ContactForm';
import { AddContactToggleIcon } from './AddContact.styles';

const AddContact = () => {
  const { isOn, toggle } = useToggle();

  const api = useAPI();

  const formRef = useRef();

  const { triggerInputChangeEvent } = useInput();

  const { addContact } = useContactsContext();

  const [error, setError] = useState({ message: '' });

  const handleSubmit = async (formValues) => {
    try {
      const data = await api.createContact({
        name: formValues.name,
        comment: formValues.comment,
        email: formValues.email,
        phone: formValues.phone,
      });

      const contact = data.contact;

      addContact(contact);

      if (error) setError();

      formRef.current.querySelectorAll('input').forEach((input) => {
        triggerInputChangeEvent(input, '');
      });

      if (isOn) toggle();
    } catch (e) {
      setError(e);
    }
  };

  return (
    <SideSection
      isOpen={isOn}
      onClose={toggle}
      ToggleIcon={AddContactToggleIcon}
      xAxisCoords="40vh"
    >
      <h2>Add Contact</h2>
      <ContactFormCompound disabled={api.isLoading} onSubmit={handleSubmit}>
        <ErrorMessage>{error?.message}</ErrorMessage>
        <ContactFormCompound.Form ref={formRef}>
          <ContactFormCompound.NameInput />
          <ContactFormCompound.PhoneInput />
          <ContactFormCompound.EmailInput />
          <ContactFormCompound.CommentInput />
          <ContactFormCompound.SubmitButton
            style={{ padding: '0.5em 1em', marginBottom: '0.5em' }}
          >
            Add
          </ContactFormCompound.SubmitButton>
        </ContactFormCompound.Form>
      </ContactFormCompound>
    </SideSection>
  );
};

export default AddContact;
