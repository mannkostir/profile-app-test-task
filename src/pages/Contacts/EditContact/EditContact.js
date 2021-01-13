import { interactionModes } from 'constants/interactionModes';
import { useContactsContext } from 'context/ContactsContext';
import { useForm } from 'hooks/useForm';
import React from 'react';

const EditContact = ({ contactData = {} }) => {
  const { setInteractionMode } = useContactsContext();

  const { values, handleChange } = useForm({});

  const handleEdit = (e) => {
    e.preventDefault();
    setInteractionMode(interactionModes.view);
  };

  return (
    <form onSubmit={handleEdit}>
      <label>
        Name:
        <input type="text" onChange={handleChange} />
      </label>
      <br />
      <label>
        Mobile:
        <input type="tel" onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" onChange={handleChange} />
      </label>
      <br />
      <label>
        Comment:
        <textarea onChange={handleChange} />
      </label>
      <br />
      <button onClick={() => setInteractionMode(interactionModes.view)}>
        Discard
      </button>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditContact;
