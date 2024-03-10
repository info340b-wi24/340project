// Homepage.js
import React from 'react';

function Homepage() {
  return (
    <div>
      <main>
        {/* Apply the welcome-section class to the section tag */}
        <section className="welcome-section">
          <h1 className="welcome-title">Welcome to Sublet Central!</h1>
          <p className="welcome-message">
            Your one-stop shop for finding a temporary apartment near you, according to your preference.
          </p>
          <p data-number="1">
            Fill out the form to add your apartment listing!
          </p>
          <p data-number="2">
            Find your apartment listing on the apartments page! 
          </p>
          <p data-number="3">
            Favorite the apartment, view more details, or contact the owner!
          </p>
        </section>
      </main>
    </div>
  );
}


export default Homepage;
