import React from 'react';
import './firstBox.scss';
import { drop4img1, drop4img2, drop4img3, drop4img4, drop4img5, drop4img6 } from '../../../assets/images/movies';

const movies = [
    { imgSrc: drop4img1, title: 'Captain America: Brave New World', releaseDate: 'FEB 14, 2025', },
    { imgSrc: drop4img2, title: 'Deadpool & Wolverine', releaseDate: 'JUL 26, 2024', },
    { imgSrc: drop4img3, title: 'The Marvels', releaseDate: '2023', },
    { imgSrc: drop4img4, title: 'Guardians of the Galaxy Vol. 3', releaseDate: '2023', },
    { imgSrc: drop4img5, title: 'Ant-Man and The Wasp: Quantumania', releaseDate: '2023', },
    { imgSrc: drop4img6, title: 'Black Panther: Wakanda Forever', releaseDate: '2022', },
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
