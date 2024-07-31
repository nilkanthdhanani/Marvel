import React from 'react'
import NewsBanner from './newsBanner'
import MovieNews from './newsList/movieNews'
import ComicsNews from './newsList/comicsNews'
import ShowsNews from './newsList/showsNews'
import GamesNews from './newsList/gamesNews'
import SeriesNews from './newsList/seriesNews'
import CultureNews from './newsList/cultureNews'
import PodcastNews from './newsList/podcastNews'
import Redeem from './redeem/indeex'

export default function News() {
    return (
        <>
            <NewsBanner />
            <MovieNews />
            <ComicsNews />
            <ShowsNews />
            <GamesNews />
            <SeriesNews />
            <CultureNews />
            <PodcastNews />
            <Redeem />
        </>
    )
}
