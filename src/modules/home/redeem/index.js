import React from 'react';
import './redeem.scss';
import { promo } from '../../../assets/images/imageJS/homeImg';

export default function Redeem() {
    return (
        <>
            <div className="redeem">
                <div className="container">
                    <div className="redeem-flex">
                        <div className="redeem-flex-image">
                            <img src={promo} alt="promo" />
                        </div>
                        <div className="redeem-flex-div">
                            <h3>MARVEL INSIDER</h3>
                            <h2>Watch, Earn, Redeem!</h2>
                            <p>Get rewarded for doing what you already do as a fan.</p>
                            <div class="banner-content-button2">
                                <button>
                                    <span>JOIN NOW</span>
                                    <div class="inner-cut"></div>
                                </button>
                            </div>
                            <div className="promo-div">Terms and Conditions Apply.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
