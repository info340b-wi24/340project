import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import standardImage from './img/standard.jpg';
import hubImage from './img/hub.jpg';
import nolanImage from './img/nolan.jpg';
import kelseyImage from './img/kelsey.jpg';
import twelveImage from './img/twelve.jpg';


function Apartments() {
    const [maxRent, setMaxRent] = useState(2000); 
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

    const handleSliderChange = (event) => {
        setMaxRent(parseInt(event.target.value));
    };

    const apartmentsData = [
        { id: 1, name: "1 Bed @ Standard", rent: 1200, duration: "June - August 2024", image: standardImage },
        { id: 2, name: "1 Bed @ Hub Apartments", rent: 1430, duration: "Jan - March 2024", image: hubImage },
        { id: 3, name: "1 Bed @ Nolan Apartments", rent: 1100, duration: "June - August 2024", image: nolanImage },
        { id: 4, name: "1 Bed @ Kelsey", rent: 800, duration: "April - August 2024", image: kelseyImage },
        { id: 5, name: "1 Shared Bedroom @ Twelve Apartments", rent: 1600, duration: "June - August 2024", image: twelveImage },
    ];

    const filteredApartments = filterApartments(apartmentsData);
    const sortedApartments = sortApartmentsByRent(filteredApartments);

    return (
        <div>
            <Header />
            <main>
                <h1 className="page-title">Find Apartments To Sublet Near You</h1>
<div className="filter-container">
                    <label>
                        Rent:
                        <input
                            type="range"
                            min="0"
                            max="2000"
                            value={maxRent}
                            onChange={handleSliderChange}
                        />
                    </label>
                    <p>Max Rent: ${maxRent}</p>
                </div>
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
