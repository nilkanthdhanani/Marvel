import React from 'react';
import './podcastNews.scss';
import { movieNews2, videoNews1, videoNews2, videoNews3 } from '../../../assets/images/imageJS/videosImg';

export default function PodcastNews() {
    const charactersComic = [
        { imgSrc: movieNews2, name: 'Live Events', description: 'The Biggest Marvel News from San Diego Comic-Con 2024' },
        { imgSrc: videoNews1, name: 'Comics', description: "'Marvel's Voices' Anthology Series Hits Its 100th Issue on Marvel Unlimited" },
        { imgSrc: videoNews2, name: 'Comics', description: "'Marvel's Voices: Legends' Creators Share the Joy of Working with Storm, Black Panther, Patriot & More" },
        { imgSrc: videoNews3, name: 'Podcasts', description: "The 'Women of Marvel' Guide to Carol Danvers, AKA Captain Marvel" },
    ];

    return (
        <>
            <div className="podcast-news">
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
                    <div className="podcast-numbering">
                        <ul>
                            <li><span>1</span></li>
                            <li><span>2</span></li>
                            <li><span>3</span></li>
                            <li><span>4</span></li>
                            <li><span>5</span></li>
                            <li><span>...</span></li>
                            <li><span>186</span></li>
                            <li className='next-button'><span>NEXT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
