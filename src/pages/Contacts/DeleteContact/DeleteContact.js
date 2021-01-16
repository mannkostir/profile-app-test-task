import { useContactsContext } from 'context/ContactsContext';
import React from 'react';

const DeleteContact = () => {
  const { setDeleteRequest } = useContactsContext();

  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      Do you really want to delete the contact?
      <button
        onClick={() => {
          setDeleteRequest({});
        }}
      >
        Nah, just kiddin'
      </button>
      <button
        onClick={(e) => {
          if (isOn) toggle();
          setDeleteRequest({});
          handleDelete(e);
        }}
        type="submit"
      >
        Yes!
      </button>
    </div>
  );
};

export default DeleteContact;
