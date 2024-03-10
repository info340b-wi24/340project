import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const contactOwner = () => {
    // Assuming the owner's email is stored in apartmentData.email
    const ownerEmail = apartmentData.email;
    
    // You can open the default mail client with the following code
    window.location.href = `mailto:${ownerEmail}`;
  };

  return (
    <div className="apartment-info">
      <h2>Apartment Information</h2>
      <h2>{apartmentData.name}</h2>
      <div>
        <img src={getImage()} alt="Apartment Picture" />
      </div>
      <div>
        <p>{apartmentData.address}</p>
      </div>
      <div>
        <h3>Bedrooms:</h3>
        <p>{apartmentData.bedrooms}</p>
      </div>
      <div>
        <h3>Bathrooms:</h3>
        <p>{apartmentData.bathrooms}</p>
      </div>
      <div>
      <h3>Rent:</h3>
      <p> ${apartmentData.price} per month</p>
      </div>
      <div>
        <h3>Duration:</h3>
        <p>  {formatDate(apartmentData.start_date)} - {formatDate(apartmentData.end_date)} </p>
      </div>
      <div>
        <h3>Pets Allowed: </h3>
        <p>{apartmentData.pets ? 'Yes' : 'No'}</p>
      </div>
        <div>
        <h3>Number of Current Roommates:</h3>
        <p>{apartmentData.roommates > 0 ? apartmentData.roommates : 'None'}</p>
      </div>
      <div>
        {/* "Contact Owner" button */}
        <button className="contact-owner-button" onClick={contactOwner}>
          Contact Owner
        </button>
        </div>

    </div>
  );
}

export default Apartment1;
