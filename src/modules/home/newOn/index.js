import React from 'react'
import './newOn.scss';
import { newOnLogo } from '../../../assets/images/png';

export default function NewOn() {
    return (
        <>
            <div className="newOn">
                <div className="newOn-two"></div>
                <div className="newOn-one">
                    <div className="container">
                        <div className="newOn-one-div">
                            <img src={newOnLogo} alt="newOnLogo" />
                            <h3>AVAILABLE NOW</h3>
                            <h2>NEW ON MARVEL UNLIMITED</h2>
                            <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
                            <div className="newOn-one-button">
                                <button>
                                    <div className="inner-cut">GET MARVEL UNLIMITED</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
