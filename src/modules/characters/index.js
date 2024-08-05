import React from 'react';
import CharactersBanner from './charactersBanner';
import Featured from './featured/featured';
import Featured2 from './featured/featured2';
import Featured3 from './featured/featured3';
import CharactersList from './charactersList';
import Redeem from '../home/redeem/indeex';

export default function Characters() {
    return (
        <>
            <CharactersBanner />
            <Featured />
            <Featured2 />
            <CharactersList />
            <Featured3 />
            <Redeem/>
        </>
    )
}
