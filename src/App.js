import React, { useState } from 'react';
import HomePage from './Homepage'; 
import Apartments from './Apartments'; 
import ApartmentForm from './ApartmentForm'; 
import ViewFavorites from './ViewFavorites';
import ApartmentDetail from './ApartmentDetail'; 
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
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
            <div className="fulldiv">
                <Routes>
                    <Route path="/" element={<HomePage />} />  
                    <Route path="/apartments" element={<Apartments toggleFavorite={toggleFavorite} favoriteApartments={favoriteApartments} />} /> 
                    <Route path="/ApartmentForm" element={<ApartmentForm />} />
                    <Route path="/ViewFavorites" element={<ViewFavorites favoriteApartments={favoriteApartments} />} />
                    <Route path="/ApartmentDetail" element={<ApartmentDetail />} />
                    <Route path="/apartment/:id" element={<ApartmentDetail />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
