import React from 'react';
import PodcastHB from './podcastHB/indes';
import PodcastSlide from './podcastSlide';
import PodcastNews from './podcastNews';
import LatestEpisode from './latestEpisode';
import Archive from './archive';
import PodcastSlide2 from './podcastSlide/podcastSlide2';

export default function Podcasts() {
    return (
        <>
            <PodcastHB />
            <PodcastSlide />
            <PodcastNews />
            <LatestEpisode />
            <Archive />
            <PodcastSlide2 />
        </>
    )
}
