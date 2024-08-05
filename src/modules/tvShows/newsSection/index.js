import React from 'react'
import './newsSection.scss';
import { showNews1, showNews2, showNews3, showNews4 } from '../../../assets/images/shows';

export default function NewsSection() {
    const charactersComic = [
        { imgSrc: showNews1, name: 'CULTURE & LIFESTYLE', description: 'Be the Hero of Your Exercise Adventure with the ‘Marvel Fitness Deck’' },
        { imgSrc: showNews2, name: 'TV SHOWS', description: "Kathryn Hahn’s Agatha Harkness Returns in 'Agatha All Along' Trailer" },
        { imgSrc: showNews3, name: 'MOVIES', description: 'The Avengers Assemble to Dub 2012 Film in the Lakota Language' },
        { imgSrc: showNews4, name: 'MOVIES', description: 'Go Behind the Scenes of Marvel Studios’ Signature Sound' },
    ];

    return (
        <>
            <div className="news-section">
                <div className="containerH">
                    <h2>Latest Tv News</h2>
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
                            <li><span href="/">451</span></li>
                            <li className='next-button'><span href="/">NEXT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
