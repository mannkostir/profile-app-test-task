import SideSection from 'components/SideSection';
import { useForm } from 'hooks/useForm';
import { useToggle } from 'hooks/useToggle';
import React from 'react';
import { AddContactToggleIcon, AddContactForm } from './AddContact.styles';

const AddContact = () => {
  const { isOn, toggle } = useToggle();

  const { values, handleChange } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOn) toggle();
  };

  return (
    <SideSection
      isOpen={isOn}
      onClose={toggle}
      ToggleIcon={AddContactToggleIcon}
      xAxisCoords="40vh"
    >
      <h2>Add Contact</h2>
      <AddContactForm onSubmit={handleSubmit}>
        <input
          type="text"
          id="contactName"
          placeholder="Enter name"
          required={true}
        />
        <input
          type="tel"
          id="contactPhone"
          placeholder="Enter mobile"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <input
          type="email"
          id="contactEmail"
          placeholder="Enter email"
          required={true}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </AddContactForm>
    </SideSection>
  );
};

export default AddContact;
