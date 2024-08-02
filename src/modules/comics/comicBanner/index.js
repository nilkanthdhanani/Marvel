import React, { useState, useEffect, useRef, useCallback } from 'react';
import './comicBanner.scss';

export default function ComicBanner() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const intervalRef = useRef(null);
    const banners = [
        {
            className: 'banner1',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h2>'IMMORTAL THOR'</h2>
                        <h1>The Roxxon Age of Marvel Comics Begins</h1>
                        <div className="comic-banner-button">
                            <button>
                                <span>READ NOW!</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner2',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h2>'RESURRECTION OF MAGNETO'</h2>
                        <h1>Storm and Magneto's Friendship Explained</h1>
                        <div className="comic-banner-button">
                            <button>
                                <span>READ NOW!</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner3',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h2>NOW AVAILABLE</h2>
                        <h1>Your Complete Guide to 'Women of Marvel'</h1>
                        <div className="comic-banner-button">
                            <button>
                                <span>READ NOW!</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner4',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h2>CHARACTER CLOSE-UP</h2>
                        <h1>Meet Genis-Vell, Son of Mar-Vell</h1>
                        <div className="comic-banner-button">
                            <button>
                                <span>READ NOW!</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
        },
        {
            className: 'banner5',
            content: <div className="containerH">
                <div className="banner-content">
                    <div className="banner-content-div">
                        <h2>CHARACTER CLOSE-UP</h2>
                        <h1>Meet Anti-Venom, Venom's Polar Opposite</h1>
                        <div className="comic-banner-button">
                            <button>
                                <span>READ NOW!</span>
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
            <div className="comic-banner-main">
                <div className="comic-banner-wrapper" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
                    {banners.map((banner, index) => (
                        <div key={index} className={`comic-banner ${banner.className} ${index === currentBanner ? 'active' : ''}`}>
                            <div className='banner-main'>{banner.content}
                                <div className="banner-main-blur"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="comic-banner-batch">
                    <div className="batch-main">
                        <div className="comic-banner-batch-div">
                            {banners.map((banner, index) => (
                                <div
                                    key={index}
                                    className={`batch-box ${index === currentBanner ? 'active' : ''}`}
                                    onClick={() => handleBatchClick(index)}>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}