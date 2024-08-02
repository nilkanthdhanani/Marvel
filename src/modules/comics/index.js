import React from 'react'
import ComicBanner from './comicBanner'
import Add1 from './advertisement'
import ThisWeek from './thisWeek'
import BestSelling from './bestSelling'
import Add2 from './advertisement/index2'
import NewinMarvel from './bestSelling/index2'
import ReadFree from './bestSelling/index3'

export default function Comics() {
  return (
    <>
      <ComicBanner />
      <Add1 />
      <ThisWeek />
      <BestSelling />
      <Add2 />
      <NewinMarvel />
      <ReadFree />
    </>
  )
}
