import React from 'react';
import './adventure.scss';
import { booksImg10, booksImg2, booksImg8, booksImg9 } from '../../../assets/images/imageJS/books';

export default function ProseNovels() {
  return (
    <>
      <div className="adventure">
        <div className="containerH">
          <div className="adventure-div">
            <h2>PROSE NOVELS</h2>
            <div className="adventure-grid">
              <div className="adventure-grid-img">
                <img src={booksImg8} alt="booksImg8" />
              </div>
              <div className="adventure-grid-div">
                <h4>CULTURE & LIFESTYLE</h4>
                <p>'Marvel: What If . . . Marc Spector Was Host to Venom?' Reveals First Look at Book Cover</p>
              </div>
            </div>
            <div className="adventure-slider">
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={booksImg9} alt="booksImg9" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>First Look and Exclusive Excerpt from ‘Loki: Journey Into Mystery’</p>
              </div>
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={booksImg2} alt="booksImg2" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>The New Marvel Books That Hit Stores This October</p>
              </div>
              <div className="adventure-slider-box">
                <div className="adventure-slider-image">
                  <img src={booksImg10} alt="booksImg10" />
                </div>
                <h4>CULTURE & LIFESTYLE</h4>
                <p>Cover Reveal: ‘What If…Wanda Maximoff and Peter Parker Were Siblings?’</p>
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
                <li><span>21</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
