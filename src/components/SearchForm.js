// src/components/SearchForm.js
import React, { useState, useEffect } from 'react';
import { fetchBreeds } from '../services/api';

const SearchForm = ({ onSearch, fetchAllPets }) => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    if (animal) {
      fetchBreeds(animal).then(data => setBreeds(data.breeds));
    } else {
      setBreeds([]);
    }
  }, [animal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ animal, location, breed });
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Animal"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        className="breed-select"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      >
        <option value="">Select breed</option>
        {breeds && breeds.map(b => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>
      <button type="submit">Search</button>
      <button type="button" className="show-all-button" onClick={fetchAllPets}>Show All</button>
    </form>
  );
};

export default SearchForm;
