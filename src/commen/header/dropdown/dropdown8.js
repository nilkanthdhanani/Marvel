import React from 'react'
import './dropdown.scss';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';
import Tumblr from '../../../assets/images/svg/sidebarIcon/tumblr';
import Youtube from '../../../assets/images/svg/sidebarIcon/youtube';
import Snapchat from '../../../assets/images/svg/sidebarIcon/snapchat';
import Pinterest from '../../../assets/images/svg/sidebarIcon/pinterest';
import Twitch from '../../../assets/images/svg/sidebarIcon/twitch';
import Tiktok from '../../../assets/images/svg/sidebarIcon/tiktok';
import { insiderLogo, muLogo } from '../../../assets/images/imageJS/homeImg';

export default function Dropdown8() {
  return (
    <>
      <div className="dropdown">
        <div className="container-dropdown2">
          <div className="drop-links2">
            <a href="/">LIFESTYLE</a>
            <a href="/">ROLE-PLAYING GAME</a>
            <a href="/">BOOKS</a>
            <a href="/">PODCASTS</a>
            <a href="/">SHOP</a>
          </div>
          <div className="drop-grid8">
            <div className="drop-grid8-box1">
              <div className="drop-grid8-svg">
                <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://marvelentertainment.tumblr.com/" target='blank'><Tumblr /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA" target='blank'><Youtube /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://www.snapchat.com/add/marvel" target='blank'><Snapchat /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://in.pinterest.com/marvelofficial/" target='blank'><Pinterest /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://www.twitch.tv/Marvel" target='blank'><Twitch /></a>
              </div>
              <div className="drop-grid8-svg">
                <a href="https://www.tiktok.com/@marvel" target='blank'><Tiktok /></a>
              </div>
            </div>
            <div className="drop-grid8-box2">
              <a href="/">
                <div className="insider-links">
                  <img src={insiderLogo} alt="insiderLogo" />
                  <div className="insider-links-text">
                    <h5>MARVEL INSIDER</h5>
                    <p>Get rewarded for beaing a Marvel Fan</p>
                  </div>
                </div>
              </a></div>
            <div className="drop-grid8-box2">
              <a href="/">
                <div className="insider-links">
                  <img src={muLogo} alt="muLogo" />
                  <div className="insider-links-text">
                    <h5>MARVEL UNLIMITED</h5>
                    <p>Access Over 30,000+ Digital Comics</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
