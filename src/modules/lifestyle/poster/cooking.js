import React from 'react';
import './poster.scss';
import { cooking } from '../../../assets/images/imageJS/lifestyleImg';

export default function Cooking() {
    return (
        <>
            <div className="inspiration">
                <div className="containerH">
                    <h2>Cooking</h2>
                    <div className="inspiration-div">
                        <img src={cooking} alt="cooking" />
                        <div className="inspiration-div-box">
                            <h3>Eat the Universe</h3>
                            <span>51 EPISODES</span>
                            <p>Summon the power of Galactus with Eat the Universe! Join celebrity chef Justin Warner as he welcomes a wide-array of guests to cook dishes inspired by Marvel’s rich history.</p>
                            <div class="latest-div1-button">
                                <button><div class="inner-cut">EAT THE UNIVERSE</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
