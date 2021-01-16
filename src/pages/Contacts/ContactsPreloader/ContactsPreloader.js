import React from 'react';
import { StyledPreloader } from './ContactsPreloader.styles';

const ContactsPreloader = ({ children, ...args }) => {
  return <StyledPreloader {...args}>{children}</StyledPreloader>;
};

export default ContactsPreloader;
