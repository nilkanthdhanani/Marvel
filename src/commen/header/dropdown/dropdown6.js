import React from 'react'
import './dropdown.scss';
import { drop6img1, drop6img2, drop6img3, drop6img4, drop6img5, drop6img6 } from '../../../assets/images/homeImg';
import { Link } from 'react-router-dom';

export default function Dropdown6() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown">
          <div className="drop-links">
            <Link to="/">MARVEL 1943: RISE OF HYDRA</Link>
            <Link to="/">MARVEL VS. CAPCOM</Link>
            <Link to="/">MARVEL'S SPIDER-MAN 2</Link>
            <Link to="/">MARVEL SNAP</Link>
            <Link to="/">SEE ALL GAMES</Link>
          </div>
          <h2>GAMES</h2>
          <div className="drop-grid2">
            <div className="drop-grid2-div">
              <img src={drop6img1} alt="drop6img1" />
              <div className="drop-grid2-text">
                <p>Marvel Rivals</p>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop6img2} alt="drop6img2" />
              <div className="drop-grid2-text">
                <p>Marvel's Blade</p>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop6img3} alt="drop6img3" />
              <div className="drop-grid2-text">
                <p>Marvel 1943: Rise of Hydra</p>
                <h4>2025</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop6img4} alt="drop6img4" />
              <div className="drop-grid2-text">
                <p>MARVEL VS. CAPCOM Fighting Collection: Arcade Classics</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop6img5} alt="drop6img5" />
              <div className="drop-grid2-text">
                <p>Marvel's Spider-Man 2</p>
                <h4>2023</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop6img6} alt="drop6img6" />
              <div className="drop-grid2-text">
                <p>MARVEL SNAP</p>
                <h4>2022</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
