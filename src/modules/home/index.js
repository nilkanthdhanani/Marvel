import React from 'react'
import './home.scss';
import { disney } from '../../assets/images/png';
import HeroBanner from './heroBanner';
import HeroBannerRespo from './heroBannerRespo';

export default function Home() {
  return (
    <>
      <div className="disney">
        <div className="disney-div">
          <p href="/">STREAM X-MEN '97 <span>EXCLUSIVELY</span> ON </p>
          <img src={disney} alt="disney" />
        </div>
      </div>
      <HeroBanner />
      <HeroBannerRespo />
    </>
  )
}
