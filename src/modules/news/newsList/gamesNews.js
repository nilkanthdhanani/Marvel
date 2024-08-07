import React from 'react'
import './newsList.scss';
import { gamesNews, latestGames, latestGames1, latestGames2, latestGames3 } from '../../../assets/images//imageJS/newsImg';
import { Link } from 'react-router-dom';
import Insider from '../../../assets/images/svg/insider';

export default function GamesNews() {
  return (
    <>
      <div className="title">
        <div className="containerWP">
          <Link to={"/news"}>
            <div className="titlebar">
              <img src={gamesNews} alt="gamesNews" />
              <h3>Marvel Games</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="latest-news">
        <div className="containerH">
          <div className="latest-news-div">
            <h2>LATEST GAMES NEWS</h2>
            <div className="latest-news-grid">
              <div className="latest-news-grid-img">
                <img src={latestGames} alt="latestGames" />
              </div>
              <div className="latest-news-grid-div">
                <h4>GAMES</h4>
                <p>Join the POOL Party in 'MARVEL Strike Force'</p>
                <div className="ldcb-insider">
                  <Insider />
                  <span>Earn Points, Get Rewards</span>
                  <a href="/">Join NOW!</a>
                </div>
              </div>
            </div>
            <div className="news-slider">
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestGames1} alt="latestGames1" />
                </div>
                <h4>GAMES</h4>
                <p>The New Season of 'MARVEL SNAP' Calls for Maximum Effort</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestGames2} alt="latestGames2" />
                </div>
                <h4>GAMES</h4>
                <p>Thor, Hulk and Captain America Are Ready to Defend Fall Guys</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestGames3} alt="latestGames3" />
                </div>
                <h4>GAMES</h4>
                <p>'MARVEL vs. CAPCOM Fighting Collection: Arcade Classics' Brings Seven Timeless Games in an All-in-One Package</p>
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
                <li><span href="/">317</span></li>
                <li className='next-button'><span href="/">NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
