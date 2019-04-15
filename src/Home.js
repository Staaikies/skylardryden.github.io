import React, { Component } from 'react';
import "./Home.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div>
            <a className="header-link" href="#">About</a>
            <a className="header-link" href="#">Projects</a>
            <a className="header-link" href="#">Contact</a>
          </div>
        </div>
        <div className="hero">
          <div className="lead-container">
            <h1>Hi</h1>
            <p className="lead">Dolor nonumy eirmod justo sea et. Kasd est diam accusam ipsum ea, stet sanctus tempor ipsum takimata takimata et et accusam diam, magna magna sit lorem et eirmod rebum dolor clita, magna at labore diam et. Aliquyam eirmod justo ea diam dolore. Accusam sit voluptua erat justo lorem. Et dolores dolores dolor consetetur invidunt, gubergren magna magna sanctus ut eirmod,.</p>
          </div>
          <img src="http://satyr.io/600x600/1" alt="image 1"></img>

        </div>
        <div className="lead-cta">
          <p>Check out my projects</p>
          <div className="arrow-svg">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" width="24px" height="24px" enable-background="new 0 0 129 129">
              <g>
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
