import React from 'react';
import './roleHBRespo.scss';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';
import { roleBannerRespo, roleplayingLogo } from '../../../assets/images/imageJS/roleplayingImg';

export default function RoleHBRespo() {

  return (
    <div className="role-respo-main">
      <div className="role-respo-div">
        <div className="role-respo-image">
          <img src={roleBannerRespo} alt={roleBannerRespo} />
        </div>
        <div className="respo-content-div">
          <img src={roleplayingLogo} alt="roleplayingLogo" />
          <p>X-Men Expansion Available Now!</p>
          <div className="banner-content-button">
            <button>
              <span>BUY NOW</span>
              <div className="inner-cut"></div>
            </button>
            <button>
              <span>LATEST NEWS</span>
              <div className="inner-cut"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="follow-link">
        <span>FOLLOW</span>
        <div className="follow-link-div">
          <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
          <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
          <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
        </div>
      </div>
    </div>
  );
}
