import React, { useState } from 'react';
import './latest.scss';
import BorderTop from '../../../assets/images/svg/borderTop';
import { drop1img1, drop1img2, drop1img3, drop1img4, drop1img5, latest1, latest10, latest11, latest12, latest13, latest14, latest15, latest16, latest17, latest18, latest19, latest2, latest20, latest21, latest22, latest23, latest24, latest25, latest26, latest27, latest28, latest29, latest3, latest30, latest31, latest32, latest4, latest5, latest6, latest7, latest8, latest9 } from '../../../assets/images/jpg';
import Insider from '../../../assets/images/svg/insider';
import Watch from '../../../assets/images/svg/watch';

const items = [
    { img: latest1, title: 'LIVE EVENTS', description: 'SDCC 2024: All the News from Marvel Studios’ Hall H Panel', time: '' },
    { img: latest2, title: 'MARVEL LIVE', description: 'Every MCU Reveal at SDCC 2024: Fantastic Four, Avengers: Doomsday & More! | Official Recap', time: '3 HOURS AGO', videoTime: '17:10' },
    { img: latest3, title: 'LIVE EVENTS', description: 'SDCC 2024: Robert Downey Jr. to Play Doom in the Russo Brothers’ ‘Avengers: Doomsday’', time: '6 HOURS AGO' },
    { img: latest4, title: 'LIVE EVENTS', description: 'SDCC 2024: ‘The Fantastic Four: First Steps’ Flies into Hall H', time: '6 HOURS AGO' },
    { img: latest5, title: 'MARVEL LIVE', description: 'Deadpool Corps Sing Madonna\'s Like a Prayer | Hall H @ SDCC 2024', time: '7 HOURS AGO', videoTime: '1:56' },
    { img: latest6, title: 'MARVEL LIVE', description: 'Meet The Fantastic Four: First Steps Cast and MORE at SDCC 2024!', time: '8 HOURS AGO', videoTime: '6:49' },
    { img: latest7, title: 'COMICS', description: 'SDCC 2024: New \'Laura Kinney: Wolverine\' Comic Series Announced', time: '10 HOURS AGO' },
    { img: latest8, title: 'LIVE EVENTS', description: 'SDCC 2024: Marvel Studios’ ‘Thunderbolts*’ Cast Teases the Film in Hall H', time: '1 DAY AGO' },
    { img: latest9, title: 'LIVE EVENTS', description: 'SDCC 2024: ‘Captain America: Brave New World’ Takes the Stage at Marvel’s Hall H Panel', time: '1 DAY AGO' },
    { img: latest10, title: 'MARVEL LIVE', description: 'The Best Marvel Cosplay at SDCC 2024!', time: '1 DAY AGO', videoTime: '4:21' },
    { img: latest11, title: 'Comics', description: 'SDCC 2024: Marvel Announces New \'Psylocke\' Solo Comic Series', time: '1 DAY AGO' },
    { img: latest12, title: 'TRAILERS & EXTRAS', description: 'X-Men: From The Ashes | Official Launch Trailer | Marvel Comics', time: '1 DAY AGO', videoTime: '4:21' },
    { img: latest13, title: 'MARVEL LIVE', description: 'LEGO x Marvel: From Ideation to Creation at SDCC 2024', time: '1 DAY AGO', videoTime: '4:21' },
    { img: latest14, title: 'MOVIES', description: 'How Dogpool Went From ‘Britain’s Ugliest Dog’ to ‘Deadpool & Wolverine’ Star', time: '1 DAY AGO' },
    { img: latest15, title: 'COMICS', description: 'SDCC 2024: Coming to Marvel Comics in 2025... One World Under Doom', time: '2 DAY AGO' },
    { img: latest16, title: 'COMICS', description: 'SDCC 2024: \'West Coast Avengers\' Recruits Ultron', time: '2 DAY AGO' },
    { img: latest17, title: 'COMICS', description: 'SDCC 2024: \'8 Deaths of Spider-Man\' Saga Debuts a Doom-Inspired Suit', time: '2 DAY AGO' },
    { img: latest18, title: 'TRAILERS & EXTRAS', description: 'Wolverine: Revenge | Official Trailer | Marvel Comics', time: '2 DAY AGO' },
    { img: latest19, title: 'COMICS', description: 'SDCC 2024: Dogpool & Beastly Buddies Infinity Comics Head to Marvel Unlimited', time: '2 DAY AGO' },
    { img: latest20, title: 'COMICS', description: 'SDCC 2024: \'Ultimate Universe: One Year In\' Sets the Stage for Year Two', time: '2 DAY AGO' },
    { img: latest21, title: 'TRAILERS & EXTRAS', description: 'Venom War | Official Trailer | Marvel Comics', time: '2 DAY AGO' },
    { img: latest22, title: 'COMICS', description: 'SDCC 2024: Marvel Announces an All-New \'TVA\' Comic Series', time: '2 DAY AGO' },
    { img: latest23, title: 'LIVE EVENTS', description: 'SDCC 2024: ‘Deadpool & Wolverine’ Surprises Hall H with the Ultimate Celebration of Life', time: '2 DAY AGO' },
    { img: latest24, title: 'COMICS', description: 'SDCC 2024: Marvel Comics Reveals the New Deadpool', time: '2 DAY AGO' },
    { img: latest25, title: 'MOVIES', description: '‘Deadpool & Wolverine’ Director Shawn Levy Breaks Down the Film’s Odd-Couple Influences', time: '2 DAY AGO' },
    { img: latest26, title: 'MOVIES', description: 'Meet Cassandra Nova: How Emma Corrin Brought Their ‘Deadpool & Wolverine’ Villain to Life', time: '2 DAY AGO' },
    { img: latest27, title: 'LIVE EVENTS', description: '‘Marvel Contest of Champions’ and Google Play Team Up to Take Rewards to New Heights at San Diego Comic-Con 2024', time: '2 DAY AGO' },
    { img: latest28, title: 'MARVEL LIVE', description: 'Experience GooglePlay\'s Wheel of Champions at SDCC 2024', time: '2 DAY AGO' },
    { img: latest29, title: 'MOVIES', description: 'Ryan Reynolds, Hugh Jackman Open Up About Their ‘Deadpool & Wolverine’ Reunion', time: '2 DAY AGO' },
    { img: latest30, title: 'MARVEL LIVE', description: 'Exclusive Look at the LEGO Marvel Booth at SDCC 2024', time: '2 DAY AGO' },
    { img: latest31, title: 'TRAILERS & EXTRAS', description: 'Marvel Rivals | Character Reveal Teaser | Jeff the Land Shark: Four-Legged Friend', time: '3 DAY AGO' },
    { img: latest32, title: 'COMICS', description: 'SDCC 2024: Lucasfilm & Marvel Comics Reveal the Finale Series of Phase III of the High Republic Era', time: '3 DAY AGO' },
];

