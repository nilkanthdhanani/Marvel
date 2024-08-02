import React from 'react';
import './charactersBanner.scss';
import { insider } from '../../../assets/images/characters';

export default function CharactersBanner() {
    return (
        <>
            <div className="insider2">
                <div className="insider2-div">
                    <p href="/">REWARD YOUR MARVEL FANDOM WITH</p>
                    <p>JOIN NOW</p>
                    <img src={insider} alt="insider" />
                </div>
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
