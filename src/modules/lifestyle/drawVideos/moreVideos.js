import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './drawVideos.scss';
import Watch2 from '../../../assets/images/svg/watch2';
import { moreVideo1, moreVideo10, moreVideo11, moreVideo12, moreVideo13, moreVideo14, moreVideo15, moreVideo16, moreVideo17, moreVideo18, moreVideo2, moreVideo3, moreVideo4, moreVideo5, moreVideo6, moreVideo7, moreVideo8, moreVideo9 } from '../../../assets/images/imageJS/lifestyleImg';

const images = [
    { src: moreVideo1, title: 'Team Liquid X Marvel Spider-Man 1978 Collection', paragraph: 'The Liquid x Marvel Spider-Man 1978 capsule pays homage across 14 distinct pieces of streetwear — including high-quality hoodies, short sleeve tees, long sleeves, and a nifty beanie. tl.gg/marvel' },
    { src: moreVideo2, title: "DIY Captain Marvel's Star of Hala!", paragraph: "Your Marvel Mission was to create Captain Marvel's Star of Hala using only safe household items! Lorraine Cink highlights a few of her favorites while making her own Star of Hala!" },
    { src: moreVideo3, title: 'MARVEL ZOMBIES Transformation Time-Lapse!', paragraph: 'Warning: This gets pretty gross.' },
    { src: moreVideo4, title: "Cake Boss Ralph Sculpts Super Heroes for Marvel's 80th Birthday!", paragraph: "Ralph from Carlo's Bakery dropped by Marvel Headquarters to create some sculpted chocolate Marvel characters for our 80th anniversary!" },
    { src: moreVideo5, title: 'National Donut Day: Captain Marvel & Flerken Donuts!', paragraph: 'Get ready to get a drawing lesson from comic artist, Marcus To!' },
    { src: moreVideo6, title: 'The X-Men Celebrate National Pancake Day! | Marvel Lifestyle', paragraph: 'Todd Nauck returns to teach YOU how to draw Captain Marvel! Follow along!' },
    { src: moreVideo7, title: "How to Make a Deadpool Ornament for the Holidays", paragraph: "Step-by-step instructions on how to add some Merc with a Mouth flair to your holiday celebrations."},
    { src: moreVideo8, title: "Hell’s Kitchen is heating up with these Daredevil Devil’s Food Donuts", paragraph: "" },
    { src: moreVideo9, title: "Transform yourself into the fearsome feline Tigra for Halloween!", paragraph: "It’s the purr-fect costume to get you in the Halloween spirit!" },
    { src: moreVideo10, title: "WE. ARE. VENOM. For Halloween!", paragraph: "Unleash your inner symbiote with this Venom-inspired Halloween tutorial!"},
    { src: moreVideo11, title: "How to make candy apples inspired by Venom for Halloween!", paragraph: "Get ready for a wickedly sweet Halloween with this symbiote-inspired treat!" },
    { src: moreVideo12, title: "Transform into the miraculous Dazzler for Halloween with this tutorial!", paragraph: "This Halloween, dazzle your friends and foes with this Dazzler makeup tutorial!"},
    { src: moreVideo13, title: "Make toast inspired by Tippy-Toe from Marvel Rising: Secret Warriors!", paragraph: "Get nuts and fuel up for the day with Tippy-Toe Toast, inspired by Squirrel Girl's fuzzy sidekick in 'Marvel Rising: Secret Warriors!' Catch Marvel Rising: Secret Wars this Sunday, October 14 on Disney XD or stream it instantly on DisneyNOW!" },
    { src: moreVideo14, title: "How To: DIY Punisher-Inspired Makeup", paragraph: ""},
    { src: moreVideo15, title: "The Science of Groot -- The Science of Marvel", paragraph: "Groot is the loveable tree-like alien from Guardians of the Galaxy, but how can Groot like regeneration be possible? Let’s explore in Marvel Science! Find the Guardians of the Galaxy in “Infinity Countdown Prime” on sale February 21, 2018!"},
    { src: moreVideo16, title: "The Science of Star-Lord -- The Science of Marvel", paragraph: "Star-Lord is the jet setting leader of the Guardians of the Galaxy, but how could Star-Lord actually survive in Space? Let’s explore in Marvel Science! Find the Guardians of the Galaxy in “Infinity Countdown Prime” on sale February 21, 2018!"},
    { src: moreVideo17, title: "Mjolnir Candy Apples | Thor: Ragnarok", paragraph: "You’re definitely worthy of these Mjolnir Candy Apples – now make them yourself! Get the recipe here: http://bit.ly/MjolnirApples. Recipe and design via Koalipops (https://www.youtube.com/Koalipops)."},
    { src: moreVideo18, title: "Hela-Inspired Cupcakes | Thor: Ragnarok", paragraph: "Hela may not be the sweetest goddess in the universe, but these cupcakes are! Watch as Koalipops (https://www.youtube.com/user/Koalipops) creates this delicious treat in Hela’s image. See the steps to make them yourself: http://bit.ly/HelaCupcakes"},
];

export default function MoreVideos() {
    const [mainImage, setMainImage] = useState(images[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const imageDivRef = useRef(null);
    const sideDivRef = useRef(null);
    const minWidth = 769;
    const maxWidth = 1240;

    const handleImageClick = (image, index) => {
        setMainImage(image);
        setActiveIndex(index);
    };

    const updateHeight = () => {
        if (window.innerWidth >= minWidth && window.innerWidth < maxWidth) {
            if (imageDivRef.current && sideDivRef.current) {
                sideDivRef.current.style.height = `${imageDivRef.current.clientHeight}px`;
            }
        } else {
            if (sideDivRef.current) {
                sideDivRef.current.style.height = 'auto';
            }
        }
    };

    useLayoutEffect(() => {
        updateHeight();
    }, [mainImage]);

    useEffect(() => {
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const handleImageLoad = () => {
        updateHeight();
    };

    return (
        <div className="drawVideos">
            <div className="containerH">
                <h2>MORE VIDEOS</h2>
                <div className="drawVideos-main">
                    <div className="drawVideos-div1">
                        <div className="drawVideos-div1-image" ref={imageDivRef}>
                            <div className="watch-svg">
                                <Watch2 />
                            </div>
                            <div className="time-pera">
                                <p>46:00</p>
                            </div>
                            <img src={mainImage.src} alt="main" onLoad={handleImageLoad} />
                        </div>
                        <div className="drawVideos-content">
                            <span>Marvel Culture & Lifestyle</span>
                            <h3>{mainImage.title}</h3>
                            <p>{mainImage.paragraph}</p>
                        </div>
                    </div>
                    <div className="drawVideos-div2" ref={sideDivRef}>
                        <div className="drawVideos-div2-slider">
                            {images.map((image, index) => (
                                <div className="responsive-div" key={index}>
                                    <div
                                        className={`side-image ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => handleImageClick(image, index)}>
                                        <div className="side-image-text">
                                            <div className="watch-svg">
                                                <Watch2 />
                                            </div>
                                            <h4 className="image-title">{image.title}</h4>
                                        </div>
                                        <img src={image.src} alt={`side-${index}`} onLoad={handleImageLoad} />
                                    </div>
                                    <h4 className="image-title outside">{image.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
