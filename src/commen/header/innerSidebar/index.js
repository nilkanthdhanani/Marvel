import React from 'react';
import './innersidebar.scss';
import Less from '../../../assets/images/svg/less';
import { Link } from 'react-router-dom';

export default function InnerSidebar({ isOpen, closeInnerSidebar, toggleSidebar, contentKey }) {
    const contentMap = {
        'NEWS': <>
            <Link to="/news" onClick={toggleSidebar}>LATEST NEWS</Link>
            <Link to="/news" onClick={toggleSidebar}>ALL NEWS</Link>
            <div className="secondary">
                <h2>SEARCH BY</h2>
                <Link to="/news#movies" onClick={toggleSidebar}>MOVIES</Link>
                <Link to="/news#comics" onClick={toggleSidebar}>COMICS</Link>
                <Link to="/news#shows" onClick={toggleSidebar}>TV SHOWS</Link>
                <Link to="/news#games" onClick={toggleSidebar}>GAMES</Link>
                <Link to="/news#series" onClick={toggleSidebar}>DIGITAL SERIES</Link>
                <Link to="/news#culture" onClick={toggleSidebar}>CULTURE & LIFESTYLE</Link>
                <Link to="/news#podcasts" onClick={toggleSidebar}>PODCASTS</Link>
            </div>
        </>,
        'COMICS': <>
            <Link to="/comics" onClick={toggleSidebar}>RELEASE CALENDAR</Link>
            <Link to="/comics" onClick={toggleSidebar}>MARVEL UNLIMITED</Link>
            <Link to="/comics" onClick={toggleSidebar}>STROMBREAKERS</Link>
            <Link to="/comics" onClick={toggleSidebar}>READING GUIDES</Link>
            <Link to="/comics" onClick={toggleSidebar}>PRINT SUBSCRIPTIONS</Link>
            <Link to="/comics" onClick={toggleSidebar}>ALL COMICS</Link>
            <div className="secondary">
                <h2>BROWSE BY</h2>
                <Link to="/comics" onClick={toggleSidebar}>SERIES</Link>
                <Link to="/comics" onClick={toggleSidebar}>CHARACTER</Link>
                <Link to="/comics" onClick={toggleSidebar}>CREATOR</Link>
            </div>
        </>,
        'CHARACTERS': <>
            <Link to="/characters" onClick={toggleSidebar}>ALL CHARACTERS</Link>
            <Link to="/characters" onClick={toggleSidebar}>TEAMS & GROUPS</Link>
            <Link to="/characters" onClick={toggleSidebar}>EXPLORE ALL</Link>
        </>,
        'MOVIES': <>
            <Link to="/movies" onClick={toggleSidebar}>CAPTAIN AMERICA: BRAVE NEW WORLD</Link>
            <Link to="/movies" onClick={toggleSidebar}>DEADPOOL & WOLVERINE</Link>
            <Link to="/movies" onClick={toggleSidebar}>THE MARVELS</Link>
            <Link to="/movies" onClick={toggleSidebar}>SEE ALL MOVIES</Link>
            <Link to="/movies" onClick={toggleSidebar}>DISNEY+</Link>
        </>,
        'TV SHOWS': <>
            <Link to="/tvshows" onClick={toggleSidebar}>X-MEN '97</Link>
            <Link to="/tvshows" onClick={toggleSidebar}>ECHO</Link>
            <Link to="/tvshows" onClick={toggleSidebar}>WHAT IF...?</Link>
            <Link to="/tvshows" onClick={toggleSidebar}>SEE ALL TV SHOWS</Link>
            <Link to="/tvshows" onClick={toggleSidebar}>DISNEY+</Link>
        </>,
        'GAMES': <>
            <Link to="/games" onClick={toggleSidebar}>MARVEL 1943: RISE OF HYDRA</Link>
            <Link to="/games" onClick={toggleSidebar}>MARVEL VS. CAPCOM</Link>
            <Link to="/games" onClick={toggleSidebar}>MARVEL'S SPIDER-MAN 2</Link>
            <Link to="/games" onClick={toggleSidebar}>MARVEL SNAP</Link>
            <Link to="/games" onClick={toggleSidebar}>SEE ALL GAMES</Link>
        </>,
        'VIDEOS': <>
            <Link to="/" onClick={toggleSidebar}>TRAILERS & EXTRAS</Link>
            <Link to="/" onClick={toggleSidebar}>DIGITAL SERIES</Link>
            <Link to="/" onClick={toggleSidebar}>ALL VIDEO</Link>
            <div className="secondary">
                <h2>OUR SHOWS</h2>
                <Link to="/" onClick={toggleSidebar}>EARTH'S MIGHTIEST SHOW</Link>
                <Link to="/" onClick={toggleSidebar}>THIS WEEK IN MARVEL</Link>
                <Link to="/" onClick={toggleSidebar}>WOMEN OF MARVEL</Link>
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
