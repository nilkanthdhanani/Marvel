import React from 'react'
import GameBanner from './movieBanner'
import FirstBox from './firstBox'
import NewsSection from './newsSection'
import ListSection from './listSection'
import Redeem from '../home/redeem/index'

export default function Games() {
    return (
        <>
            <GameBanner />
            <FirstBox />
            <NewsSection />
            <ListSection />
            <Redeem />
        </>
    )
}
