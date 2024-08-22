import React from 'react'
import './newsList.scss';
import { latestSeries, latestSeries1, latestSeries2, latestSeries3, seriesNews } from '../../../assets/images//imageJS/newsImg';
import { Link } from 'react-router-dom';

export default function SeriesNews() {
  return (
    <>
      <div className="title">
        <div className="containerWP">
          <Link to={"/news"}>
            <div className="titlebar">
              <img src={seriesNews} alt="seriesNews" />
              <h3>Digital Series</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="latest-news">
        <div className="containerH">
          <div className="latest-news-div">
            <h2>DIGITAL SERIES NEWS</h2>
            <div className="latest-news-grid">
              <div className="latest-news-grid-img">
                <img src={latestSeries} alt="latestSeries" />
              </div>
              <div className="latest-news-grid-div">
                <h4>DIGITAL SERIES</h4>
                <p>Marvel and Wounded Warrior Project Team Up with 'Marvel Make Me A Hero'</p>
              </div>
            </div>
            <div className="news-slider">
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestSeries1} alt="latestSeries1" />
                </div>
                <h4>DIGITAL SERIES</h4>
                <p>Who Is Silk?</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestSeries2} alt="latestSeries2" />
                </div>
                <h4>DIGITAL SERIES</h4>
                <p>Marvel's Long Story Short: How Deadpool Became the King of the Monsters</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestSeries3} alt="latestSeries3" />
                </div>
                <h4>DIGITAL SERIES</h4>
                <p>Women of Marvel Revisits Hip-Hop and Afro-Futurism with Sammus</p>
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
                <li><span>44</span></li>
                <li className='next-button'><span>NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
