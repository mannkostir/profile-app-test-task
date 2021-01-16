import { useState } from 'react';

export const useAPI = () => {
  const _fetch = async (url, options = {}) => {
    try {
      if (options.body) options.body = JSON.stringify(options.body);
      if (!options.headers) options.headers = {};
      if (!options.body) options.body = null;
      options.headers['Content-Type'] = 'application/json';

      const response = await window.fetch(url, options);

      const data = response.status !== 204 ? await response.json() : response;

      if (!response.ok) {
        throw new Error(
          data.message || 'Something went wrong, try again later'
        );
      }

      return data;
    } catch (e) {
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const [error, _setError] = useState({ message: '' });
  const [isLoading, _setIsLoading] = useState(false);

  const signUp = async ({ username = '', password = '' }) => {
    try {
      _setIsLoading(true);

      const data = await _fetch('/auth/signup', {
        method: 'POST',
        body: { username, password },
      });

      return { username: data.username, message: data.message };
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const signIn = async ({ username = '', password = '' }) => {
    try {
      _setIsLoading(true);

      const data = await _fetch('/auth/signin', {
        method: 'POST',
        body: { username, password },
      });

      return {
        username: `${data.username}`,
        userId: `${data.userId}`,
        message: `${data.message}`,
      };
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      _setIsLoading(true);

      await _fetch('/auth/logout', {
        method: 'POST',
      });
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const createContact = async ({
    name = '',
    email = '',
    phone = '',
    comment = '',
  }) => {
    try {
      _setIsLoading(true);

      const data = await _fetch('/contacts/', {
        method: 'POST',
        body: { name, email, phone, comment },
      });

      return { contact: { ...data.contact }, message: `${data.message}` };
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const deleteContact = async ({ contactId = '' }) => {
    try {
      _setIsLoading(true);

      const data = await _fetch(`/contacts/${contactId}`, {
        method: 'DELETE',
      });

      return { message: `${data.message}` };
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const updateContact = async ({ contactId = '', updatedData = {} }) => {
    try {
      _setIsLoading(true);

      const data = await _fetch(`/contacts/${contactId}`, {
        method: 'PUT',
        body: { payload: updatedData },
      });

      return { contact: { ...data.contact }, message: `${data.message}` };
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const getContact = async ({ contactId }) => {
    try {
      _setIsLoading(true);

      const data = await _fetch(`/contacts/${contactId}`, {
        method: 'GET',
      });

      return { contact: { ...data.contact } };
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  const getAllContacts = async ({ page, limit } = {}) => {
    try {
      _setIsLoading(true);

      const query = page && limit ? `?page=${page}&limit=${limit}` : '';

      const data = await _fetch(`/contacts${query}`, {
        method: 'GET',
      });

      return {
        contacts: data.contacts,
        contactsTotalAmount: data.contactsTotalAmount,
      };
    } catch (e) {
      _setError(e);
      throw e;
    } finally {
      _setIsLoading(false);
    }
  };

  return {
    signUp,
    signIn,
    signOut,
    createContact,
    deleteContact,
    updateContact,
    getContact,
    getAllContacts,
    error,
    isLoading,
  };
};
