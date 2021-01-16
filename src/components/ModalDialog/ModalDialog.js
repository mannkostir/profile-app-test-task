import React, { useEffect } from 'react';
import {
  CloseDialogButton,
  CloseDialogIcon,
  StyledDialog,
} from './ModalDialog.styles';

const ModalDialog = ({
  isOpen = false,
  onClose = (e = new Event()) => {},
  children,
  ...args
}) => {
  useEffect(() => {
    document.body.setAttribute('isoverlay', isOpen);
  }, [isOpen]);
  return isOpen ? (
    <StyledDialog {...args}>
      <CloseDialogButton onClick={onClose}>
        <CloseDialogIcon width="100%" height="100%" />
      </CloseDialogButton>
      {children}
    </StyledDialog>
  ) : null;
};

export default ModalDialog;
