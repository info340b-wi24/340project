import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Apartments() {
    const [maxRent, setMaxRent] = useState(null);
    const [duration, setDuration] = useState(null);

    const filterApartments = (apartments) => {
        return apartments.filter(apartment => {
            if (maxRent !== null && apartment.rent > maxRent) return false;
            if (duration !== null && apartment.duration !== duration) return false;
            return true;
        });
    };

    const sortApartmentsByRent = (apartments) => {
        return apartments.slice().sort((a, b) => a.rent - b.rent);
    };

    const apartmentsData = [
        { id: 1, name: "1 Bed @ Standard", rent: 1200, duration: "June - August 2024", image: "img/standard.jpg" },
        { id: 2, name: "1 Bed @ Hub Apartments", rent: 1430, duration: "Jan - March 2024", image: "img/hub.jpg" },
        { id: 3, name: "1 Bed @ Nolan Apartments", rent: 1100, duration: "June - August 2024", image: "img/nolan.jpg" },
        { id: 4, name: "1 Bed @ Kelsey", rent: 800, duration: "April - August 2024", image: "img/kelsey.jpg" },
        { id: 5, name: "1 Shared Bedroom @ Twelve Apartments", rent: 1600, duration: "June - August 2024", image: "img/twelve.jpg" },
    ];

    const filteredApartments = filterApartments(apartmentsData);
    const sortedApartments = sortApartmentsByRent(filteredApartments);

    return (
        <div>
            <Header />
            <main>
                <h1 className="page-title">Find Apartments To Sublet Near You</h1>
                <div className="flex-container">
                    <section className="apartments">
                        <div className="card-container">
                            {sortedApartments.map(apartment => (
                                <a key={apartment.id} href={`apartment${apartment.id}.html`} className="card-link">
                                    <div className="card">
                                        <img src={apartment.image} alt={`This is an image of a bedroom at ${apartment.name}`} />
                                        <h2>{apartment.name}</h2>
                                        <p><span className="bold-text black-text">Rent:</span> ${apartment.rent} per month</p>
                                        <p><span className="bold-text black-text">Duration:</span> {apartment.duration}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer /> 
        </div>
    );
}

export default Apartments;
