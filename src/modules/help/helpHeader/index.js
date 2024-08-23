import React from 'react';
import './helpHeader.scss';
import { logo } from '../../../assets/images/imageJS/heloImg';

export default function HelpHeader() {
    return (
        <>
            <div className="help-header">
                <div className="container3">
                    <div className="help-header-div">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className="help-header-div-link">
                            <a href="/">Submit a request</a>
                            <a href="/login">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
