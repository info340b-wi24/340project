import React from 'react';
import Header from './Header'; // Assuming Header.js is in the same directory
import Footer from './Footer'; // Assuming Footer.js is in the same directory
import './Favorites.css'; // Import your CSS file

function Favorites() {
    return (
        <div>
            <Header />
            <main>
                <h1 className="page-title">View Your Favorites</h1> 
                
                <div className="flex-container">
                    <section className="apartments">
                        <div className="card-container">
                            <a href="apartment1.html" className="card-link">
                                {/* Card 1 */}
                                <div className="card">
                                    <i className="fas fa-star favorite-star"></i>
                                    <img src="img/standard.jpg" alt="apartment 1 art" />
                                    <h1>1 Bed @ Standard</h1>
                                    <p><span className="bold-text black-text">Rent:</span> $1200 per month</p>
                                    <p><span className="bold-text black-text">Duration:</span> June - August 2024</p>                            
                                </div>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Favorites;
