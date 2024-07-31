import React from 'react';
import './innersidebar.scss';
import Less from '../../../assets/images/svg/less';

export default function InnerSidebar({ isOpen, closeInnerSidebar, contentKey }) {
    const contentMap = {
        'NEWS': <>
            <a href="/news">LATEST NEWS</a>
            <a href="/news">ALL NEWS</a>
            <div className="secondary">
                <h2>SEARCH BY</h2>
                <a href="/">MOVIES</a>
                <a href="/">COMICS</a>
                <a href="/">TV SHOWS</a>
                <a href="/">GAMES</a>
                <a href="/">DIGITAL SERIES</a>
                <a href="/">CULTURE & LIFESTYLE</a>
                <a href="/">PODCASTS</a>
            </div>
        </>,
        'COMICS': <>
            <a href="/">RELEASE CALENDAR</a>
            <a href="/">MARVEL UNLIMITED</a>
            <a href="/">STROMBREAKERS</a>
            <a href="/">READING GUIDES</a>
            <a href="/">PRINT SUBSCRIPTIONS</a>
            <a href="/">ALL COMICS</a>
            <div className="secondary">
                <h2>BROWSE BY</h2>
                <a href="/">SERIES</a>
                <a href="/">CHARACTER</a>
                <a href="/">CREATOR</a>
            </div>
        </>,
        'CHARACTERS': <>
            <a href="/">ALL CHARACTERS</a>
            <a href="/">TEAMS & GROUPS</a>
            <a href="/">EXPLORE ALL</a>
        </>,
        'MOVIES': <>
            <a href="/">CAPTAIN AMERICA: BRAVE NEW WORLD</a>
            <a href="/">DEADPOOL & WOLVERINE</a>
            <a href="/">THE MARVELS</a>
            <a href="/">SEE ALL MOVIES</a>
            <a href="/">DISNEY+</a>
        </>,
        'TV SHOWS': <>
            <a href="/">X-MEN '97</a>
            <a href="/">ECHO</a>
            <a href="/">WHAT IF...?</a>
            <a href="/">SEE ALL TV SHOWS</a>
            <a href="/">DISNE+</a>
        </>,
        'GAMES': <>
            <a href="/">MARVEL 1943: RISE OF HYDRA</a>
            <a href="/">MARVEL VS. CAPCOM</a>
            <a href="/">MARVEL'S SPIDER-MAN 2</a>
            <a href="/">MARVEL SNAP</a>
            <a href="/">SEE ALL GAMES</a>
        </>,
        'VIDEOS': <>
            <a href="/">TRAILERS & EXTRAS</a>
            <a href="/">DIGITAL SERIES</a>
            <a href="/">ALL VIDEO</a>
            <div className="secondary">
                <h2>OUR SHOWS</h2>
                <a href="/">EARTH'S MIGHTIEST SHOW</a>
                <a href="/">THIS WEEK IN MARVEL</a>
                <a href="/">WOMEN OF MARVEL</a>
            </div>
        </>,
    };

    const content = (
        <div className="inner-content-link">
            <div className="inner-content-link-main" onClick={closeInnerSidebar}>
                <Less />
                <span>{contentKey}</span>
            </div>
            {contentMap[contentKey]}
        </div>
    );

    return (
        <div className={`inner-sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="inner-sidebar-content">
                <div className="inner-content">
                    {content}
                </div>
            </div>
        </div>
    );
}
