import React from 'react';
import './unlimitedHeader.scss';
import { muLogoFull } from '../../../assets/images/imageJS/unlimitedImg';

export default function UnlimitedHeader({ showMainHeader }) {
    return (
        <>
            <div className="unlimited-Header">
                <div className={`uh-first ${showMainHeader ? 'hidden' : ''}`}>
                    <a href="/login">
                        <button><span>LOG IN</span></button>
                    </a>
                </div>
                <div className={`uh-main ${showMainHeader ? '' : 'hidden'}`}>
                    <div className="uh-main-logo">
                        <img src={muLogoFull} alt="muLogoFull" />
                    </div>
                    <div className="uh-main-button">
                        <a href="/login">
                            <button><span>SIGN UP NOW</span></button>
                        </a>
                        <a href="/login">
                            <button><span>LOG IN</span></button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
