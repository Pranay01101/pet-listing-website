import React, { useState, useEffect } from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';
import { fetchPets, searchPets } from '../services/api';


const Home = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllPets();
  }, []);

  const fetchAllPets = () => {
    setLoading(true);
    setError(null);
    fetchPets()
      .then(data => {
        setPets(data.pets);
        setFilteredPets(data.pets);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleSearch = (criteria) => {
    setLoading(true);
    setError(null);
    searchPets(criteria)
      .then(data => {
        if (data.pets.length === 0) {
          setError('No pets found for the given search criteria.');
        } else {
          setFilteredPets(data.pets);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <SearchForm onSearch={handleSearch} fetchAllPets={fetchAllPets} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        <PetList pets={filteredPets} />
      )}
    </div>
  );
};

export default Home;
