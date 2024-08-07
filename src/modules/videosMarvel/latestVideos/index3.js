import React, { useState, useEffect } from 'react';
import './latestVideos.scss';
import Watch from '../../../assets/images/svg/watch';
import { latestVideo15, latestVideo16, latestVideo17, latestVideo18, latestVideo19, latestVideo20, latestVideo21, latestVideo22, latestVideo23, latestVideo24, latestVideo25, latestVideo26 } from '../../../assets/images/videos';
import RightArrow2 from '../../../assets/images/svg/rightArrow2';
import LeftArrow2 from '../../../assets/images/svg/leftArrow2';

const videos = [
    { image: latestVideo15, title: "MARVEL BECOMING", description: "Becoming Yelena | Marvel Studios' Black Widow", time: "17:22" },
    { image: latestVideo16, title: "MARVEL BECOMING", description: "Making Black Widow's Snow Suit | Marvel Becoming", time: "18:56" },
    { image: latestVideo17, title: "MARVEL BECOMING", description: "Becoming Black Widow | Marvel Studios' Black Widow", time: "19:01" },
    { image: latestVideo18, title: "MARVEL BECOMING", description: "Kitty Pryde from Marvel's Strike Force | Marvel Becoming", time: "17:10" },
    { image: latestVideo19, title: "MARVEL BECOMING", description: "Making of Daredevil | Marvel Becoming", time: "1:56" },
    { image: latestVideo20, title: "MARVEL BECOMING", description: "Daredevil | Marvel Becoming", time: "6:49" },
    { image: latestVideo21, title: "MARVEL BECOMING", description: "Carnage | Marvel Becoming", time: "4:21" },
    { image: latestVideo22, title: "MARVEL BECOMING", description: "Mysterio Cosplay Making Of! | Marvel Becoming", time: "4:34" },
    { image: latestVideo23, title: "MARVEL BECOMING", description: "Mysterio from 'Spider-Man: Far From Home' | Marvel Becoming", time: "1:08" },
    { image: latestVideo24, title: "MARVEL BECOMING", description: "90s X-Men and Magneto Cosplay! | Marvel Becoming", time: "1:05" },
    { image: latestVideo25, title: "MARVEL BECOMING", description: "Making of Talos the Skrull | Marvel Becoming", time: "2:16" },
    { image: latestVideo26, title: "MARVEL BECOMING", description: "Talos the Skrull | Marvel Becoming", time: "2:19" },
];

function groupVideos(videos, itemsPerGroup) {
    const groups = [];
    for (let i = 0; i < videos.length; i += itemsPerGroup) {
        groups.push(videos.slice(i, i + itemsPerGroup));
    }
    return groups;
}

export default function LatestVideos() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [videoGrids, setVideoGrids] = useState(groupVideos(videos, 4));

    const updateVideoGrids = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setVideoGrids(groupVideos(videos, 4));
        } else if (width >= 576) {
            setVideoGrids(groupVideos(videos, 3));
        } else if (width >= 400) {
            setVideoGrids(groupVideos(videos, 2));
        } else {
            setVideoGrids(groupVideos(videos, 1));
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateVideoGrids);
        updateVideoGrids();

        return () => {
            window.removeEventListener('resize', updateVideoGrids);
        };
    }, []);

    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, videoGrids.length - 1));
    };

    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="latest-videos">
            <div className="containerH">
                <h2>Marvel Becoming</h2>
                <div className="lv-grid">
                    <div className="lv-grid-main">
                        {videoGrids[currentIndex].map((video, index) => (
                            <div key={index} className="lv-grid-div">
                                <div className="lv-grid-image">
                                    <div className="watch-svg">
                                        <Watch />
                                    </div>
                                    <div className="time-pera">
                                        <p>{video.time}</p>
                                    </div>
                                    <img src={video.image} alt={`lv7img${index + 1}`} />
                                </div>
                                <div className="lv-grid-text">
                                    <h4>{video.title}</h4>
                                    <p>{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {currentIndex > 0 && (
                        <div className="left-arrow" onClick={handleLeftArrowClick}>
                            <LeftArrow2 />
                        </div>
                    )}
                    {currentIndex < videoGrids.length - 1 && (
                        <div className="right-arrow" onClick={handleRightArrowClick}>
                            <RightArrow2 />
                        </div>
                    )}
                    <div className="track-div">
                        <ul>
                            {videoGrids.map((_, index) => (
                                <li
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={currentIndex === index ? 'active' : ''}
                                ></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

