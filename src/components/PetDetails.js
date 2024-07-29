import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPetById } from '../services/api';


function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPetById(id)
      .then((data) => setPet(data.pets[0]))
      .catch((error) => console.error('Error fetching pet details:', error));
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pet-details">
      <h2>{pet.name}</h2>
      <img src={pet.images[0]} alt={pet.name} />
      <p>{pet.description}</p>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default PetDetails;
