import React from 'react';
import './listSection.scss';
import { drop5img6, tvShow47, tvShow48, tvShow49, tvShow50, tvShow51, tvShow52 } from '../../../assets/images/shows';

const movies = [
  {
    imgSrc: drop5img6,
    title: 'LEGO Marvel Avengers: Code Red',
    releaseDate: '2023',
  },
  {
    imgSrc: tvShow47,
    title: 'Marvel\'s Moon Girl and Devil Dinosaur',
    releaseDate: '2023',
  },
  {
    imgSrc: tvShow48,
    title: 'Marvel\'s Spidey and his Amazing Friends',
    releaseDate: '2021',
  },
  {
    imgSrc: tvShow49,
    title: 'Marvel\'s Avengers',
    releaseDate: '2018',
  },
  {
    imgSrc: tvShow50,
    title: 'Marvel\'s Guardians of the Galaxy',
    releaseDate: '2018',
  },
  {
    imgSrc: tvShow51,
    title: 'Marvel Rising',
    releaseDate: '2018',
  },
  {
    imgSrc: tvShow52,
    title: 'Marvel\'s Spider-Man',
    releaseDate: '2018',
  },
];

export default function Animation() {
  return (
    <div className="list-section">
      <div className="containerH">
        <h2>Non-Fiction Disney+</h2>
        <div className="list-section-main">
          <div className="list-section-grid">
            {movies.map((movie, index) => (
              <div className="list-section-grid-div" key={index}>
                <img src={movie.imgSrc} alt={movie.title} />
                <div className="list-section-grid-text">
                  <p>{movie.title}</p>
                  <h4>{movie.releaseDate}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
