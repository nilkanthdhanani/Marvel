import React, { useEffect, useState } from 'react';
import './bestSelling.scss';
import { newComic1, newComic2, newComic3, newComic4, newComic5, newComic6, newComic7, newComic8, newComic9, newComic10, promoImg } from '../../../assets/images//imageJS/comicImg';
import LeftArrow from '../../../assets/images/svg/leftArrow';
import RightArrow from '../../../assets/images/svg/rightArrow';
import Mulogo from '../../../assets/images/svg/mulogo';

const comics = [
    { src: newComic1, title: "DEADPOOL VS. THE VARIANT COMIC COVERS (2024) #1", authors: ["Bedard", "Asamiya", "Hitch"] },
    { src: newComic2, title: "Wolverine: Madripoor Knights (2024) #5", authors: [""] },
    { src: newComic3, title: "Wolverine: Madripoor Knights (2024) #4", authors: [""] },
    { src: newComic4, title: "Star Wars: Darth Maul - Black, White & Red (2024) #1", authors: ["Bendis", "Buscema", "Dell'otto"] },
    { src: newComic5, title: "Jackpot & Black Cat (2024) #2", authors: ["Dell'otto"] },
    { src: newComic6, title: "Star Wars: Jango Fett (2024) #2", authors: ["Bendis", "Mancin", "Brooks"] },
    { src: newComic7, title: "Wolverine: Madripoor Knights (2024) #3", authors: ["Percy", "Ohta", "Stegman"] },
    { src: newComic8, title: "Predator: The Last Hunt (2024) #3", authors: ["Pak", "Pizzari", "Gist"] },
    { src: newComic9, title: "Night Thrasher (2024) #3", authors: ["Dematteis", "Maria", "Siqueira"] },
    { src: newComic10, title: "Scarlet Witch & Quicksilver (2024) #3", authors: ["Foxe", "Diaz", "Akande"] },
];

export default function NewinMarvel() {
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
                <h2>NEW IN MARVEL UNLIMITED</h2>
                <div className="promo-div">
                    <div className="promo-main-div">
                        <img src={promoImg} alt="promoImg" />
                        <h3>MARVEL UNLIMITED</h3>
                        <p>Want to read all these digital comics? Get instant access to all these and more!</p>
                        <a href="/unlimited">Join Now</a>
                    </div>
                    <div className="promo-batch">Restrictions Apply.</div>
                </div>
                <div className="best-sell-grid">
                    {comics.slice(startIndex, startIndex + comicsToShow).map((comic, index) => (
                        <div className="best-sell-grid-box" key={index}>
                            <img src={comic.src} alt={`newComic${index + 1}`} />
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
