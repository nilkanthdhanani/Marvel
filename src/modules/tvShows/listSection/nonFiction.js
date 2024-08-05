import React from 'react';
import './listSection.scss';
import { tvShow20, tvShow21, tvShow22, tvShow23, tvShow24, tvShow25, tvShow26 } from '../../../assets/images/shows';

const movies = [
  {
    imgSrc: tvShow20,
    title: 'Stan Lee',
    releaseDate: '2023',
  },
  {
    imgSrc: tvShow21,
    title: 'MPower',
    releaseDate: '2023',
  },
  {
    imgSrc: tvShow22,
    title: 'Voices Rising: The Music of Wakanda Forever',
    releaseDate: '2023',
  },
  {
    imgSrc: tvShow23,
    title: 'Marvel Studios Assembled',
    releaseDate: '2021',
  },
  {
    imgSrc: tvShow24,
    title: 'Marvel\'s Behind the Mask',
    releaseDate: '2021',
  },
  {
    imgSrc: tvShow25,
    title: 'Marvel\'s 616',
    releaseDate: '2020',
  },
  {
    imgSrc: tvShow26,
    title: 'Marvel\'s Hero Project | Season 1',
    releaseDate: '2019',
  },
];

export default function NonFiction() {
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
