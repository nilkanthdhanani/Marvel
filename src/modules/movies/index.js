import React from 'react'
import MovieBanner from './movieBanner'
import FirstBox from './firstBox'
import Poster from './poster'
import NewsSection from './newsSection'
import ListSection from './listSection'
import OtherMovies from './listSection/otherMovies'
import Redeem from '../home/redeem/indeex'

export default function Movies() {
    return (
        <>
            <MovieBanner />
            <FirstBox />
            <Poster />
            <NewsSection />
            <ListSection />
            <OtherMovies />
            <Redeem />
        </>
    )
}
