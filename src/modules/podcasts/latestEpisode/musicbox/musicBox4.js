import React from 'react';
import './musicbox.scss';
import { apple, more, musicBox4, play, playGray, upRightArrow } from '../../../../assets/images/imageJS/podcastImg';

export default function MusicBox4() {
    return (
        <>
            <div className="music-box">
                <h3>Marvel’s Squirrel Girl: The Unbeatable Radio Show!</h3>
                <div className="music-box-main">
                    <div className="music-box-main1">
                        <div className="apple">
                            <img src={apple} alt="apple" />
                            <span>Podcasts</span>
                        </div>
                        <div className="music-box-poster">
                            <img src={musicBox4} alt="musicBox4" />
                        </div>
                        <div className="music-box-text">
                            <div className="music-box-text-main">
                                <h4>Marvel’s Squirrel Girl: The Unbeatable Radio Show!</h4>
                                <span>Marvel & SiriusXM</span>
                            </div>
                            <div className="more-button">
                                <img src={more} alt="more" />
                            </div>
                        </div>
                        <p>Squirrel Girl has taken down Thanos and Doctor Doom – but now she faces something far more terrifying… living authentically. Empire State University college student, Doreen Green, has recently been outed as a Super Hero – The Unbeatable Squirrel Girl! Hoping to unify her personas in the public eye, Squirrel Girl has created a new student radio show on ESU’s own college station.</p>
                        <div className="music-box-button">
                            <button><img src={play} alt="play" />Latest Episode</button>
                        </div>
                    </div>
                    <div className="music-box-main2">
                        <div className="music-list">
                            <h5><img src={playGray} alt="playGray" />WED - 32M</h5>
                            <p>Hear From the Cast of Thunderbolts*, The Fantastic Four: First Steps, and more!</p>
                        </div>
                        <div className="music-list">
                            <h5><img src={playGray} alt="playGray" />AUG 14 - 39M</h5>
                            <p>Deadpool & Wolverine Spoilers with Ryan Reynolds and Hugh Jackman!</p>
                        </div>
                        <div className="music-list">
                            <h5><img src={playGray} alt="playGray" />AUG 7 - 29M</h5>
                            <p>Inside Deadpool &amp; Wolverine's Stunts, Plus Kathryn Hahn, Charlie Cox, Dominique Thorne &amp; More!</p>
                        </div>
                        <div className="music-list">
                            <h5><img src={playGray} alt="playGray" />JUL 31 - 38M</h5>
                            <p>Doom Joins the MCU, Deadpool & Wolverine Dominates, and MUCH More from Marvel at SDCC!</p>
                        </div>
                        <div className="music-list">
                            <h5><img src={playGray} alt="playGray" />JUL 24 - 34M</h5>
                            <p>Matthew Macfadyen, Wendy Jacobson, and Cody Ziglar talk Deadpool!</p>
                        </div>
                        <div className="music-box-main2-last">
                            <h6>See More Episodes <img src={upRightArrow} alt="upRightArrow" /></h6>
                        </div>
                        <div className="last-text">See how your data is managed...</div>
                    </div>
                </div>
                <div class="banner-content-button">
                    <button><span>SUBSCRIBE</span><div class="inner-cut"></div></button>
                    <button><span>ARCHIVE</span><div class="inner-cut"></div></button>
                </div>
            </div>
        </>
    )
}
