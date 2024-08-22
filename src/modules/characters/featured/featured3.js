import React from 'react'
import './featured.scss';
import { character7, character8, character9, character10, character11, character12, character13, character14, character15, character16, character17, character18, character19, character20, character21, character22, character23, character24, character25, character26, character27, character28, character29, character30, character31, character32, character33, character34, character35, character36, character37, character38, character39, character40, character41, character42 } from '../../../assets/images/imageJS/charactersImg';

const featuredCharacters = [
    { imgSrc: character7, name: '3-D Man', description: 'Charles Chandler & Hal Chandler' },
    { imgSrc: character8, name: '3-D Man', description: 'Delroy Garrett, Jr.' },
    { imgSrc: character9, name: '8-Ball', description: 'Jeff Hagees' },
    { imgSrc: character10, name: 'A', description: 'Clair Moore' },
    { imgSrc: character11, name: 'Aamir Khan', description: '' },
    { imgSrc: character12, name: 'Aardwolf', description: 'Chon Li' },
    { imgSrc: character13, name: 'Abdul Alhazred', description: 'Abd-el-Hazred' },
    { imgSrc: character14, name: 'Aberration', description: 'Rana Philips' },
    { imgSrc: character15, name: 'Abigail Brand', description: 'Abigail Thanriaguiaxus' },
    { imgSrc: character16, name: 'Abomination', description: 'Emil Blonsky' },
    { imgSrc: character17, name: 'Dr. Josef Reinstein', description: 'Abraham Erskine' },
    { imgSrc: character18, name: 'Abraxas', description: 'Abraxas' },
    { imgSrc: character19, name: 'Absorbing Man', description: 'Carl "Crusher" Creel' },
    { imgSrc: character20, name: 'Abyss', description: 'Nils Styger' },
    { imgSrc: character21, name: 'Abyss', description: 'Alien, Nova Villain' },
    { imgSrc: character22, name: 'Abyss', description: 'Nils Styger' },
    { imgSrc: character23, name: 'Ace', description: 'G.R.A.M.P.A.' },
    { imgSrc: character24, name: 'Achebe', description: 'Unknown' },
    { imgSrc: character25, name: 'Acrobat', description: 'Carl Zante' },
    { imgSrc: character26, name: 'Acroyear', description: 'Acroyear' },
    { imgSrc: character27, name: 'Adam Destine', description: 'Adam Destine' },
    { imgSrc: character28, name: 'Adam II', description: 'Earth-8206' },
    { imgSrc: character29, name: 'Adam Mann', description: 'Adam Mann' },
    { imgSrc: character30, name: 'Adam Warlock', description: 'MAGUS' },
    { imgSrc: character31, name: 'Adaptoid', description: 'New Enforcers' },
    { imgSrc: character32, name: 'Adaptoid', description: 'Adaptoids' },
    { imgSrc: character33, name: 'Administrator', description: 'Unrevealed' },
    { imgSrc: character34, name: 'Adversary', description: '' },
    { imgSrc: character35, name: 'Aegis', description: 'Lady of All Sorrows' },
    { imgSrc: character36, name: 'Aegis', description: 'Trey Jason Rollins' },
    { imgSrc: character37, name: 'Aero', description: 'Lei Ling' },
    { imgSrc: character38, name: 'Aero', description: 'Melody Guthrie' },
    { imgSrc: character39, name: 'Aftershock', description: 'Allison Dillon' },
    { imgSrc: character40, name: 'Agatha Harkness', description: '' },
    { imgSrc: character41, name: 'Aged Genghis', description: 'Unrevealed' },
    { imgSrc: character42, name: 'Agent', description: 'Daniel Shook' },
];

export default function Featured3() {
    return (
        <div className="featured">
            <div className="containerH">
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
                <div className="news-numbering">
                    <ul>
                        <li><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>...</span></li>
                        <li><span>79</span></li>
                        <li className='next-button'><span>NEXT</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
