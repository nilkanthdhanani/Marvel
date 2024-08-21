import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './yggsgard.scss';
import { videoImg1, videoImg10, videoImg2, videoImg3, videoImg4, videoImg5, videoImg6, videoImg7, videoImg8, videoImg9 } from '../../../assets/images/imageJS/homeImg';
import Watch2 from '../../../assets/images/svg/watch2';

const images = [
    { src: videoImg1, title: 'Marvel Rivals | Map Reveal | YGGSGARD - ‘WORLD TREE & KINGDOM OF GODS’', paragraph: 'After the Timestream Entanglement, Asgard fused with Yggdrasill, the World Tree that connects all Ten Realms. Now Loki, the God of Mischief, uses his tricks to seize control and build his new kingdom: Yggsgard in Marvel Rivals!' },
    { src: videoImg2, title: 'How to Color a Comic Book Cover', paragraph: 'Learn how to draw Marvel-style and bring these M&MS to life with color artist Rachelle Rosenberg, presented by M&Ms Chocolate. https://mms.com/ #ad' },
    { src: videoImg3, title: 'X-Men: From The Ashes | Official Trailer | Marvel Comics', paragraph: 'Following the Krakoan Age, Jed MacKay and Ryan Stegman’s X-MEN, Gail Simone and David Marquez’s UNCANNY X-MEN, and Eve L. Ewing and Carmen Carnero’s EXCEPTIONAL X-MEN will be the core ongoing series in an all-new era of mutant storytelling.' },
    { src: videoImg4, title: 'Women Of Marvel #1 | Official Trailer | Marvel Comics', paragraph: 'Marvel’s most powerful heroines take center stage in a mighty Marvel Comics one-shot anthology: Women Of Marvel #1, arriving February 28!' },
    { src: videoImg5, title: 'MARVEL\'S BLOOD HUNT | Official Event Trailer | Marvel Comics', paragraph: 'The undead lay siege to the Marvel Universe! Sink your teeth into the new Marvel Comics crossover event ‘Blood Hunt,’ coming this May' },
    { src: videoImg6, title: 'The Marvels | Behind the Powers of The Marvels', paragraph: 'Get an inside look at Captain Marvel, Ms. Marvel, and Monica Rambeau’s powers with VFX Supervisor Tara DeMarco. Marvel Studios’ The Marvels is now streaming on Disney+.' },
    { src: videoImg7, title: 'The Marvels | Flerkittens: The Real and Digital Kittens', paragraph: '' },
    { src: videoImg8, title: 'Ultimate X-Men #1 | Official Trailer | Marvel Comics', paragraph: 'It’s not always easy to face your darkest fears. This March, writer and artist Peach Momoko brings the Children of the Atom to ‘Ultimate X-Men’ #1, arriving March 6.' },
    { src: videoImg9, title: 'Marvel\'s Voices: Legends #1 | Official Trailer | Marvel Comics', paragraph: "'Marvel's Voices: Legends' brings you the world outside your window in real time, featuring spotlights on Sam Wilson, Misty Knight, Elijah Bradley, and more! Pick up the anthology special, on sale tomorrow!" },
    { src: videoImg10, title: 'Marvel Studios’ Echo | Maya x Daredevil Fight Scene | Disney+ & Hulu', paragraph: 'Get a behind-the-scenes look at the showdown between Maya & Daredevil with Stunt Coordinator and 2nd Unit Director Marc Scizak. All episodes of Marvel Studios’ Echo are now streaming on Disney+ & Hulu. Set your Disney+ profile to TV-MA to stream.' },
];

export default function Yggsgard() {
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
        <div className="yggsgard">
            <div className="containerH">
                <div className="yggsgard-main">
                    <div className="yggsgard-div1">
                        <div className="yggsgard-div1-image" ref={imageDivRef}>
                            <div className="watch-svg">
                                <Watch2 />
                            </div>
                            <div className="time-pera">
                                <p>0:48</p>
                            </div>
                            <img src={mainImage.src} alt="main" onLoad={handleImageLoad} />
                        </div>
                        <div className="yggsgard-content">
                            <span>Trailers & Extras</span>
                            <h2>{mainImage.title}</h2>
                            <p>{mainImage.paragraph}</p>
                        </div>
                    </div>
                    <div className="yggsgard-div2" ref={sideDivRef}>
                        <div className="yggsgard-div2-slider">
                            {images.map((image, index) => (
                                <div className="responsive-div" key={index}>
                                    <div
                                        className={`side-image ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => handleImageClick(image, index)}>
                                        <div className="side-image-text">
                                            <div className="watch-svg">
                                                <Watch2 />
                                            </div>
                                            <h3 className="image-title">{image.title}</h3>
                                        </div>
                                        <img src={image.src} alt={`side-${index}`} onLoad={handleImageLoad} />
                                    </div>
                                    <h3 className="image-title outside">{image.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
