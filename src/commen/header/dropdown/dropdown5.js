import React from 'react'
import './dropdown.scss';
import { drop5img1, drop5img2, drop5img3, drop5img4, drop5img5, drop5img6 } from '../../../assets/images/imageJS/homeImg';
import { Link } from 'react-router-dom';

export default function Dropdown5() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown">
          <div className="drop-links">
            <Link to="/tvshows">X-MEN '97</Link>
            <Link to="/tvshows">ECHO</Link>
            <Link to="/tvshows">WHAT IF...?</Link>
            <Link to="/tvshows">SEE ALL TV SHOWS</Link>
            <Link to="/tvshows">DISNE+</Link>
          </div>
          <h2>TV SHOWS</h2>
          <div className="drop-grid2">
            <div className="drop-grid2-div">
              <img src={drop5img1} alt="drop5img1" />
              <div className="drop-grid2-text">
                <p>Agatha All Along</p>
                <h4>SEP 18, 2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop5img2} alt="drop5img2" />
              <div className="drop-grid2-text">
                <p>Marvel's Hit-Monkey Season 2</p>
                <h4>JUL 15, 2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop5img3} alt="drop5img3" />
              <div className="drop-grid2-text">
                <p>X-Men '97</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop5img4} alt="drop5img4" />
              <div className="drop-grid2-text">
                <p>Echo</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop5img5} alt="drop5img5" />
              <div className="drop-grid2-text">
                <p>What If...? | Season 2</p>
                <h4>2023</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop5img6} alt="drop5img6" />
              <div className="drop-grid2-text">
                <p>LEGO Marvel Avengers: Code Red</p>
                <h4>2023</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
