import React from 'react'
import './featured.scss';
import { character1, character2, character3, character4, character5, character6, characterComic1, characterComic2, characterComic3, characterComic4 } from '../../../assets/images/characters';

const charactersComic = [
    { imgSrc: characterComic1, name: 'COMICS', description: 'Blade\'s Powers, Explained' },
    { imgSrc: characterComic2, name: 'COMICS', description: 'Meet the X-Cutioner, an Anti-Mutant Crusader' },
    { imgSrc: characterComic3, name: 'COMICS', description: 'Hawkeye & Black Widow\'s Greatest Team-Ups' },
    { imgSrc: characterComic4, name: 'COMICS', description: 'Meet Spider-Punk, the Punk Rock Spider-Hero from Earth-138' },
];

const featuredCharacters = [
    { imgSrc: character1, name: 'Gambit', description: 'Remy Etienne LeBeau' },
    { imgSrc: character2, name: 'Rogue', description: 'Anna Marie' },
    { imgSrc: character3, name: 'Bishop', description: 'Lucas Bishop' },
    { imgSrc: character4, name: 'Changeling', description: 'Kevin Sydney' },
    { imgSrc: character5, name: 'Jubilee', description: 'Jubilation Lee' },
    { imgSrc: character6, name: 'Sunspot', description: 'Roberto da Costa' },
];

export default function Featured2() {
    return (
        <div className="featured">
            <div className="containerH">
                <h2>CHARACTER SPOTLIGHT</h2>
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
                <div className="featured-main">
                    {featuredCharacters.map((character, index) => (
                        <div className="featured-div" key={index}>
                            <div className="featured-image">
                                <img src={character.imgSrc} alt={character.name} />
                            </div>
                            <div className="featured-text">
                                <h4>{character.name}</h4>
                                <p>{character.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
