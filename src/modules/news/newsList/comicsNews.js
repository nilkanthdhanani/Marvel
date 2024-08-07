import React from 'react'
import './newsList.scss';
import { latestComics, latestComics1, latestComics2, latestComics3, comicsNews } from '../../../assets/images//imageJS/newsImg';
import { Link } from 'react-router-dom';

export default function ComicsNews() {
  return (
    <>
      <div className="title">
        <div className="containerWP">
          <Link to={"/news"}>
            <div className="titlebar">
              <img src={comicsNews} alt="comicsNews" />
              <h3>Marvel Comics</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="latest-news">
        <div className="containerH">
          <div className="latest-news-div">
            <h2>LATEST COMICS NEWS</h2>
            <div className="latest-news-grid">
              <div className="latest-news-grid-img">
                <img src={latestComics} alt="latestComics" />
              </div>
              <div className="latest-news-grid-div">
                <h4>COMICS</h4>
                <p>July 31's New Marvel Comics: The Full List</p>
              </div>
            </div>
            <div className="news-slider">
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestComics1} alt="latestComics1" />
                </div>
                <h4>COMICS</h4>
                <p>Dogpool, Catpool, & Mousepool Infinity Comics Take Over Marvel Unlimited</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestComics2} alt="latestComics2" />
                </div>
                <h4>COMICS</h4>
                <p>SDCC 2024: New 'Laura Kinney: Wolverine' Comic Series Announced</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestComics3} alt="latestComics3" />
                </div>
                <h4>COMICS</h4>
                <p>SDCC 2024: Marvel Announces New 'Psylocke' Solo Comic Series</p>
              </div>
            </div>
            <div className="news-numbering">
              <ul>
                <li><span href="/">1</span></li>
                <li><span href="/">2</span></li>
                <li><span href="/">3</span></li>
                <li><span href="/">4</span></li>
                <li><span href="/">5</span></li>
                <li><span href="/">...</span></li>
                <li><span href="/">2238</span></li>
                <li className='next-button'><span href="/">NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
