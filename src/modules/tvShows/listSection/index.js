import React from 'react';
import './listSection.scss';
import { tvShow1, tvShow2, tvShow3, tvShow4, tvShow5, tvShow6, tvShow7, tvShow8, tvShow9, tvShow10, tvShow11, tvShow12, tvShow13, tvShow14, tvShow15, tvShow16, tvShow17, tvShow18, tvShow19, drop5img1, drop5img3, drop5img4, drop5img5 } from '../../../assets/images/shows';

const movies = [
  { imgSrc: tvShow1, title: 'Marvel Zombies', releaseDate: '', },
  { imgSrc: tvShow2, title: 'Spider-Man: Freshman Year', releaseDate: '', },
  { imgSrc: tvShow3, title: 'Ironheart', releaseDate: '2025', },
  { imgSrc: tvShow4, title: 'Daredevil: Born Again', releaseDate: 'MAR 2025', },
  { imgSrc: drop5img1, title: 'Agatha All Along', releaseDate: 'SEP 18, 2024', },
  { imgSrc: drop5img3, title: 'X-Men \'97', releaseDate: '2024', },
  { imgSrc: drop5img4, title: 'Echo', releaseDate: '2024', },
  { imgSrc: drop5img5, title: 'What If...? | Season 2', releaseDate: '2023', },
  { imgSrc: tvShow5, title: 'Loki | Season 2', releaseDate: '2023', },
  { imgSrc: tvShow6, title: 'I Am Groot | Season 2', releaseDate: '2023', },
  { imgSrc: tvShow7, title: 'Secret Invasion', releaseDate: '2023', },
  { imgSrc: tvShow8, title: 'The Guardians of the Galaxy Holiday Special', releaseDate: '2022', },
  { imgSrc: tvShow9, title: 'Werewolf By Night', releaseDate: '2022', },
  { imgSrc: tvShow10, title: 'She-Hulk: Attorney-at-Law', releaseDate: '2022', },
  { imgSrc: tvShow11, title: 'I Am Groot | Season 1', releaseDate: '2022', },
  { imgSrc: tvShow12, title: 'Ms. Marvel', releaseDate: '2022', },
  { imgSrc: tvShow13, title: 'Moon Knight', releaseDate: '2022', },
  { imgSrc: tvShow14, title: 'Hawkeye', releaseDate: '2021', },
  { imgSrc: tvShow15, title: 'What If...? | Season 1', releaseDate: '2021', },
  { imgSrc: tvShow16, title: 'Loki | Season 1', releaseDate: '2021', },
  { imgSrc: tvShow17, title: 'The Falcon and The Winter Soldier', releaseDate: '2021', },
  { imgSrc: tvShow18, title: 'WandaVision', releaseDate: '2021', },
  { imgSrc: tvShow19, title: 'Marvel Studieos: Legends', releaseDate: '2021', },
];

export default function ListSection() {

  return (
    <div className="list-section">
      <div className="containerH">
        <h2>Marvel on Disney+</h2>
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