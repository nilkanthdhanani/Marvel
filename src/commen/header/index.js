import React, { useState, useEffect } from 'react';
import './header.scss';
import { logo, unlimited } from '../../assets/images/imageJS/homeImg';
import Login from '../../assets/images/svg/login';
import Search from '../../assets/images/svg/search';
import Menu from '../../assets/images/svg/menu';
import Sidebar from './sidebar/index';
import Dropdown1 from './dropdown/dropdown1';
import Dropdown2 from './dropdown/dropdown2';
import Dropdown3 from './dropdown/dropdown3';
import Dropdown4 from './dropdown/dropdown4';
import Dropdown5 from './dropdown/dropdown5';
import Dropdown6 from './dropdown/dropdown6';
import Dropdown7 from './dropdown/dropdown7';
import Dropdown8 from './dropdown/dropdown8';
import { Link } from 'react-router-dom';
import Join from './dropdown/join';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? 'auto' : 'hidden';
  };

  const hideHeaderOnLinkClick = () => {
    window.scrollTo(0, 0);
    setIsScrollingUp(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 || window.scrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={isScrollingUp ? 'scroll-up' : 'scroll-down'}>
      <div className="header-first">
        <div className="logo">
          <Link to="/" onClick={hideHeaderOnLinkClick}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="containerH">
          <div className="header-main">
            <div className="header-main1">
              <div className="header-main1-div">
                <Login />
                <a href="/login" onClick={hideHeaderOnLinkClick}>LOG IN</a>
                <span>|</span>
                <Join />  
              </div>
              <div onClick={toggleSidebar} className="header-main1-menu">
                <Menu />
              </div>
            </div>
            <div className="header-main2">
              <Link to={"/unlimited"}>
                <div className="header-main2-div1">
                  <img src={unlimited} alt="unlimited" />
                  <div className="unlimited-text">
                    <p>MARVEL UNLIMITED</p>
                    <span>SUBSCRIBE</span>
                  </div>
                </div>
              </Link>
              <div className="header-main2-div2">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-second">
        <div className="containerH">
          <div className="header-second-ancer">
            <div className="header-second-hover">
              <li>
                <div className="ancer-link">
                  <a href="/news" onClick={hideHeaderOnLinkClick}>NEWS</a>
                </div>
                <Dropdown1 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/comics" onClick={hideHeaderOnLinkClick}>COMICS</a>
                </div>
                <Dropdown2 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/characters" onClick={hideHeaderOnLinkClick}>CHARACTERS</a>
                </div>
                <Dropdown3 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/movies" onClick={hideHeaderOnLinkClick}>MOVIES</a>
                </div>
                <Dropdown4 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/tvshows" onClick={hideHeaderOnLinkClick}>TV SHOWS</a>
                </div>
                <Dropdown5 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/games" onClick={hideHeaderOnLinkClick}>GAMES</a>
                </div>
                <Dropdown6 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/videos" onClick={hideHeaderOnLinkClick}>VIDEOS</a>
                </div>
                <Dropdown7 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/videos" onClick={hideHeaderOnLinkClick}>MORE</a>
                </div>
                <Dropdown8 />
              </li>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}
