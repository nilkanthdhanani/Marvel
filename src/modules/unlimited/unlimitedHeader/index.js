import React from 'react';
import './unlimitedHeader.scss';

export default function UnlimitedHeader() {
    return (
        <>
            <div className="unlimited-Header">
                <div className="uh-first">
                    <button><span>LOG IN</span></button>
                </div>
                <div className="uh-main">
                    <div className="uh-main-logo"></div>
                    <div className="uh-main-button"></div>
                </div>
            </div>
        </>
    )
}
