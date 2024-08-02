import React from 'react'
import './dropdown.scss';
import { drop2img1, drop2img2, drop2img3, drop2img4, drop2img5, drop2img6 } from '../../../assets/images/homeImg';
import { Link } from 'react-router-dom';

export default function Dropdown2() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown">
          <div className="drop-links">
            <Link to="/comics">RELEASE CALENDAR</Link>
            <Link to="/comics">MARVEL UNLIMITED</Link>
            <Link to="/comics">STROMBREAKERS</Link>
            <Link to="/comics">READING GUIDES</Link>
            <Link to="/comics">PRINT SUBSCRIPTIONS</Link>
            <Link to="/comics">ALL COMICS</Link>
          </div>
          <h2>LATEST COMICS</h2>
          <div className="drop-grid2">
            <div className="drop-grid2-div">
              <img src={drop2img1} alt="drop2img1" />
              <div className="drop-grid2-text">
                <p>Nyx (2024) #1</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop2img2} alt="drop2img2" />
              <div className="drop-grid2-text">
                <p>Deadpool & Wolverine: WWiii (2024) #3</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop2img3} alt="drop2img3" />
              <div className="drop-grid2-text">
                <p>Ultimate Black Panther (2024) #6</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop2img4} alt="drop2img4" />
              <div className="drop-grid2-text">
                <p>Vengeance of the Moon Knight (2024) #7</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop2img5} alt="drop2img5" />
              <div className="drop-grid2-text">
                <p>Strange Academy: Blood Hunt (2024) #3</p>
                <h4>2024</h4>
              </div>
            </div>
            <div className="drop-grid2-div">
              <img src={drop2img6} alt="drop2img6" />
              <div className="drop-grid2-text">
                <p>Star Wars: Inquisitors (2024) #1</p>
                <h4>2024</h4>
              </div>
            </div>
          </div>
          <div className="drop-links-last">
            <h3>BROWSE BY</h3>
            <Link to="/comics">SERIES</Link>
            <Link to="/comics">CHARACTER</Link>
            <Link to="/comics">CREATOR</Link>
          </div>
        </div>
      </div>
    </>
  )
}
