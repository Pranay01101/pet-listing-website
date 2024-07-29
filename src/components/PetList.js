// src/components/PetList.js
import React, { useState } from 'react';
import Pet from './Pet';

const PetList = ({ pets }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 5;

  // Calculate the indices for the current page
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  // Create pagination controls
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pets.length / petsPerPage); i++) {
      pageNumbers.push(
        <button key={i} onClick={(e) => handleClick(e, i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className="pet-list">
        {currentPets.map(pet => (
          <div key={pet.id} className="pet-list-item">
            <Pet pet={pet} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default PetList;
