import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown.scss';
import { drop1img1, drop1img2, drop1img3, drop1img4 } from '../../../assets/images/homeImg';

export default function Dropdown1() {
  return (
    <div className="dropdown">
      <div className="container-dropdown">
        <div className="drop-links">
          <Link to="/news">LATEST NEWS</Link>
          <Link to="/news">ALL NEWS</Link>
        </div>
        <h2>TRENDING NEWS</h2>
        <div className="drop-grid">
          <div className="drop-grid-div">
            <div className="drop-drid-image">
              <img src={drop1img1} alt="drop1img1" />
            </div>
            <div className="drop-grid-text">
              <h4>MOVIES</h4>
              <p>‘Deadpool & Wolverine’ Makes Its Worldwide Premiere in New York City</p>
            </div>
          </div>
          <div className="drop-grid-div">
            <div className="drop-drid-image">
              <img src={drop1img2} alt="drop1img2" />
            </div>
            <div className="drop-grid-text">
              <h4>COMICS</h4>
              <p>July 24's New Marvel Comics: The Full List</p>
            </div>
          </div>
          <div className="drop-grid-div">
            <div className="drop-drid-image">
              <img src={drop1img3} alt="drop1img3" />
            </div>
            <div className="drop-grid-text">
              <h4>MOVIES</h4>
              <p>Sam Wilson Takes Flight in First 'Captain America: Brave New World' Trailer</p>
            </div>
          </div>
          <div className="drop-grid-div">
            <div className="drop-drid-image">
              <img src={drop1img4} alt="drop1img4" />
            </div>
            <div className="drop-grid-text">
              <h4>TV SHOWS</h4>
              <p>Kathryn Hahn’s Agatha Harkness Returns in 'Agatha All Along' Trailer</p>
            </div>
          </div>
        </div>
        <div className="drop-links-last">
          <h3>SEARCH BY</h3>
          <Link to="/news#moviesSec">MOVIES</Link>
          <Link to="/news#comicsSec">COMICS</Link>
          <Link to="/news#showsSec">TV SHOWS</Link>
          <Link to="/news#gamesSec">GAMES</Link>
          <Link to="/news#seriesSec">DIGITAL SERIES</Link>
          <Link to="/news#cultureSec">CULTURE & LIFESTYLE</Link>
          <Link to="/news#podcastsSec">PODCASTS</Link>
        </div>
      </div>
    </div>
  );
}
