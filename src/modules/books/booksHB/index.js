import React from 'react';
import './booksHB.scss';
import Facebook from '../../../assets/images/svg/sidebarIcon/facebook';
import Twitter from '../../../assets/images/svg/sidebarIcon/twitter';
import Instagram from '../../../assets/images/svg/sidebarIcon/instagram';

export default function BooksHB() {
    return (
        <>
            <div className="books-banner">
                <div className="books-banner-main">
                    <div className="books-banner-two"></div>
                    <div className="books-banner-one">
                        <div className="container">
                            <div className="books-banner-one-div">
                                <h2>MARVEL BOOKS</h2>
                                <p>Catch up on all your favorite Marvel books!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books-banner-batch">
                    <div className="container">
                        <div className="batch-main">
                            <h3>FOLLOW</h3>
                            <div className="social-links">
                                <a href="https://www.facebook.com/Marvel/" target='blank'><Facebook /></a>
                                <a href="https://x.com/Marvel" target='blank'><Twitter /></a>
                                <a href="https://www.instagram.com/marvel/" target='blank'><Instagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
