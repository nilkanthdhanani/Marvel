import React from 'react';
import './listSection.scss';
import { drop5img2, tvShow36, tvShow37, tvShow38, tvShow39, tvShow40, tvShow41, tvShow42, tvShow43, tvShow44, tvShow45, tvShow46 } from '../../../assets/images/shows';

const movies = [
  { imgSrc: drop5img2, title: 'Marvel\'s Hit-Monkey Season 2', releaseDate: 'JUL 15, 2024', },
  { imgSrc: tvShow36, title: 'Marvel\'s Hit-Monkey Season 1', releaseDate: '2021', },
  { imgSrc: tvShow37, title: 'Marvel\'s M.O.D.O.K.', releaseDate: '2021', },
  { imgSrc: tvShow38, title: 'Marvel\'s Runaways | Season 3', releaseDate: '2019', },
  { imgSrc: tvShow39, title: 'Legion | Season 3', releaseDate: '2019', },
  { imgSrc: tvShow40, title: 'Marvel\'s Cloak & Dagger | Season 2', releaseDate: '2019', },
  { imgSrc: tvShow41, title: 'Marvel\'s Runaways | Season 2', releaseDate: '2018', },
  { imgSrc: tvShow42, title: 'The Gifted | Season 2', releaseDate: '2018', },
  { imgSrc: tvShow43, title: 'Marvel\'s Cloak & Dagger | Season 1', releaseDate: '2018', },
  { imgSrc: tvShow44, title: 'Legion | Season 2', releaseDate: '2018', },
  { imgSrc: tvShow45, title: 'Marvel\'s Runaways | Season 1', releaseDate: '2017', },
  { imgSrc: tvShow46, title: 'Legion | Season 1', releaseDate: '2017', },
];

export default function Hulu() {
  return (
    <div className="list-section">
      <div className="containerH">
        <h2>Marvel on Hulu</h2>
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
