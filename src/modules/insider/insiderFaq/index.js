import React, { useState } from 'react';
import './insiderFaq.scss';

const faqData = [
    {
        question: "What is Marvel Insider?",
        answer: (
            <>
                <p>Marvel Insider is Marvel's loyalty rewards program for our fans in the fifty (50) United States and the District of Columbia, aged 18 and over. It's the ultimate way for Marvel fans to connect with the Marvel Universe! Join for free and get rewarded for doing the things you're already doing as a Marvel fan. Earn points for connecting and engaging with us on social media, buying comics, reading and watching content on Marvel.com and much more! Then use your points to redeem for a variety of cool Marvel rewards from digital comics to Marvel merchandise and lots of items in between.</p>
            </>
        )
    },
    {
        question: "How do I earn points?",
        answer: (
            <>
                <p>You can earn fan level points, redeemable rewards points, and lifetime rewards points (collectively, "Points") in a number of ways including watching the latest videos and trailers, listening to the latest podcast, playing Marvel games, staying up to date on the latest news and more! Be sure to log into your Marvel Insider account while visiting Marvel.com and check out the Activities page for the current list of activities that are eligible for points. Please allow 5-10 minutes for completed activities to be marked completed and/or show up in your activities history.</p>
            </>
        )
    },
    {
        question: "How do I redeem my points for a reward?",
        answer: (
            <>
                <p>Once you have enough points to redeem a reward, visit the Rewards page of your Marvel Insider Dashboard. Click on the reward you want and then follow the instructions to check out. You’ll receive a confirmation email when the transaction is complete with detailed instructions on how to receive your reward.</p>
                <p>Gaming related rewards will require you to enter your gaming specific player identifier. This must be entered exactly as it appears in the game in order to receive the reward.</p>
            </>
        )
    }
];

export default function InsiderFaq() {
    const [openIndices, setOpenIndices] = useState([]);

    const toggleFaq = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <>
            <div className="insider-faq">
                <div className="container-faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-main">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-main-list">
                                <h3 onClick={() => toggleFaq(index)}>{faq.question}</h3>
                                <div className={`plus-icon ${openIndices.includes(index) ? 'hidden' : ''}`}>+</div>
                                <div className={`minus-icon ${openIndices.includes(index) ? 'visible' : ''}`}>_</div>
                                <div className={`faq-main-list-pera ${openIndices.includes(index) ? 'open' : ''}`}>
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="containerH">
                    <div className="condition">
                        <div className="condition-div1">
                            <h4>TERMS & CONDITIONS</h4>
                        </div>
                        <div className="condition-div2">
                            <p><small>*</small> OPEN TO U.S. RESIDENTS ONLY. By joining, I affirm that I am a US resident, I have read and agree to the <a href="/insider">Marvel Insider Loyalty Rewards Program Terms of Use</a> and the <a href="/insider">Marvel.com Terms of Use</a> and acknowledge that I have read the <a href="/insider">Privacy Policy</a>.</p>
                            <p>Actual activities and rewards may vary and are subject to availability and other terms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
