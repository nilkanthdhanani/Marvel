import React from 'react';
import './roleplaingHB.scss';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';
import { roleplayingLogo } from '../../../assets/images/imageJS/roleplayingImg';

export default function RoleplayingHB() {
    return (
        <>
            <div className="role-banner-main">
                <div className='role-banner'>
                    <div className="containerH">
                        <div className="banner-content">
                            <div className="banner-content-div">
                                <img src={roleplayingLogo} alt="roleplayingLogo" />
                                <p>X-Men Expansion Available Now!</p>
                                <div className="banner-content-button">
                                    <button>
                                        <span>BUY NOW</span>
                                        <div className="inner-cut"></div>
                                    </button>
                                    <button>
                                        <span>LATEST NEWS</span>
                                        <div className="inner-cut"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="role-banner-batch">
                    <div className="container">
                        <div className="batch-main">
                            <div className="social-links">
                                <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
                                <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
                                <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}