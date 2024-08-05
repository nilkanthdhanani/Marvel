import React from 'react'
import MovieBanner from './movieBanner'
import FirstBox from './firstBox'
import Poster from './poster'
import NewsSection from './newsSection'
import ListSection from './listSection'
import OtherMovies from './listSection/otherMovies'

export default function TvShows() {
    return (
        <>
            <MovieBanner />
            <FirstBox />
            <Poster />
            <NewsSection />
            <ListSection />
            <OtherMovies />
        </>
    )
}
