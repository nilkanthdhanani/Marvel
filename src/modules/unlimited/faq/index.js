import React, { useState } from 'react';
import './faq.scss';

const faqData = [
    {
        question: "What is Marvel Unlimited?",
        answer: (
            <>
                <p>Marvel Unlimited is our member subscription service that gives members unlimited access to over 30,000 issues of Marvel's classic and newer titles, delivered digitally through your desktop web browser and the Marvel Unlimited mobile app.</p>
                <p>More classic and newer issues are added every week — as soon as 3 months after they hit stores!</p>
                <p>The free Marvel Unlimited app can be downloaded from <a href="https://apps.apple.com/us/app/marvel-unlimited/id607205403" target='blank'>iTunes</a><sup>®</sup> or <a href="https://play.google.com/store/apps/details?id=com.marvel.unlimited&hl=en_US&pli=1" target='blank'>Google Play</a>.</p>
            </>
        )
    },
    {
        question: "What books are included in Marvel Unlimited?",
        answer: (
            <>
                <p>We've selected some of our favorite titles to include in the Marvel Unlimited collection. We've included a broad range of characters and fan favorite series and we're adding new comics every week. There are over 30,000 issues available to read, with new titles added weekly!</p>
                <p>To see upcoming releases into Marvel Unlimited, check out the release calendar located in the <a href="/comics">Comics</a> section of the Marvel website.</p>
            </>
        )
    },
    {
        question: "How can I cancel my subscription?",
        answer: (
            <>
                <p>If you do not wish for your subscription to renew at the end of your term, you can either:
                    <ul>
                        <li>Cancel your subscription through the "Marvel Unlimited Membership Management" page by logging in to your account and then going to the following link: <a href="/login">https://mu.marvel.com/account/index.html?cid=dcom_navigation_20210331_unlimited_top&cid=dcom_navigation_20210331_unlimited_top</a> and selecting "Cancel Subscription" and then clicking the "Cancel Subscription" button on the pop-up modal.</li>
                        <li>Reach out to Marvel Customer Support at <a href="https://help.marvel.com/hc/en-us" target='blank'>help.marvel.com</a> to request a cancellation.</li>
                    </ul>
                </p>
                <p>If you purchased your membershi p through iTunes or Google Play, please follow the respective links below for more information on how to cancel your membership:
                    <ul>
                        <li><a href="https://apps.apple.com/us/app/marvel-unlimited/id607205403" target='blank'>iTunes</a><sup>®</sup></li>
                        <li><a href="https://play.google.com/store/apps/details?id=com.marvel.unlimited&hl=en_US" target='blank'>Google Play</a></li>
                    </ul>
                </p>
            </>
        )
    }
];

export default function Faq() {
    const [openIndices, setOpenIndices] = useState([]);

    const toggleFaq = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };
  
    return (
        <div className="faq">
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
        </div>
    );
}
