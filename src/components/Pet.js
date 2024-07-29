import React from 'react';
import { Link } from 'react-router-dom';

const Pet = ({ pet }) => (
  <div className="pet">
    <Link to={`/pet/${pet.id}`}>
      <h2>{pet.name}</h2>
      <h3>{pet.breed}</h3>
      <h4>{pet.animal}</h4>
    </Link>
  </div>
);

export default Pet;
