import ErrorMessage from 'components/ErrorMessage';
import SideSection from 'components/SideSection';
import { useContactsContext } from 'context/ContactsContext';
import { useAPI } from 'hooks/useAPI';
import { useForm } from 'hooks/useForm';
import { useInput } from 'hooks/useInput';
import { useToggle } from 'hooks/useToggle';
import React, { useRef, useState } from 'react';
import { SearchForm, SearchToggleIcon } from './Search.styles';

const Search = () => {
  const [error, setError] = useState({ message: '' });

  const { isOn, toggle } = useToggle();

  const { values, handleChange } = useForm({});

  const { triggerInputChangeEvent } = useInput();

  const { filterContacts, setCurrentContacts } = useContactsContext();

  const [isSearching, setIsSearching] = useState(false);

  const api = useAPI();

  const searchInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSearching(true);

      // If contacts are already filtered, fetch all contacts again
      // TO DO: Need to create contacts value for display only in order to avoid calling api
      if (Object.values(values).length) {
        const { contacts } = await api.getAllContacts();
        filterContacts(values, contacts);
      } else {
        filterContacts(values);
      }

      if (isOn) toggle();
    } catch (e) {
      setError(e);
    } finally {
      setIsSearching(false);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      setIsSearching(true);

      const { contacts } = await api.getAllContacts();
      setCurrentContacts(contacts);
      triggerInputChangeEvent(searchInput.current, '');

      if (isOn) toggle();
    } catch (e) {
      setError(e);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <SideSection
      isOpen={isOn}
      onClose={toggle}
      ToggleIcon={SearchToggleIcon}
      xAxisCoords="50vh"
    >
      <h2>Search</h2>
      {isSearching ? 'LOADING...' : null}
      <ErrorMessage>{error?.message}</ErrorMessage>
      <SearchForm>
        <input
          type="text"
          placeholder="Search by name"
          name="name"
          ref={searchInput}
          onChange={handleChange}
        />
        <button disabled={error?.message} type="submit" onClick={handleSubmit}>
          Search
        </button>
        <button onClick={handleReset}>Reset</button>
      </SearchForm>
    </SideSection>
  );
};

export default Search;
