import React, { useEffect, useRef } from 'react';
import './roleSlider.scss';
import { roleIcon1, roleIcon10, roleIcon2, roleIcon3, roleIcon4, roleIcon5 } from '../../../assets/images/imageJS/roleplayingImg';

const sliderItems = [
    { src: roleIcon1, text: '' }, 
    { src: roleIcon2, text: '' }, 
    { src: roleIcon3, text: '' }, 
    { src: roleIcon4, text: '' }, 
    { src: roleIcon5, text: '' }, 
    { src: roleIcon10, text: '' }
];

export default function RoleSlider3() {
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
        <div className="role-slider">
            <div className="container2">
                <div className="role-slider-scroll">
                    <div className="role-slider-main" ref={sliderMainRef}>
                        {sliderItems.map((item, index) => (
                            <div className="role-slider-main-div" key={index}>
                                <img src={item.src} alt={`slider${index + 1}`} />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="role-slider-scroll-main" ref={scrollMainRef}>
                        <div className="role-slider-scroll-track" ref={scrollTrackRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}