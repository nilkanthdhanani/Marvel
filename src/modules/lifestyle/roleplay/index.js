import React from 'react'
import './roleplay.scss';
import { roleplayLogo } from '../../../assets/images/imageJS/lifestyleImg';

export default function Roleplay() {
    return (
        <>
            <div className="roleplay">
                <div className="roleplay-two"></div>
                <div className="roleplay-one">
                    <div className="container">
                        <div className="roleplay-one-div">
                            <img src={roleplayLogo} alt="roleplayLogo" />
                            <p>Take on the roles of Marvel's most famous Super Heroes—or create your own—to fight some of the most dangerous Super Villains in the Marvel Universe!</p>
                            <div className="newOn-one-button">
                                <button>
                                    <div className="inner-cut">PLAY NOW</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
