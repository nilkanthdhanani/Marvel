import React from 'react';
import './plan.scss';

export default function Plan() {
    return (
        <>
            <div className="plan">
                <div className="container-plan">
                    <h2>SELLECT YOUR PLAN</h2>
                    <h3>Try it for free for 7 days, no commitment. Cancel anytime.</h3>
                    <div className="plan-box-main">
                        <div className="plan-box">
                            <div className="plan-box-batch">MOST POPULAR</div>
                            <div className="plan-price">
                                <h4>MONTHLY</h4>
                                <div class="plan-price-tag">
                                    <sup>$</sup>9<sup>.99</sup><sub>/MO</sub>
                                </div>
                            </div>
                            <div className="plan-box-button">
                                <button><span>SIGN UP</span><div className="inner-cut"></div></button>
                            </div>
                        </div>
                        <div className="plan-box green">
                            <div className="plan-box-batch">SAVE $50!</div>
                            <div className="plan-price">
                                <h4>ANNUAL</h4>
                                <div class="plan-price-tag">
                                    <sup>$</sup>69<sub>/YR<sup>‡</sup></sub>
                                </div>
                            </div>
                            <div className="plan-box-button2">
                                <button><div className="inner-cut">SIGN UP</div></button>
                            </div>
                            <div className="price-detail">($5.75 x 12 months)</div>
                        </div>
                        <div className="plan-box golden">
                            <div className="plan-box-batch">NEW EXCLUSIVE KIT</div>
                            <div className="plan-price">
                                <h4>ANNUAL PLUS</h4>
                                <div class="plan-price-tag">
                                    <sup>$</sup>99<sub>/YR<sup>◊</sup></sub>
                                </div>
                            </div>
                            <div className="plan-box-button2">
                                <button><div className="inner-cut">SIGN UP</div></button>
                            </div>
                            <div className="price-detail">($8.25 x 12 months)</div>
                        </div>
                    </div>
                    <p>All prices in US dollars (plus tax where applicable). Free trial available only to new subscribers.</p>
                </div>
            </div>
        </>
    )
}
