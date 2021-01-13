import SideSection from 'components/SideSection';
import { useForm } from 'hooks/useForm';
import { useToggle } from 'hooks/useToggle';
import React from 'react';
import { SearchForm, SearchToggleIcon } from './Search.styles';

const Search = () => {
  const { isOn, toggle } = useToggle();

  const { values, handleChange } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOn) toggle();
  };
  return (
    <SideSection
      isOpen={isOn}
      onClose={toggle}
      ToggleIcon={SearchToggleIcon}
      xAxisCoords="50vh"
    >
      <h2>Search</h2>
      <SearchForm>
        <input
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </SearchForm>
    </SideSection>
  );
};

export default Search;
