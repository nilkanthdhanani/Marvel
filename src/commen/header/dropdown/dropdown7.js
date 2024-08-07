import React from 'react'
import './dropdown.scss';
import { drop7img1, drop7img2, drop7img3, drop7img4 } from '../../../assets/images/homeImg';
import Watch from '../../../assets/images/svg/watch';
import { Link } from 'react-router-dom';

export default function Dropdown7() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown">
          <div className="drop-links">
            <Link to="/videos">TRAILERS & EXTRAS</Link>
            <Link to="/videos">DIGITAL SERIES</Link>
            <Link to="/videos">ALL VIDEO</Link>
          </div>
          <h2>TRENDING VIDEO</h2>
          <div className="drop-grid">
            <div className="drop-grid-div">
              <div className="drop-grid-image">
                <div className="watch-svg">
                  <Watch />
                </div>
                <div className="time-pera">
                  <p>1:44</p>
                </div>
                <img src={drop7img1} alt="drop7img1" />
              </div>
              <div className="drop-grid-text">
                <h4>TRAILERS & EXTRAS</h4>
                <p>X-Men: From The Ashes | Official Trailer | Marvel Comics</p>
              </div>
            </div>
            <div className="drop-grid-div">
              <div className="drop-grid-image">
                <div className="watch-svg">
                  <Watch />
                </div>
                <div className="time-pera">
                  <p>0:48</p>
                </div>
                <img src={drop7img2} alt="drop7img2" />
              </div>
              <div className="drop-grid-text">
                <h4>TRAILERS & EXTRAS</h4>
                <p>Marvel Rivals | Map Reveal | YGGSGARD - ‘WORLD TREE & KINGDOM OF GODS’</p>
              </div>
            </div>
            <div className="drop-grid-div">
              <div className="drop-grid-image">
                <div className="watch-svg">
                  <Watch />
                </div>
                <div className="time-pera">
                  <p>1:50</p>
                </div>
                <img src={drop7img3} alt="drop7img3" />
              </div>
              <div className="drop-grid-text">
                <h4>TRAILERS & EXTRAS</h4>
                <p>MARVEL'S BLOOD HUNT | Official Event Trailer | Marvel Comics</p>
              </div>
            </div>
            <div className="drop-grid-div">
              <div className="drop-grid-image">
                <div className="watch-svg">
                  <Watch />
                </div>
                <div className="time-pera">
                  <p>1:54</p>
                </div>
                <img src={drop7img4} alt="drop7img4" />
              </div>
              <div className="drop-grid-text">
                <h4>TRAILERS & EXTRAS</h4>
                <p>The Marvels | Flerkittens: The Real and Digital Kittens</p>
              </div>
            </div>
          </div>
          <div className="drop-links-last">
            <h3>OUR SHOWS</h3>
            <Link to="/videos">EARTH'S MIGHTIEST SHOW</Link>
            <Link to="/videos">THIS WEEK IN MARVEL</Link>
            <Link to="/videos">WOMEN OF MARVEL</Link>
          </div>
        </div>
      </div>
    </>
  )
}
