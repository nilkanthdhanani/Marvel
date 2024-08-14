import React from 'react';
import './unlimitedHB.scss';
import { muLogoFull } from '../../../assets/images/imageJS/unlimitedImg';

export default function UnlimitedHB() {
  return (
    <>
      <div className="unlimited-hb">
        <div className="unlimited-hb-batch">
          <p>Limited Time Offer! Get 3 Months For $3/mo</p>
        </div>
        <div className="unlimited-hb-main">
          <div className="containerH">
            <div className="unlimited-banner">
              <img src={muLogoFull} alt="muLogoFull" />
              <h1>A World of Comics Awaits.</h1>
              <h2>Your one-stop destination for over 30,000 comics spanning the entire Marvel Universe.</h2>
              <h3>Get 3 Months For $3/mo!<sup>*</sup><br />Use Code BESTIES at checkout</h3>
              <div class="banner-content-button"><button><span>TRY MARVEL UNLIMITED FREE</span><div class="inner-cut"></div></button></div>
              <h4>Already a subscriber? <a href="/login">Start Reading!</a></h4>
              <p>*(plus  tax where applicable) All prices in US dollars. Offer valid 7/8/2024 9:00 AM ET to 8/19/2024 11:59 PM ET on monthly memberships only.  First month billed upfront at a one-time payment of $3; after three month promotional period subsequent months billed monthly to the payment card on file at the then-current monthly subscription fee (currently $9.99 per month) unless and until cancelled.  Offer is open to new Marvel Unlimited members only. Valid payment card required to redeem offer. Auto-renewal and  other  terms and conditions apply. See below for additional terms.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
