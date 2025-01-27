import React from 'react'
import './newsSection.scss';
import { gameNews, latest27, latestGames, latestGames3 } from '../../../assets/images/imageJS/gamesImg';

export default function NewsSection() {
    const charactersComic = [
        { imgSrc: latest27, name: 'Live Events', description: '‘Marvel Contest of Champions’ and Google Play Team Up to Take Rewards to New Heights at San Diego Comic-Con 2024' },
        { imgSrc: latestGames, name: 'Games', description: "Join the POOL Party in 'MARVEL Strike Force'" },
        { imgSrc: latestGames3, name: 'Trailers & Extras', description: 'MARVEL vs. CAPCOM Fighting Collection: Arcade Classics - Announce Trailer' },
        { imgSrc: gameNews, name: 'Games', description: "Unlock Your Free Wolverine X-Men '97 Costume in 'MARVEL Strike Force'" },
    ];

    return (
        <>
            <div className="news-section">
                <div className="containerH">
                    <h2>Latest Game News</h2>
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
                            <li><span>1</span></li>
                            <li><span>2</span></li>
                            <li><span>3</span></li>
                            <li><span>4</span></li>
                            <li><span>5</span></li>
                            <li><span>...</span></li>
                            <li><span>274</span></li>
                            <li className='next-button'><span>NEXT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
