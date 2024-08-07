import React, { useEffect, useState } from 'react';
import './latestVideos.scss';
import Watch from '../../../assets/images/svg/watch';
import { movieNews1, latest12, latest21, latest18, latest31, latestGames3, latestVideo9, latestVideo10, latestVideo11, latestVideo12, latestVideo13, latestVideo14 } from '../../../assets/images/videos';
import RightArrow2 from '../../../assets/images/svg/rightArrow2';
import LeftArrow2 from '../../../assets/images/svg/leftArrow2';

const videos = [
    { image: movieNews1, title: "TRAILERS & EXTRAS", description: "Marvel Legends Series - Suit Up as Green Goblin with Realistic Roleplay Helmet and Electronic Pumpkins", time: "17:22" },
    { image: latest12, title: "TRAILERS & EXTRAS", description: "X-Men: From The Ashes | Official Launch Trailer | Marvel Comics", time: "18:56" },
    { image: latest21, title: "TRAILERS & EXTRAS", description: "Venom War | Official Trailer | Marvel Comics", time: "19:01" },
    { image: latest18, title: "TRAILERS & EXTRAS", description: "Wolverine: Revenge | Official Trailer | Marvel Comics", time: "17:10" },
    { image: latest31, title: "TRAILERS & EXTRAS", description: "Marvel Rivals | Character Reveal Teaser | Jeff the Land Shark: Four-Legged Friend", time: "1:56" },
    { image: latestVideo9, title: "TRAILERS & EXTRAS", description: "Marvel Rivals | Cinematic Trailer | No One Rivals Doom", time: "4:21" },
    { image: latestVideo10, title: "TRAILERS & EXTRAS", description: "Deadpool & Wolverine | Official Trailer | In Theaters July 26", time: "4:34" },
    { image: latestVideo11, title: "TRAILERS & EXTRAS", description: "TOKYO 2099: SPIDER-ISLANDS - JOURNEY INTO LIFE AND DESTINY | Marvel Rivals | Map Reveal", time: "1:08" },
    { image: latestGames3, title: "TRAILERS & EXTRAS", description: "MARVEL vs. CAPCOM Fighting Collection: Arcade Classics - Announce Trailer", time: "6:49" },
    { image: latestVideo12, title: "TRAILERS & EXTRAS", description: "Marvel Rivals | Character Reveal | Peni Parker - 'SP//dr Pilot'", time: "1:05" },
    { image: latestVideo13, title: "TRAILERS & EXTRAS", description: "Marvel Rivals | Console Announce Trailer", time: "2:16" },
    { image: latestVideo14, title: "TRAILERS & EXTRAS", description: "X-Men: The Wedding Special | Official Trailer | Marvel Comics", time: "2:19" },
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
                <h2>Trailers & Extras</h2>
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

