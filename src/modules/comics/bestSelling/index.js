import React, { useState, useEffect } from 'react';
import './bestSelling.scss';
import { bestComic1, bestComic2, bestComic3, bestComic4, bestComic5, bestComic6, bestComic7, bestComic8, bestComic9, bestComic10, bestComic11, bestComic12, bestComic13, bestComic14, bestComic15 } from '../../../assets/images/comicImg';
import LeftArrow from '../../../assets/images/svg/leftArrow';
import RightArrow from '../../../assets/images/svg/rightArrow';
import Mulogo from '../../../assets/images/svg/mulogo';

const comics = [
    { src: bestComic1, title: "X-Men: Age of Apocalypse One Shot (2005)", authors: ["Bedard", "Asamiya", "Hitch"] },
    { src: bestComic2, title: "Marvel Adventures Fantastic Four (2005)", authors: [""] },
    { src: bestComic3, title: "Avengers (1998)", authors: [""] },
    { src: bestComic4, title: "New Avengers: Illuminati (2006)", authors: ["Bendis", "Buscema", "Dell'otto"] },
    { src: bestComic5, title: "Annihilation: Prologue (2006)", authors: ["Dell'otto"] },
    { src: bestComic6, title: "Ultimate Vision (2005)", authors: ["Bendis", "Mancin", "Brooks"] },
    { src: bestComic7, title: "Civil War: Opening Shot (2006)", authors: ["Percy", "Ohta", "Stegman"] },
    { src: bestComic8, title: "Amazing Spider-Girl (2006)", authors: ["Pak", "Pizzari", "Gist"] },
    { src: bestComic9, title: "Cable (1993)", authors: ["Dematteis", "Maria", "Siqueira"] },
    { src: bestComic10, title: "Deadpool (1997)", authors: ["Foxe", "Diaz", "Akande"] },
    { src: bestComic11, title: "Earth X (1999)", authors: ["Mackay", "Larraz"] },
    { src: bestComic12, title: "Excalibur (1988)", authors: ["Orlando", "Eaglesham", "Bradshaw"] },
    { src: bestComic13, title: "Marvels (1994)", authors: ["Hickman", "Checchetto"] },
    { src: bestComic14, title: "Paradise X (2002)", authors: ["Wong", "Coleman", "Segovia"] },
    { src: bestComic15, title: "Universe X (2000)", authors: ["Ewing", "Bazaldua"] },
];

export default function BestSelling() {
    const [startIndex, setStartIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [comicsToShow, setComicsToShow] = useState(5);

    const updateComicsToShow = () => {
        if (window.innerWidth <= 350) {
            setComicsToShow(1);
        } else if (window.innerWidth <= 576) {
            setComicsToShow(2);
        } else if (window.innerWidth <= 1024) {
            setComicsToShow(3);
        } else {
            setComicsToShow(5);
        }
    };

    useEffect(() => {
        updateComicsToShow();
        window.addEventListener('resize', updateComicsToShow);
        return () => window.removeEventListener('resize', updateComicsToShow);
    }, []);

    const handleRightClick = () => {
        if (startIndex + comicsToShow < comics.length) {
            setAnimate(true);
            setTimeout(() => {
                setStartIndex(startIndex + comicsToShow);
                setAnimate(false);
            }, 500);
        }
    };

    const handleLeftClick = () => {
        if (startIndex > 0) {
            setAnimate(true);
            setTimeout(() => {
                setStartIndex(startIndex - comicsToShow);
                setAnimate(false);
            }, 500);
        }
    };

    return (
        <div className="best-sell">
            <div className={`container ${animate ? 'animate' : ''}`}>
                <h2>NEW THIS WEEK</h2>
                <div className="best-sell-grid">
                    {comics.slice(startIndex, startIndex + comicsToShow).map((comic, index) => (
                        <div className="best-sell-grid-box" key={index}>
                            <img src={comic.src} alt={`bestComic${index + 1}`} />
                            <div className="best-sell-text">
                                <div className="best-sell-text-div">
                                    <h3>{comic.title}</h3>
                                    {comic.authors.map((author, index) => (
                                        <span key={index}>{author}{index < comic.authors.length - 1 ? ', ' : ''}</span>
                                    ))}
                                </div>
                                <div className="mu-logo">
                                    <Mulogo />
                                </div>
                            </div>
                        </div>
                    ))}
                    {startIndex > 0 && (
                        <div className="left-button" onClick={handleLeftClick}>
                            <LeftArrow />
                        </div>
                    )}
                    {startIndex + comicsToShow < comics.length && (
                        <div className="right-button" onClick={handleRightClick}>
                            <RightArrow />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
