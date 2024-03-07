import React, { useState } from 'react';
import HomePage from './Homepage'; 
import Apartments from './Apartments'; 
import ApartmentForm from './ApartmentForm'; 
import RenterForm from './RenterForm'; 
import ViewFavorites from './ViewFavorites';
import Apartment1 from './apartment1'; 
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App(props) {
    const [favoriteApartments, setFavoriteApartments] = useState([]);

    const toggleFavorite = (id) => {
        const updatedFavorites = favoriteApartments.includes(id)
            ? favoriteApartments.filter(favId => favId !== id)
            : [...favoriteApartments, id];
        setFavoriteApartments(updatedFavorites);
    };

    return (
        <div>
            <Header />
            <div id="fulldiv">
                <Routes>
                    <Route path="/" element={<HomePage />} />  
                    <Route path="/apartments" element={<Apartments toggleFavorite={toggleFavorite} />} /> 
                    <Route path="/ApartmentForm" element={<ApartmentForm />} />
                    <Route path="/RenterForm" element={<RenterForm />} />
                    <Route path="/ViewFavorites" element={<ViewFavorites favoriteApartments={favoriteApartments} />} />
                    <Route path="/Apartment1" element={<Apartment1 />} />
                    <Route path="/apartment/:id" element={<Apartment1 />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;