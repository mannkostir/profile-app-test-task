import React from 'react';

const ViewContact = ({
  contactData = { contactId: '', name: '', email: '', phone: '', comment: '' },
}) => {
  return (
    <>
      Name: {contactData.name}
      <br />
      Mobile: {contactData.phone}
      <br />
      Email: {contactData.email}
      <br />
      Comment: {contactData.comment}
    </>
  );
};

export default ViewContact;
