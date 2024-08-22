import React from 'react';
import './roleLogo.scss';
import { roleLogo1, roleLogo2 } from '../../../assets/images/imageJS/roleplayingImg';

const faqData = [
    { question: "What is the Marvel Multiverse Role-Playing Game?" },
    { question: "Where can I purchase the Marvel Multiverse Role-Playing Game?" },
    { question: "My favorite Marvel character has a rank or power(s) that I don't agree with. What should I do?" },
    { question: "The powers that I want for my character are not in the Core Rulebook. Will they be in future expansions?" },
    { question: "Is there any errata for the book?" },
    { question: "Are there any other books coming out for the game?" },
    { question: "Where can I pre-order the Marvel Multiverse Role-Playing Game: X-Men Expansion, Marvel Multiverse Role-Playing Game: Spider-Verse Expansion, and any other future releases?" },
    { question: "Are there miniatures, dice, or other accessories for the game?" },
    { question: "What should I do if I don't have the official dice for the game?" },
    { question: "How can I stay in the know on all Marvel Multiverse Role-Playing Game updates?" },
];

export default function RoleLogo() {
    return (
        <>
            <div className="role-logo">
                <div className="containerH">
                    <div className="role-logo-main">
                        <div className="role-logo-div">
                            <h3>Official Virtual Tabletop</h3>
                            <img src={roleLogo1} alt="roleLogo1" />
                        </div>
                        <div className="role-logo-div2">
                            <h3>Official Digital Toolset</h3>
                            <img src={roleLogo2} alt="roleLogo2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="role-faq">
                <div className="container-faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="role-faq-main">
                        {faqData.map((faq, index) => (
                            <div key={index} className="role-faq-main-list">
                                <h3>{faq.question}</h3>
                                <div className="plus-icon" >+</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