export default function Latest() {
    const [visibleCount, setVisibleCount] = useState(8);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 8, items.length));
    };

    return (
        <div className="latest">
            <div className="containerH">
                <div className="latest-main">
                    <div className="latest-div1">
                        <h2>THE LATEST</h2>
                        {items.slice(0, visibleCount).map((item, index) => (
                            <div className="latest-div-content" key={index}>
                                <div className="latest-div-image">
                                    {item.videoTime && <div className="watch-svg"><Watch /></div>}
                                    {item.videoTime && <div className="time-pera"><p>{item.videoTime}</p></div>}
                                    <img src={item.img} alt={`latest${index + 1}`} />
                                </div>
                                <div className="latest-div-content-box">
                                    <div className="ldcb-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        {item.time && <h5>{item.time}</h5>}
                                    </div>
                                    {index === 1 || index === 11 || index === 13 || index === 17 || index === 21 || index === 26 || index === 29 || index === 30 ? (
                                        <div className="ldcb-insider">
                                            <Insider />
                                            <span>Earn Points, Get Rewards</span>
                                            <a href="/">Join NOW!</a>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                        <div className="latest-div1-button">
                            <button onClick={handleLoadMore} disabled={visibleCount >= items.length}>
                                <div className="inner-cut">LOAD MORE</div>
                            </button>
                        </div>
                    </div>
                    <div className="latest-div2">
                        <div className="border-top">
                            <BorderTop />
                        </div>
                        <div className="hype-box">
                            <h3>THE HYPE BOX</h3>
                            <p>Can’t-miss news and updates from across the Marvel Universe!</p>
                        </div>
                        <div className="extra-boxes">
                            <div className="extra-box">
                                <div className="extra-box-image">
                                    <img src={drop1img1} alt="drop1img1" />
                                </div>
                                <div className="extra-box-text">
                                    <h4>MOVIES</h4>
                                    <p>‘Deadpool & Wolverine’ Makes Its Worldwide Premiere in New York City</p>
                                </div>
                            </div>
                            <div className="extra-box">
                                <div className="extra-box-image">
                                    <img src={drop1img3} alt="drop1img3" />
                                </div>
                                <div className="extra-box-text">
                                    <h4>MOVIES</h4>
                                    <p>Sam Wilson Takes Flight in First 'Captain America: Brave New World' Trailer</p>
                                </div>
                            </div>
                            <div className="extra-box">
                                <div className="extra-box-image">
                                    <img src={drop1img4} alt="drop1img4" />
                                </div>
                                <div className="extra-box-text">
                                    <h4>TV SHOWS</h4>
                                    <p>Kathryn Hahn’s Agatha Harkness Returns in 'Agatha All Along' Trailer</p>
                                </div>
                            </div>
                            <div className="extra-box">
                                <div className="extra-box-image">
                                    <img src={drop1img2} alt="drop1img2" />
                                </div>
                                <div className="extra-box-text">
                                    <h4>COMICS</h4>
                                    <p>July 24's New Marvel Comics: The Full List</p>
                                </div>
                            </div>
                            <div className="extra-box">
                                <div className="extra-box-image">
                                    <img src={drop1img5} alt="drop1img5" />
                                </div>
                                <div className="extra-box-text">
                                    <h4>PODCASTS</h4>
                                    <p>See the X-Men Comics That Inspired ‘X-Men ‘97’</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom">
                            <BorderTop />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
