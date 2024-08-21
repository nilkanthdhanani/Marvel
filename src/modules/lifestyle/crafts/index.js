import React, { useState } from 'react';
import './crafts.scss';
import { craft1, craft2, craft3, craft4, craft5, craft6, craftMain } from '../../../assets/images/imageJS/lifestyleImg';

export default function Crafts() {
  const [visibleBoxes, setVisibleBoxes] = useState(3);

  const handleLoadMore = () => {
    setVisibleBoxes(prev => prev + 3);
  };

  const sliderData = [
    { img: craft1, title: 'CULTURE & LIFESTYLE', text: 'Make This! | Spruce Up The Holidays With A DIY Deadpool Ornament ', },
    { img: craft2, title: 'CULTURE & LIFESTYLE', text: 'Make Your (X-Men) Holiday Special With a DIY Wolverine Mug', },
    { img: craft3, title: 'CULTURE & LIFESTYLE', text: 'Heroes Are Coming Out of the Woodwork in Spider-Geddon—And This DIY', },
    { img: craft4, title: 'CULTURE & LIFESTYLE', text: "Join The Parade on Sakaar With An Easy Last-Minute 'Thor: Ragnarok'-Inspired DIY Costume", },
    { img: craft5, title: 'CULTURE & LIFESTYLE', text: 'Rule Halloween With a DIY Infinity Gauntlet Trick-Or-Treat Bag', },
    { img: craft6, title: 'CULTURE & LIFESTYLE', text: 'How To: DIY Tigra-Inspired Makeup', },
  ];

  return (
    <>
      <div className="adventure" id="crafts-coseplay">
        <div className="containerH">
          <div className="adventure-div">
            <h2>DIY CRAFT ACTIVITIES</h2>
            <div className="adventure-grid">
              <div className="adventure-grid-img">
                <img src={craftMain} alt="craftMain" />
              </div>
              <div className="adventure-grid-div">
                <h4>CULTURE & LIFESTYLE</h4>
                <p>Puzzle Out The Punisher With This DIY Jigsaw</p>
              </div>
            </div>
            <div className="adventure-slider">
              {sliderData.slice(0, visibleBoxes).map((item, index) => (
                <div className="adventure-slider-box" key={index}>
                  <div className="adventure-slider-image">
                    <img src={item.img} alt={`craft${index + 1}`} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            {visibleBoxes < sliderData.length && (
              <div className="latest-div1-button">
                <button onClick={handleLoadMore}>
                  <div className="inner-cut">LOAD MORE</div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
