import React from 'react';
import './redeem.scss';
import { roleRedeem } from '../../../assets/images/imageJS/roleplayingImg';

export default function RoleRedeem() {
    return (
        <>
            <div className="redeem">
                <div className="container">
                    <div className="redeem-flex">
                        <div className="redeem-flex-image">
                            <img src={roleRedeem} alt="roleRedeem" />
                        </div>
                        <div className="redeem-flex-div">
                            <h3>MARVEL INSIDER</h3>
                            <h2>Keep in the know!</h2>
                            <p>Stay up to date with all upcoming RPG news and updates.</p>
                            <div class="banner-content-button2">
                                <a href="/insider">
                                    <button>
                                        <span>JOIN NOW</span>
                                        <div class="inner-cut"></div>
                                    </button>
                                </a>
                            </div>
                            <div className="promo-div">Terms and Conditions Apply.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
