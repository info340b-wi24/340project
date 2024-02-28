// Homepage.js
import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 

function Homepage() {
  return (
    <div>
      <Header /> {}
      <main>
        <section className="welcome-section">
          <h1 className="welcome-title">Welcome to Sublet Central!</h1>
          <p className="welcome-message">
            Your one-stop shop for finding a temporary home near you, according to your preference.
          </p>
        </section>
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <p>© 2024 Sublet Central. All rights reserved.</p>
        </div>
        <div className="footer-bottom">
          <p>Designed by Arushi, Anushka, Aryan, Josh</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
