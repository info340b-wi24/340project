import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import { getStorage, ref as storageRef, getDownloadURL, getMetD} from 'firebase/storage';


function ApartmentDetail  ()  {
  const [apartmentData, setApartmentData] = useState(null);
  const [apartmentImage, setApartmentImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const snapshot = await get(ref(database, `apartments/${id}`));

      if (snapshot.exists()) {
        const data = snapshot.val();
        setApartmentData(data);

        const storage = getStorage();
        const imageRef = storageRef(storage, `apartment-images/${id}`);
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
    const ownerEmail = apartmentData.email;
    window.location.href = `mailto:${ownerEmail}`;
  };



  return (
    <div className="apartment-info">
      <div>
      <p className="address">{apartmentData.address}</p>
      </div>
      <div>
        <img src={apartmentData.image} />
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
        <p> {formatDate(apartmentData.start_date)} - {formatDate(apartmentData.end_date)} </p>
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
        {}
        <button className="contact-owner-button" onClick={contactOwner}>
          Contact Owner
        </button>
      </div>
    </div>
  );
};

export default ApartmentDetail;
