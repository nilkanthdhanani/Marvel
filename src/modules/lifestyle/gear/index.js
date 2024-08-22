import React from 'react';
import './gear.scss';
import { } from '../../../assets/images/imageJS/moviesImg';
import { howDrow10, howDrow11, howDrow4, howDrow6, howDrow8, howDrow9 } from '../../../assets/images/imageJS/lifestyleImg';

export default function Gear() {
    const charactersComic = [
        { imgSrc: howDrow8, name: 'gear', description: 'Drawing Desk unveils step-by-step drawing lessons featuring Marvel Super Heroes' },
        { imgSrc: howDrow9, name: 'gear', description: 'Celebrate National Comic Book Day with a \'How to Draw\' Livestream' },
        { imgSrc: howDrow10, name: 'gear', description: "'Marvel At Home: Here’s How to Stay Connected With Your Favorite Super Heroes" },
        { imgSrc: howDrow6, name: 'gear', description: 'Livestream: How to Draw Captain Marvel' },
        { imgSrc: howDrow11, name: 'gear', description: 'Learn How To Draw Spider-Man in his WEB Costume' },
        { imgSrc: howDrow4, name: 'gear', description: 'How to Draw Wolverine with Todd Nauck' },
    ];

    return (
        <>
            <div className="draw-cards">
                <div className="containerH">
                    <h2>Gear</h2>
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
                    <div className="character-numbering">
                        <ul>
                            <li><span>1</span></li>
                            <li><span>2</span></li>
                            <li><span>3</span></li>
                            <li><span>4</span></li>
                            <li><span>5</span></li>
                            <li><span>...</span></li>
                            <li><span>104</span></li>
                            <li className='next-button'><span>NEXT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
