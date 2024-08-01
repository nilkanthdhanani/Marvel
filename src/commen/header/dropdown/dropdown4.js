import React from 'react'
import './dropdown.scss';
import { drop4img1, drop4img2, drop4img3, drop4img4, drop4img5, drop4img6 } from '../../../assets/images/homeImg';
import { Link } from 'react-router-dom';

export default function Dropdown4() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown">
          <div className="drop-links">
            <Link to="/">CAPTAIN AMERICA: BRAVE NEW WORLD</Link>
            <Link to="/">DEADPOOL & WOLVERINE</Link>
            <Link to="/">THE MARVELS</Link>
            <Link to="/">SEE ALL MOVIES</Link>
            <Link to="/">DISNEY+</Link>
          </div>
          <h2>MOVIES</h2>
          <div className="drop-grid2">
            <div className="drop-grid2-div">
              <img src={drop4img1} alt="drop4img1" />
              <div className="drop-grid2-text">
                <p>Captain America: Brave New World</p>
                <h4>FEB 14, 2025</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop4img2} alt="drop4img2" />
              <div className="drop-grid2-text">
                <p>Deadpool & Wolverine</p>
                <h4>JUL 26, 2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop4img3} alt="drop4img3" />
              <div className="drop-grid2-text">
                <p>The Marvels</p>
                <h4>2023</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop4img4} alt="drop4img4" />
              <div className="drop-grid2-text">
                <p>Guardians of the Galaxy Vol. 3</p>
                <h4>2023</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop4img5} alt="drop4img5" />
              <div className="drop-grid2-text">
                <p>Ant-Man and The Wasp: Quantumania</p>
                <h4>2023</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop4img6} alt="drop4img6" />
              <div className="drop-grid2-text">
                <p>Black Panther: Wakanda Forever</p>
                <h4>2022</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
