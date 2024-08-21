import React, { useState } from 'react';
import './style&fasion.scss';
import { } from '../../../assets/images/imageJS/moviesImg';
import { styleFasion1, styleFasion2, styleFasion3, styleFasion4, styleFasion5, } from '../../../assets/images/imageJS/lifestyleImg';

export default function StyleFasion() {
    const [visibleItems, setVisibleItems] = useState(4);

    const charactersComic = [
        { imgSrc: styleFasion1, name: 'Culture & Lifestyle', description: "How-To Guide: Yelena Belova's Round and Fishtail Braid Team-Up on 'Hawkeye'" },
        { imgSrc: styleFasion2, name: 'Culture & Lifestyle', description: "By Odin's Beard, Here Are The Top 10 Beards in the Marvel Universe" },
        { imgSrc: styleFasion3, name: 'Culture & Lifestyle', description: "How to Thrift Your Own ‘Marvel’s Runaways’ Halloween Costume" },
        { imgSrc: styleFasion4, name: 'Culture & Lifestyle', description: "How-To Guide: Hope Van Dyne's Simple Braid Look from 'Ant-Man and The Wasp'" },
        { imgSrc: styleFasion5, name: 'Culture & Lifestyle', description: "Go Back to School Marvel-Style" },
    ];

    const loadMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
    };

    return (
        <>
            <div className="news-section" id="fashion-gear">
                <div className="containerH">
                    <h2>Style & Fashion</h2>
                    <div className="character-comic">
                        {charactersComic.slice(0, visibleItems).map((charactersComic, index) => (
                            <div className="character-comic-box" key={index}>
                                <div className="character-comic-image">
                                    <img src={charactersComic.imgSrc} alt={charactersComic.name} />
                                </div>
                                <div className="character-comic-text">
                                    <span>{charactersComic.name}</span>
                                    <p>{charactersComic.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleItems < charactersComic.length && (
                        <div className="latest-div1-button">
                            <button onClick={loadMoreItems}><div className="inner-cut">LOAD MORE</div></button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
