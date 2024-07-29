const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchPets = async () => {
  const response = await fetch(`${API_BASE_URL}/pets`);
  if (!response.ok) {
    throw new Error('Failed to fetch pets');
  }
  return response.json();
};

export const fetchPetById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/pets?id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch pet details');
  }
  return response.json();
};

export const fetchBreeds = async (animal) => {
  const response = await fetch(`${API_BASE_URL}/breeds?animal=${animal}`);
  if (!response.ok) {
    throw new Error('Failed to fetch breeds');
  }
  return response.json();
};

export const searchPets = async ({ animal, location, breed }) => {
  const response = await fetch(`${API_BASE_URL}/pets?animal=${animal}&location=${location}&breed=${breed}`);
  if (!response.ok) {
    throw new Error('Failed to search pets');
  }
  return response.json();
};
