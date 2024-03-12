import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav> 
        <Link to="/"><img src="sclogo.png" alt="Sublet Central Logo" className="logo" /></Link>
        <ul>
          <li><Link to="/apartments">Explore Apartments</Link></li> 
          <li><Link to="/ApartmentForm">Submit Apartment Listing</Link></li>
          <li><Link to="/ViewFavorites">View Favorite Apartments</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;