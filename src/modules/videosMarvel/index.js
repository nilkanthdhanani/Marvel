import React from 'react'
import VideoBanner from './videoBanner'
import FirstBox from './firstBox'
import LatestVideos from './latestVideos'
import TrailerAndExtras from './latestVideos/index2'
import NewsSection from './newsSection'
import VideoSlider from './videoSlider'
import MarvelBecoming from './latestVideos/index3'
import Quickdraw from './latestVideos/index4'
import Redeem from '../home/redeem/index'

export default function Videos() {
    return (
        <>
            <VideoBanner />
            <FirstBox />
            <LatestVideos />
            <TrailerAndExtras />
            <NewsSection />
            <VideoSlider />
            <MarvelBecoming />
            <Quickdraw />
            <Redeem />
        </>
    )
}
