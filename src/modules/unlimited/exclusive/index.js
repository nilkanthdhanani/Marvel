import React from 'react';
import './exclusive.scss';
import { exclusiveMain } from '../../../assets/images/imageJS/unlimitedImg';

export default function Exclusive() {
  return (
    <>
      <div className="exclusive">
        <div className="container-plan">
          <div className="exclusive-title">
            <h2>New! Exclusive Kit with an Annual Plus Membership</h2>
            <p>With the purchase of a Marvel Unlimited Annual Plus Membership, members get:</p>
          </div>
          <img src={exclusiveMain} alt="exclusiveMain" />
          <div className="exclusive-list">
            <h3>Marvel Unlimited Plus Membership Kit<sup>#</sup></h3>
            <div className="exclusive-list-main">
              <ul>
                <li>Limited Edition Hasbro Marvel Legends Nova figure not available anywhere else!</li>
                <li>Classic Rocket Raccoon by Skottie Young Pin</li>
              </ul>
              <ul>
                <li>Loki (2023) #1 Mike McKone Variant Comic</li>
                <li>Captain Marvel: Dark Tempest #1 Bengal Variant Comic</li>
                <li>Loki Broken Horn Helmet Patch</li>
              </ul>
            </div>
          </div>
          <div className="exclusive-list">
            <h3>Additional Benefits</h3>
            <div className="exclusive-list-main">
              <ul>
                <li>Invites and Access to Marvel Events!<sup>**</sup></li>
              </ul>
              <ul>
                <li>10% Off Marvel Merchandise + More at DisneyStore.com<sup>***</sup></li>
              </ul>
            </div>
          </div>
          <div class="banner-content-button2"><button><span>TRY 7 DAYS FREE</span><div class="inner-cut"></div></button></div>
        </div>
      </div>
    </>
  )
}
