import React from 'react'
import './charactersList.scss';
import Search from '../../../assets/images/svg/search';

export default function CharactersList() {
    return (
        <>
            <div className="charactersList">
                <div className="containerH">
                    <h3>MARVEL CHARACTERS LIST</h3>
                    <div className="charactersList-grid">
                        <div className="cc-grid1">
                            <input type="text" placeholder='SEARCH' />
                            <Search />
                        </div>
                        <div className="cc-grid2">
                            <li>MOVIE</li>
                            <li>TV</li>
                        </div>
                    </div>
                    <div className="charactersList-grid">
                        <div className="cc-grid3">
                            <h4>2824 RESULTS</h4>
                        </div>
                        <div className="cc-grid4">
                            <span>SORT BY</span>
                            <li>A-Z</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
