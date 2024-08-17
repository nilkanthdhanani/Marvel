import React from 'react';
import './charactersBanner.scss';
import { insider } from '../../../assets/images/imageJS/charactersImg';

export default function CharactersBanner() {
    return (
        <>
            <div className="cb-insider">
                <a href="/insider" className="cb-insider-div">
                    <p>REWARD YOUR MARVEL FANDOM WITH</p>
                    <p>JOIN NOW</p>
                    <img src={insider} alt="insider" />
                </a>
            </div>
            <div className="charactersBanner">
                <div className="charactersBanner-head">
                    <h1>MARVEL CHARACTERS</h1>
                    <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
                </div>
            </div>
        </>
    )
}
