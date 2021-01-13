import { interactionModes } from 'constants/interactionModes';
import { useContactsContext } from 'context/ContactsContext';
import React, { useEffect } from 'react';
import ControlButtons from '../ControlButtons';
import EditContact from '../EditContact';
import ViewContact from '../ViewContact';

const Contact = ({ contactData = { contactId: 'asd', contactName: '' } }) => {
  const {
    interactionMode,
    setInteractionMode,
    setDeleteRequest,
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
            setDeleteRequest({ contactId: contactData.contactId });
          }}
        />
      </ControlButtons>
      {(() => {
        if (interactionMode === interactionModes.edit) {
          return <EditContact />;
        } else {
          return <ViewContact />;
        }
      })()}
    </>
  );
};

export default Contact;
