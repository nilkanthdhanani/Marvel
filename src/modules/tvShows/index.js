import React from 'react'
import TvShowBanner from './tvshowBanner'
import FirstBox from './firstBox'
import Poster from './poster'
import NewsSection from './newsSection'
import ListSection from './listSection'
import NonFiction from './listSection/nonFiction'
import OnDisney from './listSection/onDisney'
import Hulu from './listSection/hulu'
import Animation from './listSection/animation'

export default function TvShows() {
    return (
        <>
            <TvShowBanner />
            <FirstBox />
            <Poster />
            <NewsSection />
            <ListSection />
            <NonFiction />
            <OnDisney />
            <Hulu />
            <Animation />
        </>
    )
}
