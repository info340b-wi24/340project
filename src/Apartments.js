import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { Link } from 'react-router-dom'; 

// Images
import standardImage from './img/standard.jpg';
import hubImage from './img/hub.jpg';
import nolanImage from './img/nolan.jpg';
import kelseyImage from './img/kelsey.jpg';
import twelveImage from './img/twelve.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [maxRent, setMaxRent] = useState(2000); 
  const [duration] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const snapshot = await get(ref(database, 'apartments'));
      const data = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          data.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
      }
      setApartments(data);
      console.log('Fetched data:', data); // Add this line to log out the fetched data
    };
    fetchData();
  }, []);

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

  const toggleFavorite = (id) => {
    const updatedApartments = apartments.map(apartment => {
        if (apartment.id === id) {
            return { ...apartment, favorite: !apartment.favorite };
        }
        return apartment;
    });
    setApartments(updatedApartments);
};


  const filteredApartments = filterApartments(apartments);
  const sortedApartments = sortApartmentsByRent(filteredApartments);

  return (
    <div>
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
                <Link key={apartment.id} to={`/apartment/${apartment.id}`} className="card-link"> 
                  <div className="card">
                    <img src={getImage(apartment.id)} alt={`A bedroom at ${apartment.name}`} />
                    <button className="favorite-button" onClick={() => toggleFavorite(apartment.id)}>
                        <span className={`fa-star ${apartment.favorite ? 'favorite-star favorited' : 'favorite-star'}`}>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </button>
                    <h2>{apartment.name}</h2>
                    <p><span className="bold-text black-text"></span>Rent: ${apartment.rent} per month</p>
                    <p><span className="bold-text black-text"></span>Duration: {apartment.duration}</p>
                  </div> 
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Apartments;

const imageArray = [standardImage, hubImage, nolanImage, kelseyImage, twelveImage];

const getImage = (id) => {
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  return imageArray[randomIndex];
};
