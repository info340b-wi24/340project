import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Apartments() {
    return (
        <div>
            <Header />
            <main>
                <h1 className="page-title">Find Apartments To Sublet Near You</h1>
                <div className="flex-container">
                    <section className="apartments">
                        <div className="card-container">
                            <a href="apartment1.html" className="card-link">
                                <div className="card">
                                    <i className="fas fa-star favorite-star"></i>
                                    <img src="img/standard.jpg" alt="This is an image of a bedroom at the Standard." />
                                    <h2>1 Bed @ Standard</h2>
                                    <p><span className="bold-text black-text">Rent:</span> $1200 per month</p>
                                    <p><span className="bold-text black-text">Duration:</span> June - August 2024</p>
                                </div>
                            </a> 
                            <a href="apartment1.html" className="card-link">
                                <div className="card">
                                    <img src="img/hub.jpg" alt="This is an image of a bedroom at the Hub Apartments." />
                                    <h2>1 Bed @ Hub Apartments</h2>
                                    <p><span className="bold-text black-text">Rent:</span> $1430 per month</p>
                                    <p><span className="bold-text black-text">Duration:</span> Jan - March 2024</p>
                                </div>
                            </a> 
                            {/* Continue with other card components similarly */}
                        </div>
                    </section>
                </div>
            </main>
            <Footer /> 
        </div>
    );
}

export default Apartments;
