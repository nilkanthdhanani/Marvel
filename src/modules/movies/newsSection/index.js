import React from 'react'
import './newsSection.scss';
import { movieNews1, movieNews2, movieNews3, movieNews4 } from '../../../assets/images/movies';

export default function NewsSection() {
    const charactersComic = [
        { imgSrc: movieNews1, name: 'Gear', description: 'Suit Up as Green Goblin with Realistic Roleplay Helmet and Electronic Pumpkins' },
        { imgSrc: movieNews2, name: 'Live Events', description: 'The Biggest Marvel News from San Diego Comic-Con 2024' },
        { imgSrc: movieNews3, name: 'Live Events', description: 'SDCC 2024: All the News from Marvel Studios’ Hall H Panel' },
        { imgSrc: movieNews4, name: 'Live Events', description: 'SDCC 2024: Robert Downey Jr. to Play Doom in the Russo Brothers’ ‘Avengers: Doomsday’' },
    ];

    return (
        <>
            <div className="news-section">
                <div className="containerH">
                    <h2>Latest Movies News</h2>
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
                            <li><span href="/">295</span></li>
                            <li className='next-button'><span href="/">NEXT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
