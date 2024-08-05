import React, { useState } from 'react';
import './listSection.scss';
import { drop4img1, drop4img2, drop4img3, drop4img4, drop4img5, drop4img6, movie1, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie2, movie20, movie21, movie22, movie23, movie24, movie25, movie26, movie27, movie28, movie29, movie3, movie30, movie31, movie32, movie33, movie34, movie4, movie5, movie6, movie7, movie8, movie9 } from '../../../assets/images/movies';

const movies = [
  {
    imgSrc: movie1,
    title: 'Avengers: Secret Wars',
    releaseDate: 'MAY 7, 2027',
  },
  {
    imgSrc: movie2,
    title: 'Avengers: The Kang Dynasty',
    releaseDate: 'MAY 1, 2026',
  },
  {
    imgSrc: movie3,
    title: 'Blade',
    releaseDate: 'NOV 7, 2025',
  },
  {
    imgSrc: movie4,
    title: 'Fantastic Four',
    releaseDate: 'JUL 25, 2025',
  },
  {
    imgSrc: movie5,
    title: 'Thunderbolts',
    releaseDate: 'MAY 2, 2025',
  },
  {
    imgSrc: drop4img1,
    title: 'Captain America: Brave New World',
    releaseDate: 'FEB 14, 2025',
  },
  {
    imgSrc: drop4img2,
    title: 'Deadpool & Wolverine',
    releaseDate: 'JUL 26, 2024',
  },
  {
    imgSrc: drop4img3,
    title: 'The Marvels',
    releaseDate: '2023',
  },
  {
    imgSrc: drop4img4,
    title: 'Guardians of the Galaxy Vol. 3',
    releaseDate: '2023',
  },
  {
    imgSrc: drop4img5,
    title: 'Ant-Man and The Wasp: Quantumania',
    releaseDate: '2023',
  },
  {
    imgSrc: drop4img6,
    title: 'Black Panther: Wakanda Forever',
    releaseDate: '2022',
  },
  {
    imgSrc: movie6,
    title: 'Thor: Love and Thunder',
    releaseDate: '2022',
  },
  {
    imgSrc: movie7,
    title: 'Doctor Strange in the Multiverse of Madness',
    releaseDate: '2022',
  },
  {
    imgSrc: movie8,
    title: 'Spider-Man: No Way Home',
    releaseDate: '2021',
  },
  {
    imgSrc: movie9,
    title: 'Eternals',
    releaseDate: '2021',
  },
  {
    imgSrc: movie10,
    title: 'Shang-Chi and The Legend of The Ten Rings',
    releaseDate: '2021',
  },
  {
    imgSrc: movie11,
    title: 'Black Widow',
    releaseDate: '2021',
  },
  {
    imgSrc: movie12,
    title: 'Spider-Man: Far From Home',
    releaseDate: '2019',
  },
  {
    imgSrc: movie13,
    title: 'Avengers: Endgame',
    releaseDate: '2019',
  },
  {
    imgSrc: movie14,
    title: 'Captain Marvel',
    releaseDate: '2019',
  },
  {
    imgSrc: movie15,
    title: 'Ant-Man and The Wasp',
    releaseDate: '2018',
  },
  {
    imgSrc: movie16,
    title: 'Avengers: Infinity War',
    releaseDate: '2018',
  },
  {
    imgSrc: movie17,
    title: 'Black Panther',
    releaseDate: '2018',
  },
  {
    imgSrc: movie18,
    title: 'Thor: Ragnarok',
    releaseDate: '2017',
  },
  {
    imgSrc: movie19,
    title: 'Spider-Man: Homecoming',
    releaseDate: '2017',
  },
  {
    imgSrc: movie20,
    title: 'Guardians of the Galaxy Vol. 2',
    releaseDate: '2017',
  },
  {
    imgSrc: movie21,
    title: 'Doctor Strange',
    releaseDate: '2016',
  },
  {
    imgSrc: movie22,
    title: 'Captain America: Civil War',
    releaseDate: '2016',
  },
  {
    imgSrc: movie23,
    title: 'Ant-Man',
    releaseDate: '2015',
  },
  {
    imgSrc: movie24,
    title: 'Avengers: Age of Ultron',
    releaseDate: '2015',
  },
  {
    imgSrc: movie25,
    title: 'Guardians of the Galaxy',
    releaseDate: '2014',
  },
  {
    imgSrc: movie26,
    title: 'Captain America: The Winter Soldier',
    releaseDate: '2014',
  },
  {
    imgSrc: movie27,
    title: 'Thor: The Dark World',
    releaseDate: '2013',
  },
  {
    imgSrc: movie28,
    title: 'Iron Man 3',
    releaseDate: '2013',
  },
  {
    imgSrc: movie29,
    title: 'The Avengers',
    releaseDate: '2012',
  },
  {
    imgSrc: movie30,
    title: 'Captain America: The First Avengers',
    releaseDate: '2011',
  },
  {
    imgSrc: movie31,
    title: 'Thor',
    releaseDate: '2011',
  },
  {
    imgSrc: movie32,
    title: 'Iron Man 2',
    releaseDate: '2010',
  },
  {
    imgSrc: movie33,
    title: 'The Incredible Hulk',
    releaseDate: '2008',
  },
  {
    imgSrc: movie34,
    title: 'Iron Man',
    releaseDate: '2008',
  },
];

export default function ListSection() {
  const [visibleCount, setVisibleCount] = useState(30);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="list-section">
      <div className="containerH">
        <h2>Marvel Movies</h2>
        <div className="list-section-main">
          <div className="list-section-grid">
            {movies.slice(0, visibleCount).map((movie, index) => (
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
        <div className="latest-div1-button">
          <button onClick={loadMore} disabled={visibleCount >= movies.length}>
            <div className="inner-cut">{visibleCount >= movies.length ? 'LOAD MORE' : 'LOAD MORE'}</div>
          </button>
        </div>
      </div>
    </div>
  );
}