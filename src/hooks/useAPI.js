export const useAPI = () => {
  const signUp = async ({ username = '', password = '' }) => {
    const res = await fetch('/auth/signup', {
      method: 'POST',
      body: { username, password },
    });
    const data = await res.json();

    return data;
  };

  const signIn = async ({ username = '', password = '' }) => {
    const res = await fetch('/auth/signin', {
      method: 'POST',
      body: { username, password },
    });
    const data = await res.json();

    return data;
  };

  const signOut = async () => {
    await fetch('/auth/logout', {
      method: 'POST'
    });
  };

  const createContact = ({ name = '', email = '', phone = '', comment = '' }) => {
    const res = await fetch('/contacts/', {
      method: 'POST',
      body: { name, email, phone, comment }
    });
    const data = await res.json();

    return data;
  };

  const deleteContact = ({contactId =  ''}) => {
    const res = await fetch(`/contacts/${contactId}`, {
      method: 'DELETE'
    });
    const data = await res.json();

    return data;
  }

  const updateContact = ({contactId = '', updatedData = {}}) => {
    const res = await fetch(`/contacts/${contactId}`, {
      method: 'PUT',
      body: {payload: updatedData}
    });
    const data = await res.json();

    return data;
  }

  const getContact = ({contactId}) => {
    const res = await fetch(`/contacts/${contactId}`, {
      method: 'GET'
    });
    const data = await res.json();

    return data;
  }

  const getAllContacts = () => {
    const res = await fetch('/contacts', {
      method: 'GET'
    });
    const data = await res.json();
  }

  return {signUp, signIn, signOut, createContact, deleteContact, updateContact, getContact, getAllContacts}
};
