import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewsBanner from './newsBanner';
import MovieNews from './newsList/movieNews';
import ComicsNews from './newsList/comicsNews';
import ShowsNews from './newsList/showsNews';
import GamesNews from './newsList/gamesNews';
import SeriesNews from './newsList/seriesNews';
import CultureNews from './newsList/cultureNews';
import PodcastNews from './newsList/podcastNews';
import Redeem from './redeem/indeex';

export default function News() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location]);

  return (
    <>
      <NewsBanner />
      <section id="moviesSec"><MovieNews /></section>
      <section id="comicsSec"><ComicsNews /></section>
      <section id="showsSec"><ShowsNews /></section>
      <section id="gamesSec"><GamesNews /></section>
      <section id="seriesSec"><SeriesNews /></section>
      <section id="cultureSec"><CultureNews /></section>
      <section id="podcastsSec"><PodcastNews /></section>
      <Redeem />
    </>
  );
}
