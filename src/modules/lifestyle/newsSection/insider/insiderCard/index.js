import React from 'react';
import './insiderCard.scss';
import { insiderCard1, insiderCard2, insiderCard3, insiderCardM1, insiderCardM2, insiderCardM3 } from '../../../assets/images/imageJS/insiderImg';

export default function InsiderCard() {
    return (
        <>
            <div className="insider-card">
                <div className="containerH">
                    <h2>Cool Rewards for Marvel Insiders</h2>
                    <h3>New ones added regularly</h3>
                    <div className="insider-card-main">
                        <img src={insiderCard1} alt="insiderCard1" />
                        <img src={insiderCardM1} alt="insiderCardM1" />
                        <div className="insider-card-text right">
                            <h4>One-of-a-kind Marvel Experiences</h4>
                            <div class="banner-content-button"><button><span>BECOME AN INSIDER</span><div class="inner-cut"></div></button></div>
                        </div>
                    </div>
                    <div className="insider-card-main">
                        <img src={insiderCard2} alt="insiderCard2" />
                        <img src={insiderCardM2} alt="insiderCardM2" />
                        <div className="insider-card-text left">
                            <h4>Chances to win Insider-only Giveaways for Marvel Merch</h4>
                            <div class="banner-content-button"><button><span>BECOME AN INSIDER</span><div class="inner-cut"></div></button></div>
                        </div>
                    </div>
                    <div className="insider-card-main">
                        <img src={insiderCard3} alt="insiderCard3" />
                        <img src={insiderCardM3} alt="insiderCardM3" />
                        <div className="insider-card-text right">
                            <h4>Digital comics, digital wallpapers, in-game rewards, and more!</h4>
                            <div class="banner-content-button"><button><span>BECOME AN INSIDER</span><div class="inner-cut"></div></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
