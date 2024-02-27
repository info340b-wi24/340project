import React from 'react';
import './css/combined.css'; 
import Header from './Header'; 
import Footer from './Footer'; 

function RenterDetailsForm() {
  return (
    <div>
      <Header /> {}
      <header className="form-header">
        <h1>Renter Details Form</h1>
      </header>

      <main>
        <a href="index.html">
          <img src="img/sclogo.png" alt="Sublet Central Logo" className="logo" />
        </a>

        <section>
          <form>
            <header>
              <h2>Fill out your details below.</h2>
            </header>

            <div>
              <label htmlFor="name_input">Name: </label>
              <input type="text" className="form-control" name="name" id="name_input" />
            </div>

            <div>
              <label htmlFor="age_input">Age: </label>
              <input type="text" className="form-control" name="age" id="age_input" />
            </div>
            <div>
              <label htmlFor="grade_input">Grade: </label>
              <input type="text" className="form-control" name="grade" id="grade_input" />
            </div>

            <div>
              <label htmlFor="gpa_input">GPA: </label>
              <input type="text" className="form-control" name="gpa" id="gpa_input" />
            </div>

            <div>
              <label htmlFor="major_input">Major: </label>
              <input type="text" className="form-control" name="major" id="major_input" />
            </div>

            <div>
              <label htmlFor="income_input">Monthly Income: </label>
              <input type="text" className="form-control" name="income" id="income_input" />
            </div>

            <div>
              <label htmlFor="roommates_input">Okay with roommates? </label>
              <input type="checkbox" name="roommates" id="roommates_input" />
            </div>

            <div>
              <label htmlFor="pets_input">Any Pets? </label>
              <input type="checkbox" name="pets" id="pets_input" />
            </div>

            <div>
              <label htmlFor="move_in_date_input">Preferred Move-In Date: </label>
              <textarea className="form-control" name="move_in_date" id="move_in_date_input"></textarea>
            </div>

            <button type="submit" aria-label="Submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer /> {}
    </div>
  );
}

export default RenterDetailsForm;
