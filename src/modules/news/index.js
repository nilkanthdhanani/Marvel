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
  const headerHeight = 10;

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto',
          });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <NewsBanner />
      <section id="news-1"><MovieNews /></section>
      <section id="news-2"><ComicsNews /></section>
      <section id="news-3"><ShowsNews /></section>
      <section id="news-4"><GamesNews /></section>
      <section id="news-5"><SeriesNews /></section>
      <section id="news-6"><CultureNews /></section>
      <section id="news-7"><PodcastNews /></section>
      <Redeem />
    </>
  );
}
