import React, { useState } from 'react';
import './thisWeek.scss';
import { comicBook1, comicBook2, comicBook3, comicBook4, comicBook5, comicBook6, comicBook7, comicBook8, comicBook9, comicBook10, comicBook11, comicBook12, comicBook13, comicBook14, comicBook15, comicBook16, comicBook17, comicBook18, comicBook19, comicBook20, comicBook21, comicBook22, comicBook23, comicBook24, comicBook25, comicBook26, comicBook27, comicBook28, comicBook29, comicBook30 } from '../../../assets/images//imageJS/comicImg';

const comics = [
    { src: comicBook1, title: "X-Force (2024) #1", authors: ["Thorne", "to", "Segovia"] },
    { src: comicBook2, title: "BLACK WIDOW: VENOMOUS (2024) #1", authors: ["Schultz", "Vecchio", "LI"] },
    { src: comicBook3, title: "MS. MARVEL ANNUAL (2024) #1", authors: ["Landy", "Belviso", "Larroca"] },
    { src: comicBook4, title: "MARVEL & DISNEY: WHAT IF…? DONALD DUCK BECAME WOLVERINE #1 (2024) #1", authors: ["Barbieri", "Perissinotto"] },
    { src: comicBook5, title: "Midnight Sons: Blood Hunt (2024) #3", authors: ["Hill", "Peralta", "Lashley"] },
    { src: comicBook6, title: "Spider-Gwen: The Ghost-Spider (2024) #3", authors: ["Phillips", "Mancin", "Brooks"] },
    { src: comicBook7, title: "Hellverine (2024) #3", authors: ["Percy", "Ohta", "Stegman"] },
    { src: comicBook8, title: "Star Wars: Darth Maul - Black, White & Red (2024) #4", authors: ["Pak", "Pizzari", "Gist"] },
    { src: comicBook9, title: "Spider-Man: Shadow of the Green Goblin (2024) #4", authors: ["Dematteis", "Maria", "Siqueira"] },
    { src: comicBook10, title: "X-Men: Heir of Apocalypse (2024) #4", authors: ["Foxe", "Diaz", "Akande"] },
    { src: comicBook11, title: "Blood Hunt (2024) #5", authors: ["Mackay", "Larraz"] },
    { src: comicBook12, title: "Annihilation 2099 (2024) #5", authors: ["Orlando", "Eaglesham", "Bradshaw"] },
    { src: comicBook13, title: "Ultimate Spider-Man (2024) #7", authors: ["Hickman", "Checchetto"] },
    { src: comicBook14, title: "Captain Marvel (2023) #10", authors: ["Wong", "Coleman", "Segovia"] },
    { src: comicBook15, title: "Immortal Thor (2023) #13", authors: ["Ewing", "Bazaldua"] },
    { src: comicBook16, title: "Fantastic Four (2022) #22", authors: ["Thorne", "to", "Segovia"] },
    { src: comicBook17, title: "The Amazing Spider-Man (2022) #54", authors: ["Schultz", "Vecchio", "LI"] },
    { src: comicBook18, title: "Nyx (2024) #1", authors: ["Landy", "Belviso", "Larroca"] },
    { src: comicBook19, title: "MARVEL ZERO [2024] #1 (2024) #1", authors: ["Barbieri", "Perissinotto"] },
    { src: comicBook20, title: "Venomverse Reborn (2024) #2", authors: ["Hill", "Peralta", "Lashley"] },
    { src: comicBook21, title: "Deadpool & Wolverine: Wwiii (2024) #3", authors: ["Phillips", "Mancin", "Brooks"] },
    { src: comicBook22, title: "Venom: Separation Anxiety (2024) #3", authors: ["Percy", "Ohta", "Stegman"] },
    { src: comicBook23, title: "Strange Academy: Blood Hunt (2024) #3", authors: ["Pak", "Pizzari", "Gist"] },
    { src: comicBook24, title: "Wolverine: Blood Hunt (2024) #4", authors: ["Dematteis", "Maria", "Siqueira"] },
    { src: comicBook25, title: "Annihilation 2099 (2024) #4", authors: ["Foxe", "Diaz", "Akande"] },
    { src: comicBook26, title: "Ultimate Black Panther (2024) #6", authors: ["Mackay", "Larraz"] },
    { src: comicBook27, title: "Vengeance of the Moon Knight (2024) #7", authors: ["Orlando", "Eaglesham", "Bradshaw"] },
    { src: comicBook28, title: "Captain America (2023) #11", authors: ["Hickman", "Checchetto"] },
    { src: comicBook29, title: "Star Wars: Darth Vader (2020) #48", authors: ["Wong", "Coleman", "Segovia"] },
    { src: comicBook30, title: "WOLVERINE #88 FACSIMILE EDITION (2024) #88", authors: ["Ewing", "Bazaldua"] }
];

export default function ThisWeek() {
    const [visibleCount, setVisibleCount] = useState(15);

    const loadMoreComics = () => {
        setVisibleCount(prevCount => prevCount + 15);
    };

    return (
        <div className="this-week">
            <div className="container">
                <h2>NEW THIS WEEK</h2>
                <div className="this-week-grid">
                    {comics.slice(0, visibleCount).map((comic, index) => (
                        <div className="this-week-grid-box" key={index}>
                            <img src={comic.src} alt={`comicBook${index + 1}`} />
                            <h3>{comic.title}</h3>
                            {comic.authors.map((author, index) => (
                                <span key={index}>{author}{index < comic.authors.length - 1 ? ', ' : ''}</span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="load-more">
                    <button onClick={loadMoreComics} disabled={visibleCount >= comics.length}>
                        <span>LOAD MORE</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
