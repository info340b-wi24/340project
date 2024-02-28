import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

function Apartment1() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Apartment Information</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="css/combined.css" />
      </head>
      <body>
        <Header /> {}
        <div className="apartment-info">
          <h1>Apartment Information</h1>
          <h3>The Standard</h3>
          <div>
            <img src="img/standard.jpg" alt="Apartment Picture" />
          </div>
          <div>
            <h2>Address:</h2>
            <p>4220 12th Ave NE, Seattle, WA 98105</p>
          </div>
          <div>
            <h2>Bedrooms:</h2>
            <p>2</p>
          </div>
          <div>
            <h2>Bathrooms:</h2>
            <p>2</p>
          </div>
          <div>
            <h2>Rent:</h2>
            <p>$1,200 per month</p>
          </div>
          <div>
            <h2>Amenities:</h2>
              <p>Swimming Pool</p>
              <p>Gym</p>
              <p>24/7 Security</p>
  
          </div>
          <div>
            <h2>Duration:</h2>
            <p>12 months</p>
          </div>
        </div>
        <Footer /> {}
      </body>
    </html>
  );
}

export default Apartment1;
