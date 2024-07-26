import React from 'react'
import './dropdown.scss';
import { drop6img1, drop6img2, drop6img3, drop6img4, drop6img5 } from '../../../assets/images/jpg';
import { drop6img6 } from '../../../assets/images/png';

export default function Dropdown6() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown">
          <div className="drop-links">
            <a href="/">MARVEL 1943: RISE OF HYDRA</a>
            <a href="/">MARVEL VS. CAPCOM</a>
            <a href="/">MARVEL'S SPIDER-MAN 2</a>
            <a href="/">MARVEL SNAP</a>
            <a href="/">SEE ALL GAMES</a>
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
