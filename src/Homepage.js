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
            Browse through apartments you like, according to rent, duration of stay, and location.
          </p>
          <p data-number="2">
            Select your apartment of choice.
          </p>
          <p data-number="3">
            Contact the person who posted the apartment.
          </p>
        </section>
      </main>
    </div>
  );
}


export default Homepage;
