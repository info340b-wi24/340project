// Header.js
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/apartments">Apartments</Link></li> 
          <li><Link to="/RenterForm">Submit Renter Form</Link></li>
          <li><Link to="/ApartmentForm">Submit Apartment Form</Link></li>
          <li><Link to="/ViewFavorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
