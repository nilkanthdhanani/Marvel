import React from 'react';
import './latestEpisode.scss';
import MusicBox1 from './musicbox/musicBox1';
import MusicBox2 from './musicbox/musicBox2';
import MusicBox3 from './musicbox/musicBox3';
import MusicBox4 from './musicbox/musicBox4';
import MusicBox5 from './musicbox/musicBox5';
import MusicBox6 from './musicbox/musicBox6';
import MusicBox7 from './musicbox/musicBox7';
import MusicBox8 from './musicbox/musicBox8';
import MusicList1 from './musiclist/musicList1';

export default function LatestEpisode() {
    return (
        <>
            <div className="latest-episode">
                <div className="containerH">
                    <h2>Latest Episodes</h2>
                    <div className="latest-episode-grid">
                        <MusicBox1 />
                        <MusicBox2 />
                        <MusicBox3 />
                        <MusicBox4 />
                        <MusicBox5 />
                        <MusicBox6 />
                        <MusicBox7 />
                        <MusicBox8 />
                        <MusicList1 />
                    </div>
                </div>
            </div>
        </>
    )
}
