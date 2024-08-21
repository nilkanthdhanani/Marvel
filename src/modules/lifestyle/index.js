import React from 'react';
import LifestyleHB from './lifestyleHB';
import LifestyleCards from './lifestyleCards';
import NewsSection from './newsSection';
import Adventure from './adventure';
import DrawVideos from './drawVideos';
import DrawCards from './drawCards';
import Inspiration from './poster/inspiration';
import Recipes from './recipes';
import Cooking from './poster/cooking';
import Crafts from './crafts';
import Cosplay from './poster/cosplay';
import StyleFasion from './style&fasion';
import Gear from './gear';
import Gameplay from './poster/gameplay';
import Roleplay from './roleplay';
import Experiences from './experiences';
import MoreVideos from './drawVideos/moreVideos';
import ShowLike from './showsLike';
import Redeem from '../news/redeem';

export default function LifeStyle() {
    return (
        <>
            <LifestyleHB />
            <LifestyleCards />
            <NewsSection />
            <Adventure />
            <DrawVideos />
            <DrawCards />
            <Inspiration />
            <Recipes />
            <Cooking />
            <Crafts />
            <Cosplay />
            <StyleFasion />
            <Gear />
            <Gameplay />
            <Roleplay />
            <Experiences />
            <MoreVideos />
            <ShowLike />
            <Redeem />
        </>
    )
}
