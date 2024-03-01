import React, { useState } from 'react';
import './css/combined.css'; 
import Header from './Header'; 
import Footer from './Footer'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ApartmentForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <Header />
      <header className="form-header"> 
        <h1>Apartment Details Form</h1>
      </header>

      <main>

        <section>
          <form>
            <header>
              <h2>Fill out the apartment details below.</h2>
            </header>

            <div>
              <label htmlFor="address_input">Apartment Address: </label>
              <input type="text" className="form-control" name="address" id="address_input" />
            </div>

            <div>
              <label htmlFor="bedrooms_input">Number of Bedrooms: </label>
              <input type="text" className="form-control" name="bedrooms" id="bedrooms_input" />
            </div>

            <div>
              <label htmlFor="bathrooms_input">Number of Bathrooms: </label>
              <input type="text" className="form-control" name="bathrooms" id="bathrooms_input" />
            </div>

            <div>
              <label htmlFor="price_input">Price of Rent: </label>
              <input type="text" className="form-control" name="price" id="price_input" />
            </div>

            <div>
              <label htmlFor="start_date_input">Start Date: </label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="form-control"
                id="start_date_input"
              />
            </div>
            <div>
              <label htmlFor="end_date_input">End Date: </label>
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="form-control"
                id="end_date_input"
              />
            </div>

            <div>
              <label htmlFor="roommates_input">Number of Current Roommates: </label>
              <input type="text" className="form-control" name="roommates" id="roommates_input" />
            </div>

            <div>
              <label htmlFor="pets_input">Pets Allowed: </label>
              <input type="checkbox" name="pets" id="pets_input" />
            </div>
     
            <button type="submit" aria-label="Submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ApartmentForm;
