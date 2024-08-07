import React, { useState, useEffect } from 'react';
import './latestVideos.scss';
import Watch from '../../../assets/images/svg/watch';
import { latestVideo1, latestVideo2, latestVideo3, latestVideo4, latest5, latest6, latest10, latest13, latestVideo5, latestVideo6, latestVideo7, latestVideo8 } from '../../../assets/images/imageJS/videosImg';
import RightArrow2 from '../../../assets/images/svg/rightArrow2';
import LeftArrow2 from '../../../assets/images/svg/leftArrow2';

const videos = [
    { image: latestVideo1, title: "MARVEL LIVE", description: "Interviews with Kevin Feige, Brad Winderbaum, and more at the SDCC 2024 Marvel Booth!", time: "17:22" },
    { image: latestVideo2, title: "MARVEL LIVE", description: "Every Marvel Comics Interview at SDCC 2024: Venom War, Fantastic Four, Spider-Man, and More!", time: "18:56" },
    { image: latestVideo3, title: "MARVEL LIVE", description: "Every Marvel Games Announcement at SDCC 2024: Marvel Rivals, Marvel Snap, & More!", time: "19:01" },
    { image: latestVideo4, title: "MARVEL LIVE", description: "Every MCU Reveal at SDCC 2024: Fantastic Four, Avengers: Doomsday & More! | Official Recap", time: "17:10" },
    { image: latest5, title: "MARVEL LIVE", description: "Deadpool Corps Sing Madonna's Like a Prayer | Hall H @ SDCC 2024", time: "1:56" },
    { image: latest6, title: "MARVEL LIVE", description: "Meet The Fantastic Four: First Steps Cast and MORE at SDCC 2024!", time: "6:49" },
    { image: latest10, title: "MARVEL LIVE", description: "The Best Marvel Cosplay at SDCC 2024!", time: "4:21" },
    { image: latest13, title: "MARVEL LIVE", description: "LEGO x Marvel: From Ideation to Creation at SDCC 2024", time: "4:34" },
    { image: latestVideo5, title: "MARVEL LIVE", description: "Experience GooglePlay's Wheel of Champions at SDCC 2024", time: "1:08" },
    { image: latestVideo6, title: "MARVEL LIVE", description: "Exclusive Look at the LEGO Marvel Booth at SDCC 2024", time: "1:05" },
    { image: latestVideo7, title: "MARVEL LIVE", description: "Heinz Ketchup & Mustard hit the Carpet at the Deadpool & Wolverine Premiere", time: "2:16" },
    { image: latestVideo8, title: "MARVEL LIVE", description: "Pyro is Back! Aaron Stanford Talks About Getting the Call to Return in Deadpool & Wolverine!", time: "2:19" },
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
                <h2>Latest Videos</h2>
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
