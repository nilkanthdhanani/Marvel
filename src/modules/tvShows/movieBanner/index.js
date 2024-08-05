import React from 'react'
import './movieBanner.scss';
import { disney } from '../../../assets/images/movies';

export default function MovieBanner() {
    return (
        <>
            <div className="disney">
                <div className="disney-div">
                    <p href="/">STREAM X-MEN '97 <span>EXCLUSIVELY</span> ON </p>
                    <img src={disney} alt="disney" />
                </div>
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
