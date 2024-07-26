import React from 'react';
import './heroBannerRespo.scss';
import { herobanner1 } from '../../../assets/images/jpg';

export default function HeroBannerRespo() {
  return (
    <>
      <div className="hero-respo-main">
        <div className="hero-respo-image">
            <img src={herobanner1} alt="herobanner1" />
        </div>
      </div>
    </>
  )
}
