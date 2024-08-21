import React, { useState } from 'react';
import './recipes.scss';
import { } from '../../../assets/images/imageJS/moviesImg';
import { recipes1, recipes10, recipes11, recipes12, recipes13, recipes14, recipes15, recipes16, recipes2, recipes3, recipes4, recipes5, recipes6, recipes7, recipes8, recipes9 } from '../../../assets/images/imageJS/lifestyleImg';

export default function Recipes() {
    const [visibleItems, setVisibleItems] = useState(8);

    const charactersComic = [
        { imgSrc: recipes1, name: 'Culture & Lifestyle', description: "Start Your Day Off on the Right Side of Things with This 'Moon Knight'-Inspired Lentil Soup" },
        { imgSrc: recipes2, name: 'Culture & Lifestyle', description: "It's Time to Bake Some Loki-Inspired Miss Minutes Cookies" },
        { imgSrc: recipes3, name: 'Culture & Lifestyle', description: "Whip Up Some Red Bean Mochi to Enjoy with Bucky Barnes" },
        { imgSrc: recipes4, name: 'Culture & Lifestyle', description: "Conjure Up Some WandaVision-Inspired Hex Cakes" },
        { imgSrc: recipes5, name: 'Culture & Lifestyle', description: "It's Time for 'Cooking with Deadpool'" },
        { imgSrc: recipes6, name: 'Culture & Lifestyle', description: "The Universe Keeps Pushing These Cloak and Dagger Black & White Cookies Together" },
        { imgSrc: recipes7, name: 'Culture & Lifestyle', description: "Throw A 'Powers Of A Girl' Science Squad Party for Women's History Month" },
        { imgSrc: recipes8, name: 'Culture & Lifestyle', description: "Watch the Great Video with Eat the Universe Guest Josh Horowitz for A Marvel's 80th Anniversary Meal" },
        { imgSrc: recipes9, name: 'Culture & Lifestyle', description: "Make Marvel Conversation Heart Treats for Your Sweetheart This Valentine's Day" },
        { imgSrc: recipes10, name: 'Culture & Lifestyle', description: "Make A Decadent Fantastic S'mores Bar for The Upcoming Fantastic Four Wedding" },
        { imgSrc: recipes11, name: 'Culture & Lifestyle', description: "Spider-Geddon: Get A Massive Boost with this Spider-Ham's Super Strength Spinach Smoothie" },
        { imgSrc: recipes12, name: 'Culture & Lifestyle', description: "Make These Daredevil Devil’s Food Donuts" },
        { imgSrc: recipes13, name: 'Culture & Lifestyle', description: "Discover The Mad Titan’s Origins In This New Original Novel Then Make These Thanos Infinity Cones In A Snap" },
        { imgSrc: recipes14, name: 'Culture & Lifestyle', description: "Show Off Some Bold Flavors With These Captain Marvel Pies" },
        { imgSrc: recipes15, name: 'Culture & Lifestyle', description: "Fuel Up For The Day And Get Nuts with Tippy-Toe Toast" },
        { imgSrc: recipes16, name: 'Culture & Lifestyle', description: "Punch America Chavez’s Spicy Stars for International Day of the Girl" },
    ];

    const loadMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
    };

    return (
        <>
            <div className="news-section" id="food-recipes">
                <div className="containerH">
                    <h2>Recipes</h2>
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
