import React from 'react'
import './newsList.scss';
import { cultureNews, latestCulture, latestCulture1, latestCulture2, latestCulture3 } from '../../../assets/images//imageJS/newsImg';
import { Link } from 'react-router-dom';

export default function CultureNews() {
  return (
    <>
      <div className="title">
        <div className="containerWP">
          <Link to={"/news"}>
            <div className="titlebar">
              <img src={cultureNews} alt="cultureNews" />
              <h3>Culture & Lifestyle</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="latest-news">
        <div className="containerH">
          <div className="latest-news-div">
            <h2>CULTURE & LIFESTYLE</h2>
            <div className="latest-news-grid">
              <div className="latest-news-grid-img">
                <img src={latestCulture} alt="latestCulture" />
              </div>
              <div className="latest-news-grid-div">
                <h4>CULTURE & LIFESTYLE</h4>
                <p>Marvel and Wounded Warrior Project Team Up with 'Marvel Make Me A Hero'</p>
              </div>
            </div>
            <div className="news-slider">
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestCulture1} alt="latestCulture1" />
                </div>
                <h4>LIVE EVENTS</h4>
                <p>SDCC 2024: Best Looks from the Deadpool Cosplay Meet-Up</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestCulture2} alt="latestCulture2" />
                </div>
                <h4>LIVE EVENTS</h4>
                <p>The Biggest Marvel News from San Diego Comic-Con 2024</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestCulture3} alt="latestCulture3" />
                </div>
                <h4>LIVE EVENTS</h4>
                <p>SDCC 2024: All the News from Marvel Studios’ Hall H Panel</p>
              </div>
            </div>
            <div className="news-numbering">
              <ul>
                <li><span>1</span></li>
                <li><span>2</span></li>
                <li><span>3</span></li>
                <li><span>4</span></li>
                <li><span>5</span></li>
                <li><span>...</span></li>
                <li><span>442</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
