import React, { useState, useEffect, useCallback } from 'react';
import './heroBannerRespo.scss';
import { heroR1, heroR2, heroR3, heroR4, heroR5, herobanner5logo } from '../../../assets/images/imageJS/homeImg';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';
import Twitch from '../../../assets/images/svg/sidebarIcon/twitch';
import Tiktok from '../../../assets/images/svg/sidebarIcon/tiktok';

const banners = [
  {
    image: heroR1,
    title: "Deadpool & Wolverine Red Carpet Premiere",
    description: "Reporting from the Red Carpet in New York City! See exclusive interviews with celebrities and the stars of the Marvel Studios film 'Deadpool & Wolverine' at the biggest premiere of the year and the next chapter of the Marvel Cinematic Universe!",
    buttons: [
      { text: "READ MORE", link: "#" },
      { text: "WATCH NOW", link: "#" },
    ],
  },
  {
    image: heroR2,
    title: "Marvel at San Diego Comic-Con",
    description: "This year Marvel will bring a brand-new booth (#2329) to the exhibition floor, bringing the best of Marvel’s comics, games, movies and more with games demos, costumes from Marvel Studios’ hit movies, photo ops and more!",
    buttons: [
      { text: "LATEST NEWS", link: "#" },
    ],
  },
  {
    image: heroR3,
    title: "The Official Marvel Podcast",
    description: "Matthew Macfadyen, Wendy Jacobson, and Cody Ziglar talk Deadpool!",
    buttons: [
      { text: "LISTEN NOW ON YOUTUBE", link: "#" },
      { text: "SUBSCRIBE", link: "#" },
    ],
  },
  {
    image: heroR4,
    title: "This Week's New Comics",
    subtitle: "ON SALE JULY 24",
    description: "Find your way in New York with the New Young Mutants, join the Strange Academy students' team-up with Doctor Doom, and more in this week's comics!",
    buttons: [
      { text: "READ MORE", link: "#" },
    ],
  },
  {
    image: heroR5,
    logo: herobanner5logo,
    title: "Read Free Deadpool & Wolverine Comics",
    description: "Celebrate the release of Marvel Studios' 'Deadpool & Wolverine' with an Infinity Comics takeover. Read over 50 issues featuring the best buds for free!",
    buttons: [
      { text: "READ NOW", link: "#" },
    ],
  }
];

export default function HeroBannerRespo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(5000);
  const [resetInterval, setResetInterval] = useState(false);

  const changeBanner = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(changeBanner, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, resetInterval, changeBanner]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIntervalTime(10000);
    setResetInterval((prev) => !prev);

    setTimeout(() => {
      setIntervalTime(5000);
    }, 10000);
  };

  return (
    <div className="hero-respo-main">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`hero-respo-div ${activeIndex === index ? 'active' : ''}`}
          style={{ display: activeIndex === index ? 'block' : 'none' }}
        >
          <div className="hero-respo-image">
            <img src={banner.image} alt={`heroR${index + 1}`} />
          </div>
          <div className="respo-content-div">
            <div className="hero-respo-track">
              {banners.map((_, trackIndex) => (
                <div
                  key={trackIndex}
                  className={`track-div ${activeIndex === trackIndex ? 'active' : ''}`}
                  onClick={() => handleClick(trackIndex)}
                ></div>
              ))}
            </div>
            {banner.subtitle && <h2>{banner.subtitle}</h2>}
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
            <div className="banner-content-button">
              {banner.buttons.map((button, btnIndex) => (
                <button key={btnIndex}>
                  <span>{button.text}</span>
                  <div className="inner-cut"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="follow-link">
        <span>FOLLOW</span>
        <div className="follow-link-div">
          <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
          <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
          <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
          <a href="https://www.twitch.tv/Marvel" target='blank'><Twitch /></a>
          <a href="https://www.tiktok.com/@marvel" target='blank'><Tiktok /></a>
        </div>
      </div>
    </div>
  );
}
