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
          <li><a href="submit-renter-form.html">Renter Application Form</a></li>
          <li><a href="submit-apartment-form.html">Submit Apartment Form</a></li>
          <li><a href="view-favorites.html">Favorites</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
