import React from 'react';
import './drawCards.scss';
import { } from '../../../assets/images/imageJS/moviesImg';
import { howDrow10, howDrow11, howDrow12, howDrow13, howDrow14, howDrow15, howDrow2, howDrow3, howDrow4, howDrow6, howDrow8, howDrow9 } from '../../../assets/images/imageJS/lifestyleImg';

export default function DrawCards() {
    const charactersComic = [
        { imgSrc: howDrow8, name: 'Culture & Lifestyle', description: 'Drawing Desk unveils step-by-step drawing lessons featuring Marvel Super Heroes' },
        { imgSrc: howDrow9, name: 'Culture & Lifestyle', description: 'Celebrate National Comic Book Day with a \'How to Draw\' Livestream' },
        { imgSrc: howDrow10, name: 'Culture & Lifestyle', description: "'Marvel At Home: Here’s How to Stay Connected With Your Favorite Super Heroes" },
        { imgSrc: howDrow6, name: 'Culture & Lifestyle', description: 'Livestream: How to Draw Captain Marvel' },
        { imgSrc: howDrow11, name: 'Culture & Lifestyle', description: 'Learn How To Draw Spider-Man in his WEB Costume' },
        { imgSrc: howDrow4, name: 'Culture & Lifestyle', description: 'How to Draw Wolverine with Todd Nauck' },
        { imgSrc: howDrow3, name: 'Culture & Lifestyle', description: 'Livestream: How to Draw Groot' },
        { imgSrc: howDrow12, name: 'Culture & Lifestyle', description: 'Learn How to Draw Captain America With Marvel Studios’ Ryan Meinerding' },
        { imgSrc: howDrow2, name: 'Culture & Lifestyle', description: 'Livestream: How to Draw Spider-Man' },
        { imgSrc: howDrow13, name: 'Culture & Lifestyle', description: 'Learn How to Draw Deadpool with Skottie Young' },
        { imgSrc: howDrow14, name: 'Culture & Lifestyle', description: "How to Draw the Old School-Style Rocket from 'Guardians of the Galaxy: Mission Breakout!'" },
        { imgSrc: howDrow15, name: 'Culture & Lifestyle', description: "How to Draw the Bunnies from 'Guardians of the Galaxy: Mission Breakout!'" },
    ];

    return (
        <>
            <div className="draw-cards">
                <div className="containerH">
                    <h2>How to Draw</h2>
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
                </div>
            </div>
        </>
    )
}
