import React from 'react';
import './adventure.scss';
import { booksNews, booksNews1, booksNews2, booksNews3 } from '../../../assets/images/imageJS/booksImg';

export default function Adventure() {
  return (
    <>
      <div className="adventure">
        <div className="containerH">
          <div className="adventure-div">
            <h2>LATEST NEWS</h2>
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
                  <img src={booksNews3} alt="booksNews3" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>'Captain America: Brave New World: A Hero Looks Like You' Picture Book Inspires Young Readers</p>
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
                <li><span>63</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
