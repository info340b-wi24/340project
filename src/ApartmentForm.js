import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import { getDatabase, ref, push } from 'firebase/database';

const ApartmentForm = () => {
  // Initialize Firebase database
  const database = getDatabase();

  // Function to save apartment data to Firebase
  const saveApartmentDataToFirebase = (apartmentData) => {
    push(ref(database, 'apartments'), apartmentData)
      .then(() => {
        console.log('Apartment data saved successfully');
      })
      .catch((error) => {
        console.error('Error saving apartment data:', error);
      });
  };

  // Initialize form state
  const [formData, setFormData] = useState({
    address: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
    start_date: null,
    end_date: null,
    roommates: '',
    pets: false,
    image: null 
  });

  // Handle start date change
  const handleStartDateChange = (date) => {
    setFormData({
      ...formData,
      start_date: date
    });
  };

  // Handle end date change
  const handleEndDateChange = (date) => {
    setFormData({
      ...formData,
      end_date: date
    });
  };

  // Handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = name === 'price' || name === 'bedrooms' || name === 'bathrooms' || name === 'roommates' ? parseFloat(value) : value;
  
    setFormData({
      ...formData,
      [name]: parsedValue
    });
  };

  // Handle image upload
  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Convert dates to ISO 8601 strings
    const apartmentData = {
      ...formData,
      start_date: formData.start_date.toISOString(),
      end_date: formData.end_date.toISOString()
    };
    saveApartmentDataToFirebase(apartmentData);
    alert('Apartment Details Submitted!');
  };

  return (
    <div>
      <header className="form-header"> 
        <h1>Apartment Details Form</h1>
      </header>

      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="address_input">Apartment Name: </label>
              <input type="text" className="form-control" name="address" id="address_input" value={formData.address} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="bedrooms_input">Number of Bedrooms: </label>
              <input type="number" className="form-control" name="bedrooms" id="bedrooms_input" value={formData.bedrooms} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="bathrooms_input">Number of Bathrooms: </label>
              <input type="number" className="form-control" name="bathrooms" id="bathrooms_input" value={formData.bathrooms} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="price_input">Price of Rent: </label>
              <input type="number" className="form-control" name="price" id="price_input" value={formData.price} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="start_date_input">Start Date: </label>
              <DatePicker
                selected={formData.start_date}
                onChange={handleStartDateChange}
                selectsStart
                startDate={formData.start_date}
                endDate={formData.end_date}
              />
            </div>
            <div>
              <label htmlFor="end_date_input">End Date: </label>
              <DatePicker
                selected={formData.end_date}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={formData.start_date}
                endDate={formData.end_date}
                minDate={formData.start_date}
              />
            </div>
            <div>
              <label htmlFor="roommates_input">Number of Current Roommates: </label>
              <input className="form-control" type="number" name="roommates" id="roommates_input" value={formData.roommates} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="pets_input">Pets Allowed: </label>
              <input type="checkbox" name="pets" id="pets_input" checked={formData.pets} onChange={() => setFormData({...formData, pets: !formData.pets})} />
            </div>
            <div>
              <label htmlFor="image_input">Upload Image: </label>
              <input type="file" name="image" id="image_input" onChange={handleImageChange} />
            </div>
            <button type="submit" aria-label="Submit" className="btn btn-primary">Submit</button>        
          </form>
        </section>
      </main>
    </div>
  );
};

export default ApartmentForm;
