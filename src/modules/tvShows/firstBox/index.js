import React from 'react';
import './firsrBox.scss';
import { drop5img1, drop5img2, drop5img3, drop5img4, drop5img5, drop5img6 } from '../../../assets/images/shows';

const movies = [
    {
        imgSrc: drop5img1,
        title: 'Agatha All Along',
        releaseDate: 'SEP 18, 2024',
    },
    {
        imgSrc: drop5img2,
        title: 'Marvel\'s Hit-Monkey Season 2',
        releaseDate: 'JUL 15, 2024',
    },
    {
        imgSrc: drop5img3,
        title: 'X-Men \'97',
        releaseDate: '2024',
    },
    {
        imgSrc: drop5img4,
        title: 'Echo',
        releaseDate: '2024',
    },
    {
        imgSrc: drop5img5,
        title: 'What If...? | Season 2',
        releaseDate: '2023',
    },
    {
        imgSrc: drop5img6,
        title: 'LEGO Marvel Avengers: Code Red',
        releaseDate: '2023',
    },
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
