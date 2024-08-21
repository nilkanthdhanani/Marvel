import React, { useEffect, useRef } from 'react';
import './showsLike.scss';
import { cooking, cosplay, gameplay, inspiration } from '../../../assets/images/imageJS/lifestyleImg';

const sliderItems = [
    { src: cosplay, text: "Marvel Becoming", episode: "71 EPISODES", backtext: "Join Marvel cosplayers as they share their stories about the inspiration behind their craft with Marvel Becoming! Watch these artisans showcase their Marvel masterpieces!" },
    { src: cooking, text: "Eat the Universe", episode: "51 EPISODES", backtext: "Summon the power of Galactus with Eat the Universe! Join celebrity chef Justin Warner as he welcomes a wide-array of guests to cook dishes inspired by Marvel’s rich history." },
    { src: inspiration, text: "Marvel Make Me A Hero", episode: "86 EPISODES", backtext: "We work with real Marvel fans to create the comic hero of their dreams" },
    { src: gameplay, text: "Marvel Gaming: Let's Play", episode: "57 EPISODES", backtext: "Get inside the gameplay action as your favorite celebrities engage in interviews while they dive into the latest Marvel video games!" },
];

export default function VideoSlider() {
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
        <div className="showlike">
            <div className="containerH">
                <h2>More Digital Series</h2>
                <div className="showlike-scroll">
                    <div className="showlike-main" ref={sliderMainRef}>
                        {sliderItems.map((item, index) => (
                            <div className="showlike-main-div" key={index}>
                                <div className="showlike-main-flip">
                                    <div className="flip-top">
                                        <img src={item.src} alt={`slider${index + 1}`} />
                                    </div>
                                    <div className="flip-bottom">
                                        <img src={item.src} alt={`slider${index + 1}`} />
                                        <div className="flip-bottom-pera">
                                            <p>{item.backtext}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="showlike-main-text">
                                    <h3>{item.text}</h3>
                                    <h4>{item.episode}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="showlike-scroll-main" ref={scrollMainRef}>
                        <div className="showlike-scroll-track" ref={scrollTrackRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
