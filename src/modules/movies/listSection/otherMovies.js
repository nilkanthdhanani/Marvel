import React from 'react';
import './listSection.scss';
import { movieOther1, movieOther2, movieOther3, movieOther4, movieOther5, movieOther6, movieOther7, movieOther8, movieOther9, movieOther10, movieOther11 } from '../../../assets/images/imageJS/moviesImg';

const movies = [
  { imgSrc: movieOther1, title: 'X-Men: Dark Phoenix', releaseDate: '2019', },
  { imgSrc: movieOther2, title: 'Venom', releaseDate: '2018', },
  { imgSrc: movieOther3, title: 'Deadpool 2', releaseDate: '2018', },
  { imgSrc: movieOther4, title: 'Logan', releaseDate: '2017', },
  { imgSrc: movieOther5, title: 'X-Men: Apocalypse', releaseDate: '2016', },
  { imgSrc: movieOther6, title: 'Deadpool', releaseDate: '2016', },
  { imgSrc: movieOther7, title: 'X-Men: Days of Future Past', releaseDate: '2014', },
  { imgSrc: movieOther8, title: 'The Amazing Spider-Man', releaseDate: '2012', },
  { imgSrc: movieOther9, title: 'Spider-Man 3', releaseDate: '2007', },
  { imgSrc: movieOther10, title: 'Spider-Man 2', releaseDate: '2004', },
  { imgSrc: movieOther11, title: 'Spider-Man', releaseDate: '2002', },
];

export default function OtherMovies() {
  return (
    <div className="list-section">
      <div className="containerH">
        <h2>OTHER MOVIES</h2>
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
