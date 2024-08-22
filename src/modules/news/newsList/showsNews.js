import React from 'react'
import './newsList.scss';
import { latestShows, latestShows1, latestShows2, latestShows3, showsNews } from '../../../assets/images//imageJS/newsImg';
import { Link } from 'react-router-dom';
import InsiderIcon from '../../../assets/images/svg/insiderIcon';

export default function ShowsNews() {
  return (
    <>
      <div className="title">
        <div className="containerWP">
          <Link to={"/news"}>
            <div className="titlebar">
              <img src={showsNews} alt="showsNews" />
              <h3>Marvel TV Shows</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="latest-news">
        <div className="containerH">
          <div className="latest-news-div">
            <h2>LATEST TV SHOW NEWS</h2>
            <div className="latest-news-grid">
              <div className="latest-news-grid-img">
                <img src={latestShows} alt="latestShows" />
              </div>
              <div className="latest-news-grid-div">
                <h4>TV SHOWS</h4>
                <p>Kathryn Hahn’s Agatha Harkness Returns in 'Agatha All Along' Trailer</p>
                <div className="ldcb-insider">
                  <InsiderIcon />
                  <span>Earn Points, Get Rewards</span>
                  <a href="/insider">Join NOW!</a>
                </div>
              </div>
            </div>
            <div className="news-slider">
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestShows1} alt="latestShows1" />
                </div>
                <h4>TV SHOWS</h4>
                <p>'Marvel’s Hit-Monkey' Hits New York in the Action-Packed Season 2 Trailer</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestShows2} alt="latestShows2" />
                </div>
                <h4>TV SHOWS</h4>
                <p>Marvel Animation's 'X-Men '97' Releases 'A New Age' Featurette</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestShows3} alt="latestShows3" />
                </div>
                <h4>TV SHOWS</h4>
                <p>New 'X-Men '97' Posters Embrace the Nostalgia of Character Trading Cards</p>
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
                <li><span>449</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
