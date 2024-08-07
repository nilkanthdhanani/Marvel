import React from 'react';
import './firstBox.scss';
import { videoImg1, videoImg2, videoImg3, videoImg5, videoImg6, videoImg8 } from '../../../assets/images/videos';
import Watch from '../../../assets/images/svg/watch';

const videoData = [
    {imgSrc: videoImg1, description: "Marvel Rivals | Map Reveal | YGGSGARD - ‘WORLD TREE & KINGDOM OF GODS’"},
    {imgSrc: videoImg8, description: "The Marvels | Flerkittens: The Real and Digital Kittens"},
    {imgSrc: videoImg3, description: "X-Men: From The Ashes | Official Trailer | Marvel Comics"},
    {imgSrc: videoImg6, description: "The Marvels | Behind the Powers of The Marvels"},
    {imgSrc: videoImg5, description: "MARVEL'S BLOOD HUNT | Official Event Trailer | Marvel Comics"},
    {imgSrc: videoImg2, description: "How to Color a Comic Book Cover"}
];

export default function FirstBox() {
    return (
        <>
            <div className="first-box2">
                <div className="containerH">
                    <div className="first-box-main">
                        <div className="drop-grid">
                            {videoData.map((video, index) => (
                                <div key={index} className="drop-grid-div">
                                    <div className="drop-grid-image">
                                        <div className="watch-svg">
                                            <Watch />
                                        </div>
                                        <img src={video.imgSrc} alt={`drop7img${index + 1}`} />
                                    </div>
                                    <div className="drop-grid-text">
                                        <p>{video.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
