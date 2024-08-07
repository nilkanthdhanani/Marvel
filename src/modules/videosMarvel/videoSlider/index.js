import React, { useEffect, useRef } from 'react';
import './videoSlider.scss';
import { videoSlide2, videoSlide3, videoSlide5, videoSlide6, videoSlide7, videoSlide9, videoSlide10, videoSlide11, videoSlide12, videoSlide13, videoSlide14, videoSlide19, videoSlide21, videoSlide22, videoSlide23, videoSlide24, videoSlide25, videoSlide26, videoSlide27, videoSlide28, videoSlide29, videoSlide30, videoSlide31, videoSlide32, videoSlide35, videoSlide1, videoSlide4, videoSlide8, videoSlide15, videoSlide16, videoSlide17, videoSlide18, videoSlide20, videoSlide33, videoSlide34 } from '../../../assets/images/videos';

const sliderItems = [
    { src: videoSlide1, text: "Ask Marvel", episode: "50 EPISODES", backtext: "Watch the talent from across the Marvel Universe take on your tough questions in Ask Marvel." },
    { src: videoSlide2, text: "Earth's Mightiest Show", episode: "309 EPISODES", backtext: "The Official Marvel web show for fandom, behind-the-scenes, events, and all of the mightiest stuff in the Marvel Universe!" },
    { src: videoSlide3, text: "Eat the Universe", episode: "51 EPISODES", backtext: "Summon the power of Galactus with Eat the Universe! Join celebrity chef Justin Warner as he welcomes a wide-array of guests to cook dishes inspired by Marvel’s rich history." },
    { src: videoSlide4, text: "Edge of Venomverse", episode: "10 EPISODES", backtext: "A visual feast that works in tandem with the VENOMVERSE comics, dive into the murky world of the most notorious alien symbiote in the Marvel Universe with Edge of Venomverse." },
    { src: videoSlide5, text: "Marvel 101", episode: "274 EPISODES", backtext: "Say hello to the Marvel Universe with Marvel 101! These quick episodes give you a crash course on all the must-know information about all things Marvel!" },
    { src: videoSlide6, text: "Marvel Becoming", episode: "71 EPISODES", backtext: "Join Marvel cosplayers as they share their stories about the inspiration behind their craft with Marvel Becoming! Watch these artisans showcase their Marvel masterpieces!" },
    { src: videoSlide7, text: "Marvel By The Numbers", episode: "7 EPISODES", backtext: "From big money to love triangles to crazy costumes, By The Numbers breaks down your favorite Marvels shows, comics, & films to bring you enlightening graphics & astounding numbers!" },
    { src: videoSlide8, text: "Marvel Culture & Lifestyle", episode: "18 EPISODES", backtext: "Bring the incredible Marvel universe to life in the comfort of your own home!" },
    { src: videoSlide9, text: "Marvel Gaming: Let's Play", episode: "57 EPISODES", backtext: "Get inside the gameplay action as your favorite celebrities engage in interviews while they dive into the latest Marvel video games!" },
    { src: videoSlide10, text: "Marvel Live", episode: "629 EPISODES", backtext: "Dropping you directly into the action at every premiere, convention, and event, Marvel Live is the number one source for minute-by-minute news and updates as they unfold!" },
    { src: videoSlide11, text: "Marvel Make Me A Hero", episode: "86 EPISODES", backtext: "We work with real Marvel fans to create the comic hero of their dreams" },
    { src: videoSlide12, text: "Marvel Minute", episode: "156 EPISODES", backtext: "Start the clock! Hosted by Lorraine Cink, the Marvel Minute offers a rapid fire view of all the latest news from television, movies, comic books, video games, and more!" },
    { src: videoSlide13, text: "Marvel Presents: The World's Greatest Book Club With Paul Scheer", episode: "7 EPISODES", backtext: "Join lifelong lover of Marvel Comics, Paul Scheer and special guests for an inside look into some of Marvel's most-read classics and forgotten treasures from the Marvel vault." },
    { src: videoSlide14, text: "Marvel Quickdraw", episode: "72 EPISODES", backtext: "Go behind-the-scenes of the artistic process with Marvel’s mightiest artists with Quickdraw!" },
    { src: videoSlide15, text: "Marvel TL;DR", episode: "35 EPISODES", backtext: "Presenting an easily digestible summation of the finest tales from across the Marvel Universe, learn all you need to know with Marvel TL;DR. " },
    { src: videoSlide16, text: "Marvel Top 10", episode: "90 EPISODES", backtext: "The team behind Marvel.com presents a litany of lists ranking Marvel characters, moments, stories, costumes, and so much more. Count down the best of the best!" },
    { src: videoSlide17, text: "Marvel Ultimate Comics", episode: "10 EPISODES", backtext: "." },
    { src: videoSlide18, text: "Marvel University", episode: "3 EPISODES", backtext: "Marvel University talks to leading experts to explore the realism behind the characters and storylines from the Marvel Universe." },
    { src: videoSlide19, text: "Marvel's Long Story Short", episode: "8 EPISODES", backtext: "Long Story Short is for comic fans who want to get caught up on the entirety of Marvel history as quickly as possible." },
    { src: videoSlide20, text: "Marvel's Squirrel Girl: The Unbeatable Radio Show", episode: "3 EPISODES", backtext: "This short documentary series takes you into the homes of bands and musicians to check out their Marvel collections, see their studios, and learn about how Marvel influenced them." },
    { src: videoSlide21, text: "Marvel's Squirrel Girl: The Unbeatable Radio Show", episode: "2 EPISODES", backtext: "Squirrel Girl has taken down Thanos and Doctor Doom – but now she faces something far more terrifying… living authentically." },
    { src: videoSlide22, text: "Marvel's Storyboards", episode: "18 EPISODES", backtext: "Storyboards follows Marvel’s Joe Quesada as he drops in on famous storytellers from all walks of life to talk personal origin stories and what drives their passion for storytelling" },
    { src: videoSlide23, text: "Marvel's The Pull List", episode: "125 EPISODES", backtext: "Get ready for New Comic Book Day with Marvel’s Pull List! Host Ryan “Agent M” Penagos gives a preview of what’s going on in the pages of the Marvel Universe." },
    { src: videoSlide24, text: "Marvel's Voices", episode: "32 EPISODES", backtext: "On Marvel’s Voices, host Angélique Roché holds in-depth conversations with diverse storytellers about their creative processes, collaborations, and professional journeys." },
    { src: videoSlide25, text: "Marvel/Method", episode: "", backtext: "The ultimate remix of Marvel fandom!  Join actor and rapper Method Man as he talks with some of his favorite people about life, fandom, and their favorite Marvel comics." },
    { src: videoSlide26, text: "Marvel’s Declassified", episode: "", backtext: "Marvel’s secrets revealed by those who were there! A nonfiction narrative podcast focusing on the rich, dynamic, and unknown history of Marvel Comics." },
    { src: videoSlide27, text: "Marvel’s Wastelanders", episode: "6 EPISODES", backtext: "Wolverine, Black Widow, Star-Lord, Hawkeye, and Doctor Doom will team up to stop Valeria Richards." },
    { src: videoSlide28, text: "The History of Marvel Comics: Black Panther", episode: "2 EPISODES", backtext: "An exploration into the comic book origins of Black Panther via conversations with the creators who have shaped T’Challa’s journey & a celebration of the Afro-Futurism of Wakanda" },
    { src: videoSlide29, text: "The Marvel After Show", episode: "1 EPISODES", backtext: "The official companion podcast for “Marvel’s Cloak & Dagger” Season 2.Listen in and go behind the scenes with stars Olivia Holt and Aubrey Joseph, and the show’s cast and creators!" },
    { src: videoSlide30, text: "The Official Black Panther Podcast", episode: "", backtext: "The groundbreaking success of BLACK PANTHER changed the world. What happened after was unprecedented. This is an intimate look into the making of BLACK PANTHER: WAKANDA FOREVER" },
    { src: videoSlide31, text: "The Official Marvel Podcast", episode: "", backtext: "The Official Marvel Podcast. Celebrating all the latest from across the Marvel universe of movies, TV shows, and comics. Directly from Marvel’s mightiest creators." },
    { src: videoSlide32, text: "This Week in Marvel", episode: "128 EPISODES", backtext: "Hosted by Ryan 'Agent M' Penagos, Lorraine Cink & James Monroe Iglehart, This Week in Marvel is the inside access to all the latest Marvel comics, TV, movies, games, toys & beyond" },
    { src: videoSlide33, text: "THWIP!", episode: "15 EPISODES", backtext: "From the Marvel Archives, THWIP! The Big Marvel Show breaks down the biggest Marvel stories. Hosted by Lorraine Cink and Ryan 'Agent M' Penagos, swing back into the news." },
    { src: videoSlide34, text: "Wolverine: The Long Night", episode: "6 EPISODES", backtext: "Following a string of mysterious deaths in Burns, Alaska, Special Agents Sally Pierce and Tad Marshall arrive to investigate. " },
    { src: videoSlide35, text: "Women of Marvel", episode: "56 EPISODES", backtext: "Hosts Ellie Pyle and Preeti Chhibber are joined by guests for inspiring conversations spotlighting women characters and creators making an impact on the Marvel Universe." },
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
        <div className="videoslid">
            <div className="container2">
                <h2>More Digital Series</h2>
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
