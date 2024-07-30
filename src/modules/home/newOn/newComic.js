import React from 'react'
import './newOn.scss';

export default function NewComics() {
    return (
        <>
            <div className="newOn">
                <div id='second' className="newOn-two"></div>
                <div id='newComic' className="newOn-one">
                    <div className="container">
                        <div className="newOn-one-div">
                            <h3>ON SALE 7/24</h3>
                            <h2>NEW COMICS THIS WEEK</h2>
                            <p>Check out the newest Marvel comics coming out this week!</p>
                            <div className="newOn-one-button">
                                <button>
                                    <div className="inner-cut">RELEASE CALENDAR</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
