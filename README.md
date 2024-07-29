# Pet Listing Website

This is a Pet Listing website built with React.js. It allows users to search for pets, view pet details, and handle errors gracefully.

## Features

- Search pets by animal, location, and breed
- View detailed information for each pet
- Pagination for pet listings
- Error handling for failed API requests
- Fallback UI using an ErrorBoundary component

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

git clone  https://github.com/Pranay01101/pet-listing-website.git
cd pet-listing-website

2. Install dependencies:

npm install

3. Create a .env file in the root directory and add the following:

REACT_APP_API_BASE_URL=http://pets-v2.dev-apis.com
SKIP_PREFLIGHT_CHECK=true

Start the development server:

npm start

#### Usage
Open the browser and navigate to http://localhost:3000 to see the application.
Use the search form to find pets by animal, location, and breed.
Click on a pet's name to view detailed information.
Use the "Show All" button to display all pets.

