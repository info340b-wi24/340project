import React from 'react';
import HomePage from './Homepage'; 
import Apartments from './Apartments'; 
import ApartmentForm from './ApartmentForm'; 
import RenterForm from './RenterForm'; 
import ViewFavorites from './ViewFavorites'; 
import { Routes, Route } from 'react-router-dom';


function App(props) {
    return (
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/apartments" element={<Apartments />} /> 
        <Route path="/submit-apartment-form.html" element={<ApartmentForm />} />
        <Route path="/submit-renter-form.html" element={<RenterForm />} />
        <Route path="/view-favorites.html" element={<ViewFavorites />} />
        
        </Routes>
        
      </div>
    )
  }

  export default App;