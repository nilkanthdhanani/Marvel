import React from 'react'
import './newsList.scss';
import { podcastsNews, latestPodcast, latestPodcast1, latestPodcast2, latestPodcast3 } from '../../../assets/images//imageJS/newsImg';
import { Link } from 'react-router-dom';

export default function PodcastNews() {
  return (
    <>
      <div className="title">
        <div className="containerWP">
          <Link to={"/news"}>
            <div className="titlebar">
              <img src={podcastsNews} alt="podcastsNews" />
              <h3>Marvel Podcasts</h3>
            </div>
          </Link>
        </div>
      </div>

      <div className="latest-news">
        <div className="containerH">
          <div className="latest-news-div">
            <h2>LATEST PODCAST NEWS</h2>
            <div className="latest-news-grid">
              <div className="latest-news-grid-img">
                <img src={latestPodcast} alt="latestPodcast" />
              </div>
              <div className="latest-news-grid-div">
                <h4>PODCAST</h4>
                <p>See the X-Men Comics That Inspired ‘X-Men ‘97’</p>
              </div>
            </div>
            <div className="news-slider">
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestPodcast1} alt="latestPodcast1" />
                </div>
                <h4>PODCAST</h4>
                <p>Kevin Feige Teases ‘The Fantastic Four’ on the First Episode of ‘The Official Marvel Podcast’</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestPodcast2} alt="latestPodcast2" />
                </div>
                <h4>PODCAST</h4>
                <p>The ‘Women of Marvel’ Guide to Echo</p>
              </div>
              <div className="news-slider-box">
                <div className="news-slider-image">
                  <img src={latestPodcast3} alt="latestPodcast3" />
                </div>
                <h4>PODCAST</h4>
                <p>Read Echo’s Full 'Women of Marvel' Podcast Episode</p>
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
                <li><span href="/">228</span></li>
                <li className='next-button'><span href="/">NEXT</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
