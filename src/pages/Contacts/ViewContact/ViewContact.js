import React from 'react';

const ViewContact = ({ contactData = {} }) => {
  return (
    <>
      Name: John Doe
      <br />
      Mobile: +7-888-888-88-88
      <br />
      Email: qwerty@asd.xyz
      <br />
      Comment: Some mean person that's for sure
    </>
  );
};

export default ViewContact;
