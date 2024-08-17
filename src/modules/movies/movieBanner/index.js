import React from 'react'
import './movieBanner.scss';
import { disney } from '../../../assets/images/imageJS/moviesImg';

export default function MovieBanner() {
    return (
        <>
            <div className="disney">
                <a href="https://www.hotstar.com/in/home?ref=%2Fin%3Fcid%3DDTCI-Synergy-Marvel-Site-Acquisition-Originals-US-Marvel-XMEN97-EN-NavPipe-Marvel_NavPipe_XMEN97-NA" className="disney-div">
                    <p>STREAM X-MEN '97 <span>EXCLUSIVELY</span> ON </p>
                    <img src={disney} alt="disney" />
                </a>
            </div>
            <div className="movieBanner">
                <div className="movieBanner-head">
                    <h1>MOVIES</h1>
                    <p>Journey into the cosmic depths of the mighty Marvel Cinematic Universe!</p>
                </div>
            </div>
        </>
    )
}
