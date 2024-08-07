import React from 'react'
import './tvshowBanner.scss';
import { disney } from '../../../assets/images/imageJS/showsImg';

export default function TvShowBanner() {
    return (
        <>
            <div className="disney">
                <div className="disney-div">
                    <p href="/">STREAM X-MEN '97 <span>EXCLUSIVELY</span> ON </p>
                    <img src={disney} alt="disney" />
                </div>
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
