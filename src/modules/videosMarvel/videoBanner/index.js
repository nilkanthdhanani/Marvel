import React from 'react'
import './videoBanner.scss';
import Watch2 from '../../../assets/images/svg/watch2';

export default function VideoBanner() {
    return (
        <>
            <div className="videoBanner">
                <div className="videoBanner-head">
                    <h1>MARVEL RIVALS MAP REVEAL!</h1>
                    <p>YGGSGARD - 'World Tree & Kingdom of Gods'</p>
                    <div className="watch-svg">
                        <Watch2 />
                    </div>
                </div>
            </div>
        </>
    )
}
