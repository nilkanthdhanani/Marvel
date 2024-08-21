import React from 'react';
import './activitiy.scss';
import { insiderFB, insiderFBM } from '../../../assets/images/imageJS/insiderImg';

export default function Activity() {
    return (
        <>
            <div className="activity">
                <img src={insiderFB} alt="insiderFB" />
                <img src={insiderFBM} alt="insiderFBM" />
                <div className="activity-div">
                    <h2>Earn points for what you already do</h2>
                    <ul>
                        <li>Read articles</li>
                        <li>Watch videos</li>
                        <li>Read digital comics</li>
                        <li>Tell us your opinions</li>
                        <li>And more</li>
                        <li className='list-none'>See how the points rack up. <br /> New activities added daily!</li>
                    </ul>
                    <div class="banner-content-button"><button><span>BECOME AN INSIDER</span><div class="inner-cut"></div></button></div>
                </div>
            </div>
        </>
    )
}
