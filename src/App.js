import React from 'react';
import HomePage from './Homepage'; 
import Apartments from './Apartments'; 
import ApartmentForm from './ApartmentForm'; 
import RenterForm from './RenterForm'; 
import ViewFavorites from './ViewFavorites';
import Apartment1 from './apartment1' 
import { Routes, Route } from 'react-router-dom';

function App(props) {
    return (
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/apartments" element={<Apartments />} /> 
        <Route path="/ApartmentForm" element={<ApartmentForm />} />
        <Route path="/RenterForm" element={<RenterForm />} />
        <Route path="/ViewFavorites" element={<ViewFavorites />} />
        <Route path="/Apartment1" element={<Apartment1 />} />
        
        </Routes>
        
      </div>
    )
  }

  export default App;