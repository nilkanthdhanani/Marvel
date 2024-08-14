import React from 'react';
import './sevenDays.scss';
import { sevenPoster1, sevenPoster2, sevenPoster3, sevenPoster4, sevenPoster5, sevenPosterM1, sevenPosterM2, sevenPosterM3, sevenPosterM4, sevenPosterM5 } from '../../../assets/images/imageJS/unlimitedImg';

const postersData = [
  {
    img: sevenPoster1,
    imgM: sevenPosterM1,
    alt: 'sevenPoster1',
    text: (<>
      Stay up to speed with the latest available Marvel stories across <strong>characters, series,</strong> and <strong>creators</strong>!
    </>),
    className: 'poster1',
  },
  {
    img: sevenPoster2,
    imgM: sevenPosterM2,
    alt: 'sevenPoster2',
    text: (<>
      Introducing <strong>Infinity Comics</strong>! Read all-new in-universe stories, told in <strong>vertical format</strong>!
    </>),
    className: 'poster2',
  },
  {
    img: sevenPoster3,
    imgM: sevenPosterM3,
    alt: 'sevenPoster3',
    text: (<>
      From <strong>Reading Guides to recommended runs</strong>, find starting points based on your favorites.
    </>),
    className: 'poster3',
  },
  {
    img: sevenPoster4,
    imgM: sevenPosterM4,
    alt: 'sevenPoster4',
    text: (<>
      Classic and newer issues <strong>added every week</strong> of Marvel's must-read series, as soon as 3 months after they hit shelves!
    </>),
    className: 'poster4',
  },
  {
    img: sevenPoster5,
    imgM: sevenPosterM5,
    alt: 'sevenPoster5',
    text: (<>
      For <strong>iPhone<sup>®</sup>, iPad<sup>®</sup>, Android devices<sup>™</sup></strong> and web.
    </>),
    className: 'poster5',
  },
];

export default function SevenDays() {
  return (
    <div className="seven-days">
      <div className="containerH">
        {postersData.map((poster, index) => (
          <div className="seven-days-div" key={index}>
            <img src={poster.img} alt={poster.alt} />
            <img src={poster.imgM} alt={poster.alt} />
            <div className={`seven-days-text ${poster.className}`}>
              <p>{poster.text}</p>
              <div className="banner-content-button3">
                <button>
                  <span>TRY 7 DAYS FREE</span>
                  <div className="inner-cut"></div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
