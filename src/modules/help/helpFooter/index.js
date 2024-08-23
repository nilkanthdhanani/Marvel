import React, { useState, useEffect, useRef } from 'react';
import './helpFooter.scss';
import { dropDown } from '../../../assets/images/imageJS/heloImg';

export default function HelpFooter() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('(US)');
    const dropdownRef = useRef(null);

    const languages = [
         '(Europe)', '(AU)', '(CA)', '(GB)', '(IL)', '(IN)', '(Japan)', '(MX)', '(MY)', '(NZ)', '(PH)', '(Saudi Arabia)', '(SG)', '(Turkey)', '(US)'
    ];

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setDropdownVisible(false);
    };

    useEffect(() => {
        if (isDropdownVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownVisible]);

    return (
        <div className="help-footer">
            <div className="container4">
                <div className="help-footer-first">
                    <a href="/help">Terms of Use</a><span>|</span>
                    <a href="/help">Privacy Rights</a><span>|</span>
                    <a href="/help">Your US State Privacy Rights</a><span>|</span>
                    <a href="/help">Children's Online Privacy Policy</a><span>|</span>
                    <a href="/help">License Agreement</a><span>|</span>
                    <a href="/help">Interest-Based Ads</a><span>|</span>
                    <a href="/help">Marvel Insider Terms</a>
                </div>
                <div className="help-footer-second">
                    <a href="/help">©2024 MARVEL</a>
                </div>
                <div className="help-footer-drop-main">
                    <div className="help-footer-drop" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className={isDropdownVisible ? 'active' : ''}>
                            English {selectedLanguage} <img src={dropDown} alt="dropDown" />
                        </button>
                        <div className={`help-footer-drop-div ${isDropdownVisible ? 'visible' : ''}`}>
                            {languages
                                .filter(language => language !== selectedLanguage)
                                .map(language => (
                                    <a
                                        href="/help"
                                        key={language}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLanguageSelect(language);
                                        }}>
                                        English {language}
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
