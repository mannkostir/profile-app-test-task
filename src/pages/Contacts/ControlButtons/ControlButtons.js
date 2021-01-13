import { interactionModes } from 'constants/interactionModes';
import { useContactsContext } from 'context/ContactsContext';
import React from 'react';
import {
  ControlButton,
  ControlButtonsContainer,
  DeleteIcon,
  EditIcon,
} from './ControlButtons.styles';

const ControlButtons = ({ children, ...args }) => {
  return (
    <ControlButtonsContainer {...args}>{children}</ControlButtonsContainer>
  );
};

const EditButton = ({ onClick = (e) => {}, ...args }) => {
  const { setInteractionMode, interactionMode } = useContactsContext();

  const handleClick = (e) => {
    setInteractionMode(
      interactionMode === interactionModes.edit
        ? interactionModes.view
        : interactionModes.edit
    );
    onClick(e);
  };

  return (
    <ControlButton {...args} onClick={handleClick}>
      <EditIcon />
    </ControlButton>
  );
};

const DeleteButton = ({ onClick = (e) => {}, ...args }) => {
  const { setDeleteRequest, deleteRequest } = useContactsContext();

  const handleClick = (e) => {
    if (!deleteRequest?.contactId && e?.contactId) {
      setDeleteRequest({ contactId: e.contactId });
    }
    onClick(e);
  };

  return (
    <ControlButton {...args} onClick={handleClick}>
      <DeleteIcon />
    </ControlButton>
  );
};

ControlButtons.EditButton = EditButton;
ControlButtons.DeleteButton = DeleteButton;

export default ControlButtons;
