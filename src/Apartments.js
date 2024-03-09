import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { Link } from 'react-router-dom'; 
import Favorites from './ViewFavorites'; 
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
  const [maxPrice, setMaxPrice] = useState(2000); 
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
      console.log('Fetched data:', data); 
    };
    fetchData();
  }, []);

  const filterApartments = (apartments) => {
    return apartments.filter(apartment => {
      if (maxPrice !== null && apartment.price > maxPrice) return false; 
      if (duration !== null && apartment.duration !== duration) return false;
      return true;
    });
  };

  const sortApartmentsByPrice = (apartments) => { 
    return apartments.slice().sort((a, b) => a.price - b.price);
  };
  
  const handleSliderChange = (event) => {
    setMaxPrice(parseInt(event.target.value)); 
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

  const favoriteApartments = apartments.filter(apartment => apartment.favorite);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  
  const filteredApartments = filterApartments(apartments);
  const sortedApartments = sortApartmentsByPrice(filteredApartments); 

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
                    <h2>{apartment.address}</h2>
                    <p><span className="bold-text black-text"></span> Rent: ${apartment.price} per month</p>
                    <p>  <span className="bold-text black-text"></span> Duration: {formatDate(apartment.start_date)} - {formatDate(apartment.end_date)} </p>
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
