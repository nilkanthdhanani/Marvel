import React from 'react';
import './lifestyleCards.scss';
import { lifestyleCards1, lifestyleCards2, lifestyleCards3, lifestyleCards4, lifestyleCards5, lifestyleCards6 } from '../../../assets/images/imageJS/lifestyleImg';

export default function LifestyleCards() {
  return (
    <>
      <div className="lifestyle-cards">
        <div className="containerH">
          <div className="lifestyle-cards-div">
            <a href="#parks-cruises">
              <img src={lifestyleCards1} alt="lifestyleCards1" />
            </a>
            <a href="#how-draw">
              <img src={lifestyleCards2} alt="lifestyleCards2" />
            </a>
            <a href="#food-recipes">
              <img src={lifestyleCards3} alt="lifestyleCards3" />
            </a>
            <a href="#crafts-coseplay">
              <img src={lifestyleCards4} alt="lifestyleCards4" />
            </a>
            <a href="#fashion-gear">
              <img src={lifestyleCards5} alt="lifestyleCards5" />
            </a>
            <a href="#experiences">
              <img src={lifestyleCards6} alt="lifestyleCards6" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
