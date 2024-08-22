import React, { useState, useRef, useEffect } from 'react';
import './sidebar.scss';
import Close from '../../../assets/images/svg/close';
import More from '../../../assets/images/svg/more';
import InnerSidebar from '../innerSidebar/index';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';
import Tumblr from '../../../assets/images/svg/sidebarIcon/tumblr';
import Youtube from '../../../assets/images/svg/sidebarIcon/youtube';
import Snapchat from '../../../assets/images/svg/sidebarIcon/snapchat';
import Pinterest from '../../../assets/images/svg/sidebarIcon/pinterest';
import Twitch from '../../../assets/images/svg/sidebarIcon/twitch';
import Tiktok from '../../../assets/images/svg/sidebarIcon/tiktok';
import { insiderLogo, muLogo } from '../../../assets/images/imageJS/homeImg';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const [innerSidebarOpen, setInnerSidebarOpen] = useState(false);
    const [currentContentKey, setCurrentContentKey] = useState('');
    const sidebarRef = useRef(null);

    const openInnerSidebar = (contentKey) => {
        setCurrentContentKey(contentKey);
        setInnerSidebarOpen(true);
    };

    const closeInnerSidebar = () => {
        setInnerSidebarOpen(false);
    };

    const handleToggleSidebar = () => {
        setInnerSidebarOpen(false);
        setCurrentContentKey('');
        toggleSidebar();
    };

    useEffect(() => {
        if (innerSidebarOpen && sidebarRef.current) {
            sidebarRef.current.scrollTop = 0;
        }
    }, [innerSidebarOpen]);

    return (
        <>
            {isOpen && <div className="overlay" onClick={handleToggleSidebar}></div>}
            <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${innerSidebarOpen ? 'no-scroll' : ''}`} ref={sidebarRef}>
                <div className="sidebar-content">
                    <div className="close-button" onClick={handleToggleSidebar}>
                        <Close />
                    </div>
                    <div className="content">
                        {['NEWS', 'COMICS', 'CHARACTERS', 'MOVIES', 'TV SHOWS', 'GAMES', 'VIDEOS'].map((item) => (
                            <div key={item} className="content-link" onClick={() => openInnerSidebar(item)}>
                                <span>{item}</span>
                                <More />
                            </div>
                        ))}
                        <a href="/lifestyle">LIFESTYLE</a>
                        <a href="/roleplaying">ROLE-PLAYING GAME</a>
                        <a href="/">BOOKS</a>
                        <a href="/">PODCASTS</a>
                        <a href="/">SHOP</a>
                    </div>
                    <div className="login">
                        <div className="login-title">MARVEL INSIDER</div>
                        <a href="/login">LOG IN</a>
                        <a href="/login">JOIN</a>
                    </div>
                    <div className="links">
                        <div className="links-icons">
                            <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
                            <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
                            <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
                            <a href="https://marvelentertainment.tumblr.com/" target='blank'><Tumblr /></a>
                            <a href="https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA" target='blank'><Youtube /></a>
                            <a href="https://www.snapchat.com/add/marvel" target='blank'><Snapchat /></a>
                            <a href="https://in.pinterest.com/marvelofficial/" target='blank'><Pinterest /></a>
                            <a href="https://www.twitch.tv/Marvel" target='blank'><Twitch /></a>
                            <a href="https://www.tiktok.com/@marvel" target='blank'><Tiktok /></a>
                        </div>
                    </div>
                    <div className="ul-insider">
                        <a href="/insider">
                            <div className="ul-insider-links">
                                <img src={insiderLogo} alt="ul-insiderLogo" />
                                <div className="ul-insider-links-text">
                                    <h2>MARVEL INSIDER</h2>
                                    <p>GET REWARDED FOR BEING A MARVEL FAN</p>
                                </div>
                            </div>
                        </a>
                        <a href="/unlimited">
                            <div className="ul-insider-links">
                                <img src={muLogo} alt="muLogo" />
                                <div className="ul-insider-links-text">
                                    <h2>MARVEL UNLIMITED</h2>
                                    <p>ACCESS OVER 30,000+ DIGITAL COMICS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <InnerSidebar isOpen={innerSidebarOpen} closeInnerSidebar={closeInnerSidebar} toggleSidebar={handleToggleSidebar} contentKey={currentContentKey} />
                </div>
            </div>
        </>
    );
}