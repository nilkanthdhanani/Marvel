import React from 'react'
import './newsList.scss';
import { latest25, latest26, latest29, latestMovies, moviesNews } from '../../../assets/images//imageJS/newsImg';
import { Link } from 'react-router-dom';
import InsiderIcon from '../../../assets/images/svg/insiderIcon';

export default function MovieNews() {
  return (
    <>
      <div className="title">
        <div className="containerWP">
          <Link to={"/news"}>
            <div className="titlebar">
              <img src={moviesNews} alt="moviesNews" />
              <h3>Marvel Movies</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="latest-news">
        <div className="containerH">
          <div className="latest-news-div">
            <h2>LATEST MOVIES NEWS</h2>
            <div className="latest-news-grid">
              <div className="latest-news-grid-img">
                <img src={latestMovies} alt="latestMovies" />
              </div>
              <div className="latest-news-grid-div">
                <h4>MOVIES</h4>
                <p>How Dogpool Went From ‘Britain’s Ugliest Dog’ to ‘Deadpool & Wolverine’ Star</p>
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
                  <img src={latest25} alt="latest25" />
                </div>
                <h4>MOVIES</h4>
                <p>‘Deadpool & Wolverine’ Director Shawn Levy Breaks Down the Film’s Odd-Couple Influences</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latest26} alt="latest26" />
                </div>
                <h4>MOVIES</h4>
                <p>Meet Cassandra Nova: How Emma Corrin Brought Their ‘Deadpool & Wolverine’ Villain to Life</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latest29} alt="latest29" />
                </div>
                <h4>MOVIES</h4>
                <p>Ryan Reynolds, Hugh Jackman Open Up About Their ‘Deadpool & Wolverine’ Reunion</p>
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
                <li><span>249</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
