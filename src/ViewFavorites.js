import React from 'react';
import standardImage from './img/standard.jpg';
import { Link } from 'react-router-dom'; 

function Favorites({ favoriteApartments }) {
    return (
        <div>
            <h1 className="page-title">Your Favorite Apartments</h1>
            <div className="flex-container">
                <section className="apartments">
                    <div className="card-container">
                        {favoriteApartments.map(apartment => (
                            <div key={apartment.id} className="card">
                                <div className="card-content">
                                    <img src={apartment.image} alt={`A bedroom at ${apartment.name}`} />
                                    <h2>{apartment.name}</h2>
                                    <p>Rent: ${apartment.rent} per month</p>
                                    <p>Duration: {apartment.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Favorites;
