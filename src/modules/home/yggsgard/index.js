import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './yggsgard.scss';
import { videoImg1, videoImg10, videoImg2, videoImg3, videoImg4, videoImg5, videoImg6, videoImg7, videoImg8, videoImg9 } from '../../../assets/images/homeImg';
import Watch2 from '../../../assets/images/svg/watch2';

const images = [
    { src: videoImg1, title: 'Marvel Rivals | Map Reveal | YGGSGARD - ‘WORLD TREE & KINGDOM OF GODS’' },
    { src: videoImg2, title: 'How to Color a Comic Book Cover' },
    { src: videoImg3, title: 'X-Men: From The Ashes | Official Trailer | Marvel Comics' },
    { src: videoImg4, title: 'Women Of Marvel #1 | Official Trailer | Marvel Comics' },
    { src: videoImg5, title: 'MARVEL\'S BLOOD HUNT | Official Event Trailer | Marvel Comics' },
    { src: videoImg6, title: 'The Marvels | Behind the Powers of The Marvels' },
    { src: videoImg7, title: 'The Marvels | Flerkittens: The Real and Digital Kittens' },
    { src: videoImg8, title: 'Ultimate X-Men #1 | Official Trailer | Marvel Comics' },
    { src: videoImg9, title: 'Marvel\'s Voices: Legends #1 | Official Trailer | Marvel Comics' },
    { src: videoImg10, title: 'Marvel Studios’ Echo | Maya x Daredevil Fight Scene | Disney+ & Hulu' }
];

export default function Yggsgard() {
    const [mainImage, setMainImage] = useState(images[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const imageDivRef = useRef(null);
    const sideDivRef = useRef(null);
    const minWidth = 768;
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
                            <h2>Marvel Rivals | Map Reveal | YGGSGARD - ‘WORLD TREE & KINGDOM OF GODS’</h2>
                            <p>After the Timestream Entanglement, Asgard fused with Yggdrasill, the World Tree that connects all Ten Realms. Now Loki, the God of Mischief, uses his tricks to seize control and build his new kingdom: Yggsgard in Marvel Rivals!</p>
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
