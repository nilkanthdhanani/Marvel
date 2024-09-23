import React from 'react';
import './archive.scss'
import { podcastCard1, podcastCard2, podcastCard3, podcastCard4 } from '../../../assets/images/imageJS/podcastImg';

export default function Archive() {
    return (
        <>
            <div className="archive">
                <div className="containerH">
                    <h2>Podcast Archive</h2>
                    <div className="archive-card">
                        <div className="archive-card-box">
                            <div className="archive-card-img">
                                <img src={podcastCard1} alt="podcastCard1" />
                                <div className="backtext">
                                    <p>Check out the Mighty Marvel Podcast archives for classic interviews with the biggest stars in the comics industry!</p>
                                </div>
                            </div>
                            <h3>The Mighty Marvel Podcast</h3>
                        </div>
                        <div className="archive-card-box">
                            <div className="archive-card-img">
                                <img src={podcastCard2} alt="podcastCard2" />
                                <div className="backtext">
                                    <p>Access the archives on the This Week in Marvel NOW! podcast for vintage interviews with Marvel's top comics creators!</p>
                                </div>
                            </div>
                            <h3>This Week in Marvel NOW!</h3>
                        </div>
                        <div className="archive-card-box">
                            <div className="archive-card-img">
                                <img src={podcastCard3} alt="podcastCard3" />
                                <div className="backtext">
                                    <p>Go behind-the-scenes of Marvel's Agents of S.H.I.E.L.D. with the official podcast series for the hit show on ABC!</p>
                                </div>
                            </div>
                            <h3>This Week In Marvel's Agents Of S.H.I.E.L.D</h3>
                        </div>
                        <div className="archive-card-box">
                            <div className="archive-card-img">
                                <img src={podcastCard4} alt="podcastCard4" />
                                <div className="backtext">
                                    <p>This Week in Marvel's Agent Carter takes you behind the scenes of the ABC series, featuring full episode commentary tracks with the series' creators!</p>
                                </div>
                            </div>
                            <h3>This Week In Marvel's Agent Carter</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
