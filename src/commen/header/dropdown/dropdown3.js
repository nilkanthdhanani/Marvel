import React from 'react'
import './dropdown.scss';
import { drop3img4, drop3img1, drop3img2, drop3img3, drop3img5, drop3img6 } from '../../../assets/images/homeImg';
import { Link } from 'react-router-dom';

export default function Dropdown3() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown">
          <div className="drop-links">
            <Link to="/characters">ALL CHARACTERS</Link>
            <Link to="/characters">TEAMS & GROUPS</Link>
            <Link to="/characters">EXPLORE ALL</Link>
          </div>
          <h2>TRENDING IN THE UNIVERSE</h2>
          <div className="drop-grid3">
            <div className="drop-grid3-div">
              <div className="drop-grid3-image">
                <img src={drop3img1} alt="drop3img1" />
              </div>
              <div className="drop-grid3-text">
                <h4>Magnito</h4>
                <p>Max Eisenhardt</p>
              </div>
            </div>
            <div className="drop-grid3-div">
              <div className="drop-grid3-image">
                <img src={drop3img2} alt="drop3img2" />
              </div>
              <div className="drop-grid3-text">
                <h4>Cyclops</h4>
                <p>Scott Summers</p>
              </div>
            </div>
            <div className="drop-grid3-div">
              <div className="drop-grid3-image">
                <img src={drop3img3} alt="drop3img3" />
              </div>
              <div className="drop-grid3-text">
                <h4>Phoenix</h4>
                <p>Jean Grey-Summers</p>
              </div>
            </div>
            <div className="drop-grid3-div">
              <div className="drop-grid3-image">
                <img src={drop3img4} alt="drop3img4" />
              </div>
              <div className="drop-grid3-text">
                <h4>Wolverine</h4>
                <p>James Howlett / Logan</p>
              </div>
            </div>
            <div className="drop-grid3-div">
              <div className="drop-grid3-image">
                <img src={drop3img5} alt="drop3img5" />
              </div>
              <div className="drop-grid3-text">
                <h4>Beast</h4>
                <p>Henry Phillip "Hank" McCoy</p>
              </div>
            </div>
            <div className="drop-grid3-div">
              <div className="drop-grid3-image">
                <img src={drop3img6} alt="drop3img6" />
              </div>
              <div className="drop-grid3-text">
                <h4>Storm</h4>
                <p>Ororo Munroe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
