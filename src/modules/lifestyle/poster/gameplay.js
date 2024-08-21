import React from 'react';
import './poster.scss';
import { gameplay } from '../../../assets/images/imageJS/lifestyleImg';

export default function Gameplay() {
    return (
        <>
            <div className="inspiration">
                <div className="containerH">
                    <h2>Gameplay</h2>
                    <div className="inspiration-div">
                        <img src={gameplay} alt="gameplay" />
                        <div className="inspiration-div-box">
                            <h3>Marvel Gaming: Let's Play</h3>
                            <span>57 EPISODES</span>
                            <p>Get inside the gameplay action as your favorite celebrities engage in interviews while they dive into the latest Marvel video games!</p>
                            <div class="latest-div1-button">
                                <button><div class="inner-cut">MARVEL GAMING: LET'S PLAY</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
