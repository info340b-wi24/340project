import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';

// Images
import standardImage from './img/standard.jpg';
import hubImage from './img/hub.jpg';
import nolanImage from './img/nolan.jpg';
import kelseyImage from './img/kelsey.jpg';
import twelveImage from './img/twelve.jpg';

const imageArray = [standardImage, hubImage, nolanImage, kelseyImage, twelveImage];

const getImage = () => {
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  return imageArray[randomIndex];
};

function Apartment1() {
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const snapshot = await get(child(ref(database), `apartments/${id}`));
      if (snapshot.exists()) {
        setApartmentData(snapshot.val());
      } else {
        console.log('No data available');
      }
    };
    fetchData();
  }, [id]);

  if (!apartmentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="apartment-info">
      <h1>Apartment Information</h1>
      <h3>{apartmentData.name}</h3>
      <div>
        <img src={getImage()} alt="Apartment Picture" />
      </div>
      <div>
        <h2>Address:</h2>
        <p>{apartmentData.address}</p>
      </div>
      <div>
        <h2>Bedrooms:</h2>
        <p>{apartmentData.bedrooms}</p>
      </div>
      <div>
        <h2>Bathrooms:</h2>
        <p>{apartmentData.bathrooms}</p>
      </div>
      <div>
        <h2>Rent:</h2>
        <p>${apartmentData.rent} per month</p>
      </div>
      <div>
        <h2>Duration:</h2>
        <p>{apartmentData.duration}</p>
      </div>
    </div>
  );
}

export default Apartment1;
