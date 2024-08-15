import React from 'react';
import './insiderHB.scss';
import { insiderLogoWhite } from '../../../assets/images/imageJS/insiderImg';
import arrowInsider from '../../../assets/images/svg/arrowInsider.svg';

export default function InsiderHB() {
  return (
    <>
      <div className="insider-banner">
        <div className="containerH">
            <div className="insider-banner-box">
                <img src={insiderLogoWhite} alt="insiderLogoWhite" />
                <h1>Get rewarded for being a marvel fan</h1>
                <h2>Earn Points <img src={arrowInsider} alt="arrowInsider" /> Get Cool Rewards</h2>
                <div class="banner-content-button"><button><span>BECOME AN INSIDER</span><div class="inner-cut"></div></button></div>
                <p className='login-pera'>Already an Insider? <a href="/login">Sign In</a> </p>
                <p className='legal-pera'>OPEN TO U.S. RESIDENTS ONLY. By joining, I affirm that I am a US resident, I have read and agree to the <a href="/insider">Marvel Insider Loyalty Rewards Program Terms of Use</a> and the <a href="/insider">Marvel.com Terms of Use</a> and acknowledge that I have read the <a href="/insider">Privacy Policy</a>.</p>
            </div>
        </div>
      </div>
    </>
  )
}
