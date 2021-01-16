import React from 'react';
import { ContactWrapper } from './ViewContact.styles';

const ViewContact = ({
  contactData = { contactId: '', name: '', email: '', phone: '', comment: '' },
}) => {
  return (
    <ContactWrapper>
      <span>
        Name: <strong>{contactData.name}</strong>
      </span>
      <span>
        Phone: <strong>{contactData.phone}</strong>
      </span>
      <span>
        Email: <strong>{contactData.email}</strong>
      </span>
      <span>
        Comment: <strong>{contactData.comment}</strong>
      </span>
    </ContactWrapper>
  );
};

export default ViewContact;
