import React from 'react';
import './firstBox.scss';
import { drop6img1, drop6img2, drop6img3, drop6img4, drop6img5, drop6img6 } from '../../../assets/images/imageJS/gamesImg';

const movies = [
    { imgSrc: drop6img1, title: 'Marvel Rivals', releaseDate: '', },
    { imgSrc: drop6img2, title: 'Marvel\'s Blade', releaseDate: '', },
    { imgSrc: drop6img3, title: 'Marvel 1943: Rise of Hydra', releaseDate: '2025', },
    { imgSrc: drop6img4, title: 'MARVEL VS. CAPCOM Fighting Collection: Arcade Classics', releaseDate: '2024', },
    { imgSrc: drop6img5, title: 'Marvel\'s Spider-Man 2', releaseDate: '2023', },
    { imgSrc: drop6img6, title: 'MARVEL SNAP', releaseDate: '2022', },
];

export default function FirstBox() {
    return (
        <>
            <div className="first-box">
                <div className="containerH">
                    <div className="first-box-main">
                        <div className="first-box-grid">
                            {movies.map((movie, index) => (
                                <div className="first-box-grid-div" key={index}>
                                    <img src={movie.imgSrc} alt={movie.title} />
                                    <div className="first-box-grid-text">
                                        <p>{movie.title}</p>
                                        <h4>{movie.releaseDate}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
