import React from 'react';
import './redeem.scss';
import { promo2 } from '../../../assets/images/newsImg';

export default function Redeem() {
    return (
        <>
            <div className="redeem-mu">
                <div className="container">
                    <div className="redeem-flex">
                        <div className="redeem-flex-image">
                            <img src={promo2} alt="promo2" />
                        </div>
                        <div className="redeem-flex-div">
                            <h3>MARVEL UNLIMITED</h3>
                            <h2>Unlock the Universe</h2>
                            <p>Get instant access to 30,000+ digital comics on the web & mobile devices, exclusive deals, and more member-only benefits with Marvel Unlimited!</p>
                            <div class="banner-content-button2">
                                <button>
                                    <span>JOIN NOW</span>
                                    <div class="inner-cut"></div>
                                </button>
                            </div>
                            <div className="promo-div">
                                <span>Auto-renewal and other terms apply. See marvel.com/unlimited for additional details.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
