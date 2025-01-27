import React, { useEffect, useRef } from 'react';
import './home.scss';
import { disney } from '../../assets/images/imageJS/homeImg';
import HeroBanner from './heroBanner';
import HeroBannerRespo from './heroBannerRespo';
import NewOn from './newOn';
import Slider from './slider';
import Latest from './latest';
import Yggsgard from './yggsgard';
import NewComics from './newOn/newComic';
import Slider2 from './slider/slider2';
import Redeem from './redeem';

export default function Home() {
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: topRef.current.offsetTop - 100, behavior: 'auto' });
    }
  }, []);

  return (
    <>
      <div className="disney" ref={topRef}>
        <a href="https://www.hotstar.com/in/home?ref=%2Fin%3Fcid%3DDTCI-Synergy-Marvel-Site-Acquisition-Originals-US-Marvel-XMEN97-EN-NavPipe-Marvel_NavPipe_XMEN97-NA" className="disney-div">
          <p>STREAM X-MEN '97 <span>EXCLUSIVELY</span> ON </p>
          <img src={disney} alt="disney" />
        </a>
      </div>
      <HeroBanner />
      <HeroBannerRespo />
      <NewOn />
      <Slider />
      <Latest />
      <Yggsgard />
      <NewComics />
      <Slider2 />
      <Redeem />
    </>
  );
}
