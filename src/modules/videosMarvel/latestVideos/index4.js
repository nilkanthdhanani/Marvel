import React, { useEffect, useState } from 'react';
import './latestVideos.scss';
import Watch from '../../../assets/images/svg/watch';
import { latestVideo27, latestVideo28, latestVideo29, latestVideo30, latestVideo31, latestVideo32, latestVideo33, latestVideo34, latestVideo35, latestVideo36, latestVideo37, latestVideo38 } from '../../../assets/images/imageJS/videosImg';
import RightArrow2 from '../../../assets/images/svg/rightArrow2';
import LeftArrow2 from '../../../assets/images/svg/leftArrow2';

const videos = [
    { image: latestVideo27, title: "MARVEL QUICKDRAW", description: "Captain Marvel with Terry and Rachel Dodson | Marvel Quickdraw", time: "17:22" },
    { image: latestVideo28, title: "MARVEL QUICKDRAW", description: "Old Man Logan by Mike Henderson | Marvel Quickdraw", time: "18:56" },
    { image: latestVideo29, title: "MARVEL QUICKDRAW", description: "How to draw Carnage with Ryan Stegman | Marvel Quickdraw", time: "19:01" },
    { image: latestVideo30, title: "MARVEL QUICKDRAW", description: "Venom #2 Young Guns Variant Cover w/ Mike Del Mundo | Marvel Quickdraw", time: "17:10" },
    { image: latestVideo31, title: "MARVEL QUICKDRAW", description: "Drawing the '80s X-Men with Todd Nauck | Marvel Quickdraw", time: "1:56" },
    { image: latestVideo32, title: "MARVEL QUICKDRAW", description: "Learn how to draw Squirrel Girl! | Marvel Quickdraw How-To", time: "6:49" },
    { image: latestVideo33, title: "MARVEL QUICKDRAW", description: "Spider-Man #800 w/ Rachelle Rosenberg | Marvel Quickdraw", time: "4:21" },
    { image: latestVideo34, title: "MARVEL QUICKDRAW", description: "Learn how to draw Ironheart! | Marvel Quickdraw How-To", time: "4:34" },
    { image: latestVideo35, title: "MARVEL QUICKDRAW", description: "Learn how to draw Ghost-Spider! | Marvel Quickdraw How-To", time: "1:08" },
    { image: latestVideo36, title: "MARVEL QUICKDRAW", description: "Learn How to Draw Patriot! | Marvel Quickdraw", time: "1:05" },
    { image: latestVideo37, title: "MARVEL QUICKDRAW", description: "Learn How to Draw Ms. Marvel | Marvel Quickdraw", time: "2:16" },
    { image: latestVideo38, title: "MARVEL QUICKDRAW", description: "War of the Realms | Marvel Quickdraw", time: "2:19" },
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
                <h2>Quickdraw</h2>
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
