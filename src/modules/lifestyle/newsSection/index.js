import React from 'react';
import './newsSection.scss';
import {  } from '../../../assets/images/imageJS/moviesImg';
import { lifestyleNews1, lifestyleNews2, lifestyleNews3, lifestyleNews4 } from '../../../assets/images/imageJS/lifestyleImg';

export default function NewsSection() {
    const charactersComic = [
        { imgSrc: lifestyleNews1, name: 'Culture & Lifestyle', description: 'Get tickets to Marvel Studios’ Infinity Saga Concert Experience at the Hollywood Bowl' },
        { imgSrc: lifestyleNews2, name: 'Culture & Lifestyle', description: 'Explore the Marvel Universe with the \'MARVEL Encyclopedia\'' },
        { imgSrc: lifestyleNews3, name: 'Culture & Lifestyle', description: "'Captain America: Brave New World: A Hero Looks Like You' Picture Book Inspires Young Readers" },
        { imgSrc: lifestyleNews4, name: 'Culture & Lifestyle', description: 'Marvel Sets Sail with the Disney Destiny in November 2025' },
    ];

    return (
        <>
            <div className="news-section">
                <div className="containerH">
                    <h2>Latest News</h2>
                    <div className="character-comic">
                        {charactersComic.map((charactersComic, index) => (
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
                    <div className="news-numbering">
                        <ul>
                            <li><span href="/">1</span></li>
                            <li><span href="/">2</span></li>
                            <li><span href="/">3</span></li>
                            <li><span href="/">4</span></li>
                            <li><span href="/">5</span></li>
                            <li><span href="/">...</span></li>
                            <li><span href="/">303</span></li>
                            <li className='next-button'><span href="/">NEXT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
