import React, { useEffect, useRef } from 'react';
import './slider.scss';
import { drop2img1, drop2img2, drop2img5, drop2img4, drop2img3, drop2img6, drop2img7, drop2img8, drop2img9, drop2img10, drop2img11, drop2img12, drop2img13, drop2img14 } from '../../../assets/images/imageJS/homeImg';

const sliderItems = [
    { src: drop2img2, text: "Deadpool & Wolverine: Wwiii (2024) #3", year: "2024" },
    { src: drop2img1, text: "Nyx (2024) #1", year: "2024" },
    { src: drop2img7, text: "Wolverine: Blood Hunt (2024) #4", year: "2024" },
    { src: drop2img5, text: "Strange Academy: Blood Hunt (2024) #3", year: "2024" },
    { src: drop2img4, text: "Vengeance of the Moon Knight (2024) #7", year: "2024" },
    { src: drop2img3, text: "Ultimate Black Panther (2024) #6", year: "2024" },
    { src: drop2img8, text: "Captain America (2023) #11", year: "2024" },
    { src: drop2img9, text: "Annihilation 2099 (2024) #4", year: "2024" },
    { src: drop2img10, text: "Venom: Separation Anxiety (2024) #3", year: "2024" },
    { src: drop2img11, text: "Venomverse Reborn (2024) #2", year: "2024" },
    { src: drop2img12, text: "MARVEL ZERO [2024] #1 (2024) #1", year: "2024" },
    { src: drop2img13, text: "WOLVERINE #88 FACSIMILE EDITION (2024) #88", year: "2024" },
    { src: drop2img6, text: "Star Wars: Inquisitors (2024) #1", year: "2024" },
    { src: drop2img14, text: "Star Wars: Darth Vader (2020) #48", year: "2024" }
];

export default function Slider2() {
    const scrollTrackRef = useRef(null);
    const sliderMainRef = useRef(null);
    const scrollMainRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!scrollMainRef.current) return;
            const rect = scrollMainRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const maxScrollLeft = sliderMainRef.current.scrollWidth - sliderMainRef.current.clientWidth;
            const scrollPercentage = Math.max(0, Math.min(1, x / rect.width));
            const newScrollLeft = maxScrollLeft * scrollPercentage;
            sliderMainRef.current.scrollLeft = newScrollLeft;

            const maxTrackLeft = rect.width - scrollTrackRef.current.offsetWidth;
            const trackLeft = maxTrackLeft * scrollPercentage;
            scrollTrackRef.current.style.left = `${Math.max(0, Math.min(maxTrackLeft, trackLeft))}px`;
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        const handleMouseDown = () => {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        };

        const handleSliderScroll = () => {
            if (!scrollMainRef.current || !scrollTrackRef.current || !sliderMainRef.current) return;
            const maxScrollLeft = sliderMainRef.current.scrollWidth - sliderMainRef.current.clientWidth;
            const scrollPercentage = sliderMainRef.current.scrollLeft / maxScrollLeft;

            const rect = scrollMainRef.current.getBoundingClientRect();
            const maxTrackLeft = rect.width - scrollTrackRef.current.offsetWidth;
            const trackLeft = maxTrackLeft * scrollPercentage;
            scrollTrackRef.current.style.left = `${Math.max(0, Math.min(maxTrackLeft, trackLeft))}px`;
        };

        const scrollMainElement = scrollMainRef.current;
        const sliderMainElement = sliderMainRef.current;

        sliderMainElement.addEventListener('scroll', handleSliderScroll);
        scrollMainElement.addEventListener('mousedown', handleMouseDown);

        return () => {
            if (scrollMainElement) {
                scrollMainElement.removeEventListener('mousedown', handleMouseDown);
            }
            if (sliderMainElement) {
                sliderMainElement.removeEventListener('scroll', handleSliderScroll);
            }
        };
    }, []);

    return (
        <div className="slider">
            <div className="container2">
                <div className="slider-scroll">
                    <div className="slider-main" ref={sliderMainRef}>
                        {sliderItems.map((item, index) => (
                            <div className="slider-main-div" key={index}>
                                <img src={item.src} alt={`slider${index + 1}`} />
                                <div className="slider-main-text">
                                    <p>{item.text}</p>
                                    <h4>{item.year}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="slider-scroll-main" ref={scrollMainRef}>
                        <div className="slider-scroll-track" ref={scrollTrackRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
