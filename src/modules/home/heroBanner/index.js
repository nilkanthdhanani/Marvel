import React, { useState, useEffect, useRef, useCallback } from 'react';
import './heroBanner.scss';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';
import Twitch from '../../../assets/images/svg/sidebarIcon/twitch';
import Tiktok from '../../../assets/images/svg/sidebarIcon/tiktok';
import { herobanner5logo } from '../../../assets/images/homeImg';

export default function HeroBanner() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const intervalRef = useRef(null);
    const banners = [
        {
            className: 'banner1',
            title: 'Deadpool & Wolverine Red Carpet Premiere',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h1>Deadpool & Wolverine Red Carpet Premiere</h1>
                        <p>Reporting from the Red Carpet in New York City! See exclusive interviews with celebrities and the stars of the Marvel Studios film 'Deadpool & Wolverine' at the biggest premiere of the year and the next chapter of the Marvel Cinematic Universe!</p>
                        <div className="banner-content-button">
                            <button>
                                <span>READ MORE</span>
                                <div className="inner-cut"></div>
                            </button>
                            <button>
                                <span>WATCH NOW</span>
                                <div className="inner-cut"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner2',
            title: 'Marvel at San Diego Comic-Con 2024',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h1>Marvel at San Diego Comic-Con 2024</h1>
                        <p>This year Marvel will bring a brand-new booth (#2329) to the exhibition floor, bringing the best of Marvel’s comics, games, movies and more with games demos, costumes from Marvel Studios’ hit movies, photo ops and more!</p>
                        <div className="banner-content-button">
                            <button>
                                <span>LATEST NEWS</span>
                                <div className="inner-cut"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner3',
            title: 'The Official Marvel Podcast',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h1>The Official Marvel Podcast</h1>
                        <p>Matthew Macfadyen, Wendy Jacobson, and Cody Ziglar talk Deadpool!</p>
                        <div className="banner-content-button">
                            <button>
                                <span>LISTEN NOW ON YOUTUBE</span>
                                <div className="inner-cut"></div>
                            </button>
                            <button>
                                <span>SUBSCRIBE</span>
                                <div className="inner-cut"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner4',
            title: 'This Week\'s New Comics',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <div className="sale-div">ON SALE JULY 24</div>
                        <h1>This Week's New Comics</h1>
                        <p>Find your way in New York with the New Young Mutants, join the Strange Academy students' team-up with Doctor Doom, and more in this week's comics!</p>
                        <div className="banner-content-button">
                            <button>
                                <span>READ MORE</span>
                                <div className="inner-cut"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner5',
            title: 'Free Deadpool & Wolverine Comics',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <img src={herobanner5logo} alt="herobanner5logo" />
                        <h1>Read Free Deadpool & Wolverine Comics</h1>
                        <p>Celebrate the release of Marvel Studios' 'Deadpool & Wolverine' with an Infinity Comics takeover. Read over 50 issues featuring the best buds for free!</p>
                        <div className="banner-content-button">
                            <button>
                                <span>READ NOW</span>
                                <div className="inner-cut"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
    ];

    const startInterval = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 5000);
    }, [banners.length]);

    useEffect(() => {
        startInterval();

        return () => clearInterval(intervalRef.current);
    }, [banners.length, startInterval]);

    const handleBatchClick = (index) => {
        clearInterval(intervalRef.current);
        setCurrentBanner(index);

        setTimeout(() => {
            startInterval();
        }, 10000);
    };


    return (
        <>
            <div className="hero-banner-main">
                <div className="hero-banner-wrapper" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
                    {banners.map((banner, index) => (
                        <div key={index} className={`hero-banner ${banner.className} ${index === currentBanner ? 'active' : ''}`}>
                            <div className='banner-main'>{banner.content}
                                <div className="banner-main-blur"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hero-banner-batch">
                    <div className="container">
                        <div className="batch-main">
                            <div className="hero-banner-batch-div">
                                {banners.map((banner, index) => (
                                    <div
                                        key={index}
                                        className={`batch-box ${index === currentBanner ? 'active' : ''}`}
                                        onClick={() => handleBatchClick(index)}>
                                        <h2>{banner.title ? banner.title : 'Banner ' + (index + 1)}</h2>
                                    </div>
                                ))}
                            </div>
                            <div className="social-links">
                                <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
                                <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
                                <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
                                <a href="https://www.twitch.tv/Marvel" target='blank'><Twitch /></a>
                                <a href="https://www.tiktok.com/@marvel" target='blank'><Tiktok /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}