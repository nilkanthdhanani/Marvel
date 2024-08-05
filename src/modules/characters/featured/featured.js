import React from 'react'
import './featured.scss';
import { drop3img1, drop3img2, drop3img3, drop3img4, drop3img5, drop3img6 } from '../../../assets/images/characters';

const featuredCharacters = [
    { imgSrc: drop3img1, name: 'Magneto', description: 'Max Eisenhardt' },
    { imgSrc: drop3img2, name: 'Cyclops', description: 'Scott Summers' },
    { imgSrc: drop3img3, name: 'Phoenix', description: 'Jean Grey-Summers' },
    { imgSrc: drop3img4, name: 'Wolverine', description: 'James Howlett / Logan' },
    { imgSrc: drop3img5, name: 'Beast', description: 'Henry Phillip "Hank" McCoy' },
    { imgSrc: drop3img6, name: 'Storm', description: 'Ororo Munroe' },
];

export default function Featured() {
    return (
        <div className="featured">
            <div className="containerH">
                <h2>FEATURED CHARACTERS</h2>
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
