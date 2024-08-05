import React from 'react';
import './listSection.scss';
import { tvShow27, tvShow28, tvShow29, tvShow30, tvShow31, tvShow32, tvShow33, tvShow34, tvShow35 } from '../../../assets/images/shows';

const movies = [
  {
    imgSrc: tvShow27,
    title: 'Marvel\'s Daredevil',
    releaseDate: '2018',
  },
  {
    imgSrc: tvShow28,
    title: 'Marvel\'s the Defenders',
    releaseDate: '2017',
  },
  {
    imgSrc: tvShow29,
    title: 'Marvel\'s Iron Fist',
    releaseDate: '2018',
  },
  {
    imgSrc: tvShow30,
    title: 'Marvel\'s Jessica Jones',
    releaseDate: '2019',
  },
  {
    imgSrc: tvShow31,
    title: 'Marvel\'s Luke Cage',
    releaseDate: '2018',
  },
  {
    imgSrc: tvShow32,
    title: 'Marvel\'s The Punisher',
    releaseDate: '2019',
  },
  {
    imgSrc: tvShow33,
    title: 'Marvel\'s Agent Carter',
    releaseDate: '2016',
  },
  {
    imgSrc: tvShow34,
    title: 'Marvel\'s Agents of S.H.I.E.L.D.',
    releaseDate: '2020',
  },
  {
    imgSrc: tvShow35,
    title: 'Marvel\'s Inhumans',
    releaseDate: '2017',
  },
];

export default function OnDisney() {
  return (
    <div className="list-section">
      <div className="containerH">
        <h2>Marvel Series on D+</h2>
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
