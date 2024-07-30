import React from 'react'
import './footer.scss';
import FooterLogo from '../../assets/images/svg/footerLogo';
import { footerInsider, footerMu } from '../../assets/images/png';
import Facebook from '../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../assets/images/svg/sidebarIcon/instagram';
import Tumblr from '../../assets/images/svg/sidebarIcon/tumblr';
import Youtube from '../../assets/images/svg/sidebarIcon/youtube';
import Snapchat from '../../assets/images/svg/sidebarIcon/snapchat';
import Pinterest from '../../assets/images/svg/sidebarIcon/pinterest';
import Twitch from '../../assets/images/svg/sidebarIcon/twitch';
import Tiktok from '../../assets/images/svg/sidebarIcon/tiktok';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-div">
          <div className="footer-div1">
            <div className="footer-logo">
              <FooterLogo />
            </div>
            <div className="footer-list">
              <ul>
                <li><a href="/">About Marvel</a></li>
                <li><a href="/">Help/FAQs</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Internships</a></li>
              </ul>
              <ul className="lighter">
                <li><a href="/">Advertising</a></li>
                <li><a href="/">Disney+</a></li>
                <li><a href="/">Marvelhq.com</a></li>
                <li><a href="/">Redeem Digital Comics</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-div2">
            <div className="footer-div2-logo">
              <img src={footerInsider} alt="footerInsider" />
              <div className="footer-div2-text">
                <h2>MARVEL INSIDER</h2>
                <p>Get Rewarded for Being a Marvel Fan</p>
              </div>
            </div>
            <div className="footer-div2-logo">
              <img src={footerMu} alt="footerMu" />
              <div className="footer-div2-text">
                <h2>MARVEL UNLIMITED</h2>
                <p>Access Over 30,000+ Digital Comics</p>
              </div>
            </div>
          </div>
          <div className="footer-div3">
            <h2>FOLLOW MARVEL</h2><div className="footer-div3-box1">
              <div className="footer-div3-svg">
                <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://marvelentertainment.tumblr.com/" target='blank'><Tumblr /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://www.youtube.com/channel/UCvC4D8onUfXzvjTOM-dBfEA" target='blank'><Youtube /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://www.snapchat.com/add/marvel" target='blank'><Snapchat /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://in.pinterest.com/marvelofficial/" target='blank'><Pinterest /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://www.twitch.tv/Marvel" target='blank'><Twitch /></a>
              </div>
              <div className="footer-div3-svg">
                <a href="https://www.tiktok.com/@marvel" target='blank'><Tiktok /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-div-last">
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Addendum to the Global Privacy Policy</a>
          <a href="/">Interest-Based Ads</a>
          <a href="/">License Agreement</a>
          <a href="/">©2024 MARVEL</a>
        </div>
      </div>
    </footer>
  )
}
