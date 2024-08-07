import React, { useState } from 'react';
import './listSection.scss';
import { drop6img1, drop6img2, drop6img3, drop6img4, drop6img5, drop6img6, games1, games10, games11, games12, games13, games14, games15, games16, games17, games18, games19, games2, games3, games4, games5, games6, games7, games8, games9 } from '../../../assets/images/imageJS/gamesImg';

const movies = [
  { imgSrc: games1, title: 'Marvel\'s Wolverine', releaseDate: '', },
  { imgSrc: drop6img2, title: 'Marvel\'s Blade', releaseDate: '', },
  { imgSrc: drop6img1, title: 'Marvel Rivals', releaseDate: '', },
  { imgSrc: drop6img3, title: 'Marvel 1943: Rise of Hydra', releaseDate: '2025', },
  { imgSrc: drop6img4, title: 'MARVEL vs. CAPCOM Fighting Collection: Arcade Classics', releaseDate: '2024', },
  { imgSrc: drop6img5, title: 'Marvel\'s Spider-Man 2', releaseDate: '2023', },
  { imgSrc: games2, title: 'Marvel\'s Midnight Suns', releaseDate: '2022', },
  { imgSrc: drop6img6, title: 'MARVEL SNAP', releaseDate: '2022', },
  { imgSrc: games3, title: 'Marvel\'s Guardians of the Galaxy', releaseDate: '2021', },
  { imgSrc: games4, title: 'MARVEL Future Revolution', releaseDate: '2021', },
  { imgSrc: games5, title: 'Fortnite', releaseDate: '2020', },
  { imgSrc: games6, title: 'Marvel\'s Spider-Man: Miles Morales', releaseDate: '2020', },
  { imgSrc: games7, title: 'Marvel\'s Avengers', releaseDate: '2020', },
  { imgSrc: games8, title: 'Marvel\'s Iron Man VR', releaseDate: '2020', },
  { imgSrc: games9, title: 'LEGO® Marvel Collection Bundle', releaseDate: '2019', },
  { imgSrc: games10, title: 'Marvel Ultimate Alliance 3: The Black Order', releaseDate: '2019', },
  { imgSrc: games11, title: 'Marvel\'s Spider-Man', releaseDate: '2018', },
  { imgSrc: games12, title: 'MARVEL Powers United VR', releaseDate: '2018', },
  { imgSrc: games13, title: 'Marvel Contest of Champions', releaseDate: '', },
  { imgSrc: games14, title: 'MARVEL Future Fight', releaseDate: '', },
  { imgSrc: games15, title: 'MARVEL Strike Force', releaseDate: '2018', },
  { imgSrc: games16, title: 'MARVEL Puzzle Quest', releaseDate: '', },
  { imgSrc: games17, title: 'Marvel vs. Capcom: Infinite', releaseDate: '', },
  { imgSrc: games18, title: 'Marvel\'s Guardians of the Galaxy: The Telltale Series', releaseDate: '', },
  { imgSrc: games19, title: 'Marvel Pinball', releaseDate: '', },
];

export default function ListSection() {
  const [visibleCount, setVisibleCount] = useState(24);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="game-section">
      <div className="containerH">
        <h2>All Games</h2>
        <div className="game-section-main">
          <div className="game-section-grid">
            {movies.slice(0, visibleCount).map((movie, index) => (
              <div className="game-section-grid-div" key={index}>
                <img src={movie.imgSrc} alt={movie.title} />
                <div className="game-section-grid-text">
                  <p>{movie.title}</p>
                  <h4>{movie.releaseDate}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {visibleCount < movies.length && (
          <div className="latest-div1-button">
            <button onClick={loadMore}>
              <div className="inner-cut">LOAD MORE</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
