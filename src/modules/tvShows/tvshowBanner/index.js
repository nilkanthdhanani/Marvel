import React from 'react'
import './tvshowBanner.scss';
import { disney } from '../../../assets/images/imageJS/showsImg';

export default function TvShowBanner() {
    return (
        <>
            <div className="disney">
                <a href="https://www.hotstar.com/in/home?ref=%2Fin%3Fcid%3DDTCI-Synergy-Marvel-Site-Acquisition-Originals-US-Marvel-XMEN97-EN-NavPipe-Marvel_NavPipe_XMEN97-NA" className="disney-div">
                    <p>STREAM X-MEN '97 <span>EXCLUSIVELY</span> ON </p>
                    <img src={disney} alt="disney" />
                </a>
            </div>
            <div className="tvshowBanner">
                <div className="tvshowBanner-head">
                    <h1>TV SHOWS</h1>
                    <p>Explore the characters and stories that shape Marvel TV!</p>
                </div>
            </div>
        </>
    )
}
