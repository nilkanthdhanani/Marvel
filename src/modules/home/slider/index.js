import React, { useEffect, useRef } from 'react';
import './slider.scss';
import { 
    slider1, slider2, slider3, slider4, slider5, slider6, 
    slider7, slider8, slider9, slider10, slider11, slider12, slider13 
} from '../../../assets/images/jpg';

export default function Slider() {
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
                        {[
                            { src: slider1, text: "Avengers: Twilight (2024) #5", year: "2024" },
                            { src: slider2, text: "GIANT-SIZE HULK #1 (2024) #1", year: "2024" },
                            { src: slider3, text: "The Spectacular Spider-Men (2024) #2", year: "2024" },
                            { src: slider4, text: "Ultimate Black Panther (2024) #3", year: "2024" },
                            { src: slider5, text: "Black Widow & Hawkeye (2024) #2", year: "2024" },
                            { src: slider6, text: "Ghost Rider: Final Vengeance (2024) #2", year: "2024" },
                            { src: slider7, text: "Captain Marvel (2023) #7", year: "2024" },
                            { src: slider8, text: "Miles Morales: Spider-Man (2022) #19", year: "2024" },
                            { src: slider9, text: "Spider-Woman (2023) #6", year: "2024" },
                            { src: slider10, text: "Spider-Boy (2023) #6", year: "2024" },
                            { src: slider11, text: "What If…? Venom (2024) #3", year: "2024" },
                            { src: slider12, text: "Star Wars: Mace Windu (2024) #3", year: "2024" },
                            { src: slider13, text: "Beware the Planet of the Apes (2024) #4", year: "2024" }
                        ].map((item, index) => (
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
