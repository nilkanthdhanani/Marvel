import React, { useState, useEffect, useRef } from 'react';
import './dropdown.scss';
import { marvelInsiderLogo } from '../../../assets/images/imageJS/homeImg';

export default function Join() {
    const [isJoinVisible, setIsJoinVisible] = useState(false);
    const joinRef = useRef(null);

    const toggleJoinDropdown = () => {
        setIsJoinVisible(!isJoinVisible);
    };

    const handleClickOutside = (event) => {
        if (joinRef.current && !joinRef.current.contains(event.target)) {
            setIsJoinVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <>
            <div className="header-main1-div">
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    toggleJoinDropdown();
                }}> JOIN </a>
            </div>
            <div ref={joinRef} className={`join ${isJoinVisible ? 'visible' : ''}`}>
                <h2>ENHANCE YOUR MARVEL EXPERIENCE</h2>
                <div className="join-logo">
                    <img src={marvelInsiderLogo} alt="marvelInsiderLogo" />
                </div>
                <ul>
                    <li>Earn points for what you already do as a Marvel fan and redeem for cool rewards as a <a href="/insider">Marvel Insider</a>. <br />
                        <span>(Points/Rewards program available to U.S. residents only.)</span>
                    </li>
                    <li>Unlock the world of Marvel Digital Comics! Your key for reading <a href="/unlimited">Marvel Unlimited</a> and Digital Comic purchases across multiple devices.
                    </li>
                    <li>Get the latest news, original content, and special offers from Marvel.
                    </li>
                </ul>
                <div className="banner-content-button2">
                    <button><span>CREATE ACCOUNT</span><div className="inner-cut"></div></button>
                </div>
                <div className="login-call">
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        </>
    );
}
