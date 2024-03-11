import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getDatabase, ref, get, set } from 'firebase/database';
import { getStorage, ref as storageRef } from 'firebase/storage';
import standardImage from './img/standard.jpg';
import hubImage from './img/hub.jpg';
import nolanImage from './img/nolan.jpg';
import kelseyImage from './img/kelsey.jpg';
import twelveImage from './img/twelve.jpg';

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000); 
  const [selectedSeason, setSelectedSeason] = useState("");
  const [duration] = useState(null);
  const storage = getStorage();

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
      if (selectedSeason !== "") {
        const month = new Date(apartment.start_date).getMonth() + 1; 
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

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const toggleFavorite = async (id) => {
    const updatedApartments = apartments.map(apartment => {
      if (apartment.id === id) {
        const updatedApartment = { ...apartment, favorite: !apartment.favorite };
        updateFavoritedAttributeInDatabase(id, updatedApartment);
        return updatedApartment;
      }
      return apartment;
    });
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
  
  const getImage = (apartment) => {
    if (apartment && apartment.image) {
      return apartment.image; 
    } else {
      const defaultImages = { 
        standard: standardImage, 
        hub: hubImage, 
        nolan: nolanImage, 
        kelsey: kelseyImage, 
        twelve: twelveImage 
      };
      return defaultImages[apartment.id] || standardImage; 
    }
  };

  const filteredApartments = filterApartments(apartments);

  return (
    <div>
      <main>
        <h1 className="page-title">Find Apartments To Sublet Near You</h1>
        <div className="filter-container">
          <label className="rent-label">
            Rent:
            <input
              type="range"
              min="0"
              max="2000"
              value={maxPrice}
              onChange={handleSliderChange}
            />
          </label>
          <label className="max-rent-label">
            Max Rent: ${maxPrice}
          </label>

          <label className="select-season-label">
            Select Season:
            <select value={selectedSeason} onChange={handleSeasonChange}>
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
                  <img src={getImage(apartment)} alt={`A bedroom at ${apartment.name}`} />
                  <button className="favorite-button" onClick={() => toggleFavorite(apartment.id)}>
                    <span className={`fa-star ${apartment.favorite ? 'favorite-star favorited' : 'favorite-star'}`}>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </button>
                  <h2>{apartment.address}</h2>
                  <p> Rent: ${apartment.price} per month</p>
                  <p>  Duration: {formatDate(apartment.start_date)} - {formatDate(apartment.end_date)} </p>
  
                  <div className="more-details-wrapper">
                      <Link to={`/apartment/${apartment.id}`} className="more-details-button">
                        More Details
                      </Link>
                  </div>           
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
