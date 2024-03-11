// Header.js
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav> 
        <Link to="/"><img src="sclogo.png" alt="Sublet Central Logo" className="logo" /></Link>
        <ul>
          <li><Link to="/apartments">Explore Apartments</Link></li> 
          <li><Link to="/RenterForm">Submit Renter Form</Link></li>
          <li><Link to="/ApartmentForm">Submit Apartment Form</Link></li>
          <li><Link to="/ViewFavorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;