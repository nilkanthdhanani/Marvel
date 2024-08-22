import React from 'react';
import './roleplayingVideo.scss';

export default function RoleplayingVideo() {
    return (
        <>
            <div className="role-video">
                <div className="containerH">
                    <div className="role-video-text">
                        <div className="role-video-head">
                            <h2>Marvel Multiverse Role-Playing Game</h2>
                        </div>
                        <p>Take on the roles of Marvel's most famous Super Heroes—or create your own—to fight some of the most dangerous Super Villains in the Marvel Universe!</p>
                        <p>Featuring the All-New, All-Different d616 System, the MARVEL MULTIVERSE ROLE-PLAYING GAME gives players the chance to explore their own corner of the multiverse. </p>
                        <p>All you need is the book, three six-sided dice, and a group of friends. What're you waiting for? Start your adventure today!</p>
                    </div>
                    <div className="role-video-main">
                        <iframe src="https://www.youtube.com/embed/I6WLq5s04l8?si=zi12LRZ662eTCrtm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
