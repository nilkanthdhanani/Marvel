import React from 'react';
import './adventure.scss';
import { booksImg11, booksNews, booksNews1, booksNews2 } from '../../../assets/images/imageJS/books';

export default function SpecialtyBooks() {
  return (
    <>
      <div className="adventure">
        <div className="containerH">
          <div className="adventure-div">
            <h2>SPACIALITY BOOKS</h2>
            <div className="adventure-grid">
              <div className="adventure-grid-img">
                <img src={booksNews} alt="booksNews" />
              </div>
              <div className="adventure-grid-div">
                <h4>CULTURE & LIFESTYLE</h4>
                <p>‘Marvel Super Graphic’ Takes Fans on a Visual Tour of the Marvel Universe</p>
              </div>
            </div>
            <div className="adventure-slider">
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={booksNews1} alt="booksNews1" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>Look Inside 'Marvel Studios' The Infinity Saga - Iron Man 3: The Art of the Movie'</p>
              </div>
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={booksNews2} alt="booksNews2" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>Explore the Marvel Universe with the 'MARVEL Encyclopedia'</p>
              </div>
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={booksImg11} alt="booksImg11" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>SDCC 2024: 'Spider-Man: Octo-Girl' and 'X-Men: The Manga' Covers Revealed</p>
              </div>
            </div>
            <div className="adventure-numbering">
              <ul>
                <li><span>1</span></li>
                <li><span>2</span></li>
                <li><span>3</span></li>
                <li><span>4</span></li>
                <li><span>5</span></li>
                <li><span>...</span></li>
                <li><span>33</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
