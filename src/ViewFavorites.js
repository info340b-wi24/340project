import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { getDatabase, ref, get } from 'firebase/database';

function ViewFavorites(props) {
  const [favoriteApartments, setFavoriteApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const snapshot = await get(ref(database, 'apartments'));
      const data = [];

      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const apartmentData = { id: childSnapshot.key, ...childSnapshot.val() };

          if (apartmentData.favorite) {
            data.push(apartmentData);
          }
        });
      }

      setFavoriteApartments(data);
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

 const favoriteApartmentCards = favoriteApartments.map((apartment) => (
    <Link key={apartment.id} to={`/apartment/${apartment.id}`} className="card-link">
      <div className="card">
        <img src={apartment.image} alt={`A bedroom at ${apartment.name}`} />
        <h2>{apartment.address}</h2>
        <p><span className="bold-text black-text"></span> Rent: ${apartment.price} per month</p>
        {}
        <p><span className="bold-text black-text"></span> Duration: {formatDate(apartment.start_date, props.dateFormat)} - {formatDate(apartment.end_date, props.dateFormat)} </p>
      </div>
    </Link>
  ));

  return (
    <div> 
      <h1 className="page-title">Your Favorite Apartments</h1>
      <div className="flex-container">
        <section className="apartments">
          <div className="card-container">
            {favoriteApartmentCards}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ViewFavorites;
