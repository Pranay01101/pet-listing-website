// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PetDetails from './components/PetDetails';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<PetDetails />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
