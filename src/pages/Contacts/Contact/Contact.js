import { interactionModes } from 'constants/interactionModes';
import { useContactsContext } from 'context/ContactsContext';
import { useAPI } from 'hooks/useAPI';
import React, { useEffect } from 'react';
import ControlButtons from '../ControlButtons';
import EditContact from '../EditContact';
import ViewContact from '../ViewContact';

const Contact = ({
  contactData = { contactId: '', name: '', email: '', phone: '', comment: '' },
}) => {
  const {
    interactionMode,
    setInteractionMode,
    setDeleteRequest,
    currentContacts,
  } = useContactsContext();

  useEffect(() => setInteractionMode(interactionModes.view), []);

  return (
    <>
      <ControlButtons
        style={{
          width: 'auto',
          height: '1.5em',
          position: 'absolute',
          top: '1em',
          right: '20%',
        }}
      >
        <ControlButtons.EditButton />
        <ControlButtons.DeleteButton
          onClick={() => {
            console.log(contactData);
            setDeleteRequest({ contactId: contactData.contactId });
          }}
        />
      </ControlButtons>
      {(() => {
        if (interactionMode === interactionModes.edit) {
          return <EditContact contactData={contactData} />;
        } else {
          return <ViewContact contactData={contactData} />;
        }
      })()}
    </>
  );
};

export default Contact;
