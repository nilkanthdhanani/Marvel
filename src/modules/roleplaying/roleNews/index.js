import React, { useState } from 'react';
import './roleNews.scss';
import { } from '../../../assets/images/imageJS/moviesImg';
import { roleNews1, roleNews10, roleNews11, roleNews12, roleNews2, roleNews3, roleNews4, roleNews5, roleNews6, roleNews7, roleNews8, roleNews9 } from '../../../assets/images/imageJS/roleplayingImg';

export default function RoleNews() {
    const [visibleItems, setVisibleItems] = useState(4);

    const charactersComic = [
        { imgSrc: roleNews1, name: 'Culture & Lifestyle', description: "Marvel Multiverse Role-Playing Game Swings to Gen Con 2024" },
        { imgSrc: roleNews2, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game' Developer Update #6 Covers Gen Con, X-Men Expansion, Deadpool and More" },
        { imgSrc: roleNews3, name: 'Comics', description: "Roll for Initiative with the Merc With A Mouth in the All-New 'Deadpool Role-Plays the Marvel Universe' One-Shot" },
        { imgSrc: roleNews4, name: 'Culture & Lifestyle', description: "Marvel and Glass Cannon Network Join Forces for a Giant-Size Role-Playing Game Special" },
        { imgSrc: roleNews5, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game' Developer Update #5 Presents a Giant-Sized Update" },
        { imgSrc: roleNews6, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game' Developer Update #4 Shines a Spotlight on 'The Cataclysm of Kang'" },
        { imgSrc: roleNews7, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game: Core Rulebook' Is On Sale Now" },
        { imgSrc: roleNews8, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game' Developer Update #3: Behind the Scenes Interview with Matt Forbeck" },
        { imgSrc: roleNews9, name: 'Comics', description: "Learn More About the Playable Heroes from the Marvel Multiverse Role-Playing Game with Their Best Comic Stories" },
        { imgSrc: roleNews10, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game' Announces New Spider-Verse Expansion" },
        { imgSrc: roleNews11, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game' Developer Update #2 Brings New Powers, Combat Changes and More" },
        { imgSrc: roleNews12, name: 'Culture & Lifestyle', description: "The 'Marvel Multiverse Role-Playing Game' Developer Update #1 Introduces New Character Sheet" },
    ];

    const loadMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
    };

    return (
        <>
            <div className="news-section">
                <div className="containerH">
                    <h2>Latest News</h2>
                    <div className="character-comic">
                        {charactersComic.slice(0, visibleItems).map((charactersComic, index) => (
                            <div className="character-comic-box" key={index}>
                                <div className="character-comic-image">
                                    <img src={charactersComic.imgSrc} alt={charactersComic.name} />
                                </div>
                                <div className="character-comic-text">
                                    <span>{charactersComic.name}</span>
                                    <p>{charactersComic.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleItems < charactersComic.length && (
                        <div className="latest-div1-button">
                            <button onClick={loadMoreItems}><div className="inner-cut">LOAD MORE</div></button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
