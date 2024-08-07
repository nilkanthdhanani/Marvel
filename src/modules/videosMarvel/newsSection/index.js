import React from 'react'
import './newsSection.scss';
import { movieNews2, videoNews1, videoNews2, videoNews3 } from '../../../assets/images/videos';

export default function NewsSection() {
    const charactersComic = [
        { imgSrc: movieNews2, name: 'Live Events', description: 'The Biggest Marvel News from San Diego Comic-Con 2024' },
        { imgSrc: videoNews1, name: 'Comics', description: "'Marvel's Voices' Anthology Series Hits Its 100th Issue on Marvel Unlimited" },
        { imgSrc: videoNews2, name: 'Comics', description: "'Marvel's Voices: Legends' Creators Share the Joy of Working with Storm, Black Panther, Patriot & More" },
        { imgSrc: videoNews3, name: 'Podcasts', description: "The 'Women of Marvel' Guide to Carol Danvers, AKA Captain Marvel" },
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
                            <li><span href="/">222</span></li>
                            <li className='next-button'><span href="/">NEXT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
