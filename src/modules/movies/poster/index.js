import React from 'react';
import './poster.scss';
import { disneyplus } from '../../../assets/images/imageJS/moviesImg';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';

export default function Poster() {
  return (
    <>
      <div className="poster-main">
        <div className="poster">
          <div className="containerH">
            <div className="poster-div">
              <div className="poster-div-text">
                <img src={disneyplus} alt="disneyplus" />
                <h2>A Universe of Super Heroes</h2>
                <p>All Your Favorite Stories and More. Start Streaming Now.</p>
                <div className="banner-content-button">
                  <button>
                    <span>STREAM NOW</span>
                    <div className="inner-cut"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="poster-svg">
          <div className="containerH">
            <div className="links-icons">
              <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
              <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
              <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
