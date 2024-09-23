import React from 'react';
import './podcastHB.scss'
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';

export default function PodcastHB() {
    return (
        <>
            <div className="podcast-banner">
                <div className="podcast-banner-main">
                    <div className="podcast-banner-two"></div>
                    <div className="podcast-banner-one">
                        <div className="container">
                            <div className="podcast-banner-one-div">
                                <h2>MARVEL PODCASTS</h2>
                                <p>Stay updated with all your favorite Marvel podcasts!</p>
                                <div class="banner-content-button">
                                    <button><span>SUBSCRIBE ON APPLE PODCASTS</span><div class="inner-cut"></div></button>
                                    <button><span>SUBSCRIBE ON SPOTIFY</span><div class="inner-cut"></div></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="podcast-banner-batch">
                    <div className="container">
                        <div className="batch-main">
                            <h3>FOLLOW</h3>
                            <div className="social-links">
                                <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
                                <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
                                <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
