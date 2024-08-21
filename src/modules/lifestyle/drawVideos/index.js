import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './drawVideos.scss';
import Watch2 from '../../../assets/images/svg/watch2';
import { howDrow1, howDrow2, howDrow3, howDrow4, howDrow5, howDrow6, howDrow7 } from '../../../assets/images/imageJS/lifestyleImg';

const images = [
    { src: howDrow1, title: 'How to Draw Deadpool w/ Mike Hawthorne! | Marvel Comics', paragraph: 'Marvel artist Phil Noto joins us today at 3PM to teach YOU how to draw Black Widow! Tune in and follow along!' },
    { src: howDrow2, title: 'How to Draw Spider-Man | Marvel Comics', paragraph: 'For your viewing pleasure, a previously LIVE drawing lesson from our Creative Director of Themed Entertainment, Brian Crosby!' },
    { src: howDrow3, title: 'How To Draw Groot! | Marvel Comics', paragraph: 'Learn how to draw Groot thanks to our Creative Director of Themed Ent, Brian Crosby!' },
    { src: howDrow4, title: 'How To Draw Wolverine With Todd Nauck | Marvel Comics', paragraph: 'Get a drawing lesson from Todd Nauck!' },
    { src: howDrow5, title: 'How to Draw Cyclops w/Marcus To! | Marvel Comics', paragraph: 'Get ready to get a drawing lesson from comic artist, Marcus To!' },
    { src: howDrow6, title: 'How to Draw Captain Marvel w/ Todd Nauck! | Marvel Comics', paragraph: 'Todd Nauck returns to teach YOU how to draw Captain Marvel! Follow along!' },
    { src: howDrow7, title: 'How to Draw Deadpool w/ Mike Hawthorne! | Marvel Comics', paragraph: 'Learn how to draw The Merc With The Mouth from comic artist, Mike Hawthorne!' },
];

export default function DrawVideos() {
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
        <div className="drawVideos" id="how-draw">
            <div className="containerH">
                <h2>HOW TO DRAW VIDEOS</h2>
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
                            <span>Marvel Live</span>
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
