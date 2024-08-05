import React, { useState, useEffect } from 'react';
import './header.scss';
import { logo, unlimited } from '../../assets/images/homeImg';
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

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (window.scrollY < lastScrollY) {
          setIsScrollingUp(true);
        } else {
          setIsScrollingUp(false);
        }
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
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="containerH">
          <div className="header-main">
            <div className="header-main1">
              <div className="header-main1-div">
                <Login />
                <a href="/">LOG IN</a>
                <span>|</span>
                <a href="/">JOIN</a>
              </div>
              <div onClick={toggleSidebar} className="header-main1-menu">
                <Menu />
              </div>
            </div>
            <div className="header-main2">
              <div className="header-main2-div1">
                <img src={unlimited} alt="unlimited" />
                <div className="unlimited-text">
                  <p>MARVEL UNLIMITED</p>
                  <span>SUBSCRIBE</span>
                </div>
              </div>
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
                  <a href="/news">NEWS</a>
                </div>
                <Dropdown1 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/comics">COMICS</a>
                </div>
                <Dropdown2 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/characters">CHARACTERS</a>
                </div>
                <Dropdown3 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/movies">MOVIES</a>
                </div>
                <Dropdown4 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/">TV SHOWS</a>
                </div>
                <Dropdown5 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/">GAMES</a>
                </div>
                <Dropdown6 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/">VIDEOS</a>
                </div>
                <Dropdown7 />
              </li>
              <li>
                <div className="ancer-link">
                  <a href="/">MORE</a>
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
