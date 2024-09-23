import React, { useState } from 'react';
import './crafts.scss';
import { booksImg1, booksImg2, booksImg3, booksImg4, booksImg5, booksImg6, booksImg7 } from '../../../assets/images/imageJS/booksImg';

export default function Crafts() {
  const [visibleBoxes, setVisibleBoxes] = useState(3);

  const handleLoadMore = () => {
    setVisibleBoxes(prev => prev + 3);
  };

  const sliderData = [
    { img: booksImg2, title: 'CULTURE & LIFESTYLE', text: "The New Marvel Books That Hit Stores This October", },
    { img: booksImg3, title: 'CULTURE & LIFESTYLE', text: "The New Marvel Books Hitting Stores in September", },
    { img: booksImg4, title: 'CULTURE & LIFESTYLE', text: "The New Marvel Books Hitting Stores in August", },
    { img: booksImg5, title: 'CULTURE & LIFESTYLE', text: "Your First Look at the Cover to Original Graphic Novel ‘Moon Girl and Devil Dinosaur: Wreck and Roll!’", },
    { img: booksImg6, title: 'CULTURE & LIFESTYLE', text: "Introducing ‘Marvel Beginnings,’ a Brand-New Publishing Program for Marvel’s Youngest Fans", },
    { img: booksImg7, title: 'CULTURE & LIFESTYLE', text: "The New Marvel Books Hitting Stores in July", },
  ];

  return (
    <>
      <div className="adventure">
        <div className="containerH">
          <div className="adventure-div">
            <h2>EARLY READERS</h2>
            <div className="adventure-grid">
              <div className="adventure-grid-img">
                <img src={booksImg1} alt="booksImg1" />
              </div>
              <div className="adventure-grid-div">
                <h4>CULTURE & LIFESTYLE</h4>
                <p>'Captain America: Brave New World: A Hero Looks Like You' Picture Book Inspires Young Readers</p>
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
