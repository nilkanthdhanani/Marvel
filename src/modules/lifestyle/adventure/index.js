import React from 'react'
import './adventure.scss';
import InsiderIcon from '../../../assets/images/svg/insiderIcon';
import { lifestyleAdventure1, lifestyleAdventure2, lifestyleAdventure3, lifestyleNews4 } from '../../../assets/images/imageJS/lifestyleImg';

export default function Adventure() {
  return (
    <>
      <div className="adventure" id="parks-cruises">
        <div className="containerH">
          <div className="adventure-div">
            <h2>REAL LIFE ADVENTURES</h2>
            <div className="adventure-grid">
              <div className="adventure-grid-img">
                <img src={lifestyleAdventure1} alt="lifestyleAdventure1" />
              </div>
              <div className="adventure-grid-div">
                <h4>LIVE EVENTS</h4>
                <p>All the Marvel News from D23 2024</p>
                <div className="ldcb-insider">
                  <InsiderIcon />
                  <span>Earn Points, Get Rewards</span>
                  <a href="/insider">Join NOW!</a>
                </div>
              </div>
            </div>
            <div className="adventure-slider">
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={lifestyleAdventure2} alt="lifestyleAdventure2" />
                </div>
                <h4>LIVE EVENTS</h4>
                <p>D23 2024: All the Avengers Campus News</p>
              </div>
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={lifestyleNews4} alt="lifestyleNews4" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>Marvel Sets Sail with the Disney Destiny in November 2025</p>
              </div>
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={lifestyleAdventure3} alt="lifestyleAdventure2" />
                </div>
                <h4>COMICS</h4>
                <p>Captain Marvel, Ms. Marvel, and Monica Rambeau Assemble at Avengers Campus</p>
              </div>
            </div>
            <div className="adventure-numbering">
              <ul>
                <li><span>1</span></li>
                <li><span>2</span></li>
                <li><span>3</span></li>
                <li><span>4</span></li>
                <li><span>5</span></li>
                <li><span>...</span></li>
                <li><span>60</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
