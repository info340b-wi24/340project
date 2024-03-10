import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getDatabase, ref, get, set } from 'firebase/database';
import standardImage from './img/standard.jpg';
import hubImage from './img/hub.jpg';
import nolanImage from './img/nolan.jpg';
import kelseyImage from './img/kelsey.jpg';
import twelveImage from './img/twelve.jpg';

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000); 
  const [selectedSeason, setSelectedSeason] = useState(null);
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
    };
    fetchData();
  }, []);

  const filterApartments = (apartments) => {
    return apartments.filter(apartment => {
      if (maxPrice !== null && apartment.price > maxPrice) return false; 
      if (duration !== null && apartment.duration !== duration) return false;
      if (selectedSeason !== null) {
        const month = new Date(apartment.start_date).getMonth() + 1; // Adjust for zero-based index
        switch (selectedSeason) {
          case 'Spring':
            return month >= 3 && month <= 5;
          case 'Summer':
            return month >= 6 && month <= 8;
          case 'Autumn':
            return month >= 9 && month <= 11;
          case 'Winter':
            return month === 12 || month <= 2;
          default:
            return true;
        }
      }
      return true;
    });
  };

  const handleSliderChange = (event) => {
    setMaxPrice(parseInt(event.target.value)); 
  };

  const toggleFavorite = async (id) => {
    const updatedApartments = apartments.map(apartment => {
      if (apartment.id === id) {
        const updatedApartment = { ...apartment, favorite: !apartment.favorite };
        console.log(`Apartment ${id} is now ${updatedApartment.favorite ? 'favorited' : 'unfavorited'}`);
        updateFavoritedAttributeInDatabase(id, updatedApartment);
        return updatedApartment;
      }
      return apartment;
    });
    alert('Apartment Favorited!');
    setApartments(updatedApartments);
  };
  
  const updateFavoritedAttributeInDatabase = (apartmentId, apartmentData) => {
    const database = getDatabase();
    const apartmentRef = ref(database, `apartments/${apartmentId}`);
    set(apartmentRef, apartmentData);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  
  const filteredApartments = filterApartments(apartments);

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
              value={maxPrice}
              onChange={handleSliderChange}
            />
          </label>
          <p>Max Rent: ${maxPrice}</p>

          {/* Dropdown for selecting season */}
          <label>
            Select Season:
            <select value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
              <option value="">All Seasons</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
            </select>
          </label>
        </div>

        <div className="flex-container">
          <section className="apartments">
            <div className="card-container">
              {filteredApartments.map(apartment => (
                <div key={apartment.id} className="card">
                  <img src={getImage(apartment.id)} alt={`A bedroom at ${apartment.name}`} />
                  <button className="favorite-button" onClick={() => toggleFavorite(apartment.id)}>
                    <span className={`fa-star ${apartment.favorite ? 'favorite-star favorited' : 'favorite-star'}`}>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </button>
                  <h2>{apartment.address}</h2>
                  <p>Rent: ${apartment.price} per month</p>
                  <p>Duration: {formatDate(apartment.start_date)} - {formatDate(apartment.end_date)}</p>

                  {/* More Details Button */}
                  <Link to={`/apartment/${apartment.id}`} className="more-details-button">
                    <div className="button-wrapper">
                      More Details
                    </div>
                  </Link>
                </div>
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
