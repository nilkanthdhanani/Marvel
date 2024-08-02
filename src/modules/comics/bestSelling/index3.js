import React, { useEffect, useState } from 'react';
import './bestSelling.scss';
import { freeComic1, freeComic2, freeComic3, freeComic4, freeComic5, freeComic6, freeComic7, freeComic8, freeComic9, freeComic10 } from '../../../assets/images/comicImg';
import LeftArrow from '../../../assets/images/svg/leftArrow';
import RightArrow from '../../../assets/images/svg/rightArrow';
import Mulogo from '../../../assets/images/svg/mulogo';

const comics = [
    { src: freeComic1, title: "Chee'ilth (2023) #1", authors: ["Bedard", "Asamiya", "Hitch"] },
    { src: freeComic2, title: "G.O.D.S. First Look Infinity Comic (2023) #1", authors: [""] },
    { src: freeComic3, title: "Loki: Agent of Asgard Infinity Comic (2023) #1", authors: [""] },
    { src: freeComic4, title: "Loki: Agent of Asgard Infinity Comic (2023) #2", authors: ["Bendis", "Buscema", "Dell'otto"] },
    { src: freeComic5, title: "Loki: Agent of Asgard Infinity Comic (2023) #3", authors: ["Dell'otto"] },
    { src: freeComic6, title: "Loki: Agent of Asgard Infinity Comic (2023) #4", authors: ["Bendis", "Mancin", "Brooks"] },
    { src: freeComic7, title: "Loki: Agent of Asgard Infinity Comic (2023) #5", authors: ["Percy", "Ohta", "Stegman"] },
    { src: freeComic8, title: "Loki: Agent of Asgard Infinity Comic (2023) #6", authors: ["Pak", "Pizzari", "Gist"] },
    { src: freeComic9, title: "Loki: Agent of Asgard Infinity Comic (2023) #7", authors: ["Dematteis", "Maria", "Siqueira"] },
    { src: freeComic10, title: "Loki: Agent of Asgard Infinity Comic (2023) #8", authors: ["Foxe", "Diaz", "Akande"] },
];

export default function ReadFree() {
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
                <h2>READ FOR FREE</h2>
                <div className="best-sell-grid">
                    {comics.slice(startIndex, startIndex + comicsToShow).map((comic, index) => (
                        <div className="best-sell-grid-box" key={index}>
                            <img src={comic.src} alt={`freeComic${index + 1}`} />
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
