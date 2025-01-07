import React from 'react';
import handIcon from '../assets/hand_icon.png';
import heroImg from '../assets/hero_image.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-page">
      <div className="hero-card">
        <div className="hero-card-image">
          <img src={heroImg} alt="Hero" />
        </div>
        <div className="hero-card-content">
          <h2 className="hero-title">New Arrivals Only</h2>
          <div className="hero-tagline">
            <div className="tagline-new">
              <p>New</p>
              <img src={handIcon} alt="Hand Icon" />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
