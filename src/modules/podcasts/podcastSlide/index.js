import React, { useEffect, useRef } from 'react';
import './podcastSlide.scss';
import { podcastSlide1, podcastSlide10, podcastSlide2, podcastSlide3, podcastSlide4, podcastSlide5, podcastSlide6, podcastSlide7, podcastSlide8, podcastSlide9 } from '../../../assets/images/imageJS/podcastImg';

const sliderItems = [
    { src: podcastSlide1, episode: "", text: "The Official Marvel Podcast", backtext: 'The Official Marvel Podcast. Celebrating all the latest from across the Marvel universe of movies, TV shows, and comics. Directly from Marvel’s mightiest creators.'},
    { src: podcastSlide2, episode: "128 EPISODES", text: "This Week in Marvel", backtext: 'Hosted by Ryan "Agent M" Penagos, Lorraine Cink & James Monroe Iglehart, This Week in Marvel is the inside access to all the latest Marvel comics, TV, movies, games, toys & beyond'},
    { src: podcastSlide3, episode: "125 EPISODES", text: "Marvel’s The Pull List", backtext: 'Get ready for New Comic Book Day with Marvel’s Pull List! Host Ryan “Agent M” Penagos gives a preview of what’s going on in the pages of the Marvel Universe.'},
    { src: podcastSlide4, episode: "56 EPISODES", text: "Women of Marvel", backtext: 'Hosts Ellie Pyle and Preeti Chhibber are joined by guests for inspiring conversations spotlighting women characters and creators making an impact on the Marvel Universe.'},
    { src: podcastSlide5, episode: "32 EPISODES", text: "Marvel’s Voices", backtext: 'On Marvel’s Voices, host Angélique Roché holds in-depth conversations with diverse storytellers about their creative processes, collaborations, and professional journeys. '},
    { src: podcastSlide6, episode: "6 EPISODES", text: "Marvel’s Wastelanders", backtext: 'Wolverine, Black Widow, Star-Lord, Hawkeye, and Doctor Doom will team up to stop Valeria Richards.'},
    { src: podcastSlide7, episode: "", text: "The Official Black Panther Podcast", backtext: 'The groundbreaking success of BLACK PANTHER changed the world. What happened after was unprecedented. This is an intimate look into the making of BLACK PANTHER: WAKANDA FOREVER'},
    { src: podcastSlide8, episode: "2 EPISODES", text: "Marvel's Squirrel Girl: The Unbeatable Radio Show", backtext: 'Squirrel Girl has taken down Thanos and Doctor Doom – but now she faces something far more terrifying… living authentically. '},
    { src: podcastSlide9, episode: "2 EPISODES", text: "The History of Marvel Comics: Black Panther", backtext: 'An exploration into the comic book origins of Black Panther via conversations with the creators who have shaped T’Challa’s journey & a celebration of the Afro-Futurism of Wakanda'},
    { src: podcastSlide10, episode: "", text: "Marvel/Method", backtext: 'The ultimate remix of Marvel fandom!  Join actor and rapper Method Man as he talks with some of his favorite people about life, fandom, and their favorite Marvel comics.'},
];

export default function PodcastSlide() {
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
        <div className="videoslid">
            <div className="containerH">
                <h2>Featured Podcasts</h2>
                <div className="videoslid-scroll">
                    <div className="videoslid-main" ref={sliderMainRef}>
                        {sliderItems.map((item, index) => (
                            <div className="videoslid-main-div" key={index}>
                                <div className="videoslid-main-flip">
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
                                <div className="videoslid-main-text">
                                    <h3>{item.text}</h3>
                                    <h4>{item.episode}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="videoslid-scroll-main" ref={scrollMainRef}>
                        <div className="videoslid-scroll-track" ref={scrollTrackRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
