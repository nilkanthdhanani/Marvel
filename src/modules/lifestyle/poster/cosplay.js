import React from 'react';
import './poster.scss';
import { cosplay } from '../../../assets/images/imageJS/lifestyleImg';

export default function Cosplay() {
    return (
        <>
            <div className="inspiration">
                <div className="containerH">
                    <h2>Coseplay</h2>
                    <div className="inspiration-div">
                        <img src={cosplay} alt="cosplay" />
                        <div className="inspiration-div-box">
                            <h3>Marvel Becoming</h3>
                            <span>71 EPISODES</span>
                            <p>Join Marvel cosplayers as they share their stories about the inspiration behind their craft with Marvel Becoming! Watch these artisans showcase their Marvel masterpieces!</p>
                            <div class="latest-div1-button">
                                <button><div class="inner-cut">MARVEL BECOMING</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
