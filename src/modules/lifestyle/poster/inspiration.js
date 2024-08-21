import React from 'react';
import './poster.scss';
import { inspiration } from '../../../assets/images/imageJS/lifestyleImg';

export default function Inspiration() {
    return (
        <>
            <div className="inspiration">
                <div className="containerH">
                    <h2>Drawing Inspiration</h2>
                    <div className="inspiration-div">
                        <img src={inspiration} alt="inspiration" />
                        <div className="inspiration-div-box">
                            <h3>Marvel Make Me A Hero</h3>
                            <span>86 EPISODES</span>
                            <p>We work with real Marvel fans to create the comic hero of their dreams</p>
                            <div class="latest-div1-button">
                                <button><div class="inner-cut">MARVEL MAKE ME A HERO</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
