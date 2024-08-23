import React from 'react';
import './help.scss';
import { helpButton, helpCard1, helpCard2, helpCard3, helpCard4, helpCard5, helpCard6 } from '../../assets/images/imageJS/heloImg';
import HelpHeader from './helpHeader';
import HelpFooter from './helpFooter';

export default function Help() {
    return (
        <>
            <HelpHeader />
            <div className="help-banner">
                <h1>Welcome to Marvel Customer Support</h1>
            </div>
            <section>
                <div className="container4">
                    <div className="help-cards">
                        <div className="help-cards-div">
                            <img src={helpCard1} alt="helpCard" />
                        </div>
                        <div className="help-cards-div">
                            <img src={helpCard2} alt="helpCard2" />
                        </div>
                        <div className="help-cards-div">
                            <img src={helpCard3} alt="helpCard3" />
                        </div>
                        <div className="help-cards-div">
                            <img src={helpCard4} alt="helpCard4" />
                        </div>
                        <div className="help-cards-div">
                            <img src={helpCard5} alt="helpCard5" />
                        </div>
                        <div className="help-cards-div">
                            <img src={helpCard6} alt="helpCard6" />
                        </div>
                    </div>
                    <div className="topics">
                        <h2>POPULAR TOPICS</h2>
                        <ul>
                            <li><a href="/help">What is Marvel Unlimited?</a></li>
                            <li><a href="/help">How do I upgrade my Marvel Unlimited subscription?</a></li>
                            <li><a href="/help">Can I preview Marvel Unlimited before I subscribe?</a></li>
                            <li><a href="/help">I want to learn more about purchased / redeemed digital comics in Marvel Unlimited</a></li>
                        </ul>
                        <div className="help-button">
                            <img src={helpButton} alt="helpButton" />
                        </div>
                    </div>
                    <div className="business-hours">
                        <h3>Our business hours:</h3>
                        <p>Monday - Friday, 8:30AM - 5:30PM CT</p>
                    </div>
                </div>
            </section>
            <HelpFooter />
        </>
    )
}
