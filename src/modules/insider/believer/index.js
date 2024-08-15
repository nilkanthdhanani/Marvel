import React from 'react';
import './believer.scss';

import checkmarkWhite from '../../../assets/images/svg/checkmarkWhite.svg';

export default function Believer() {
    return (
        <>
            <div className="believer">
                <div className="containerH">
                    <h2>Become a True Believer</h2>
                    <h3>Each activity you complete as a Marvel Insider brings you closer to the next level of Marvel fandom!</h3>
                    <table>
                        <thead>
                            <tr>
                                <th className='first-column'>
                                    <h4>BENEFITS</h4>
                                </th>
                                <th>
                                    <h4>INSIDER</h4>
                                    <span>0–4,999 <br /> Points</span>
                                </th>
                                <th>
                                    <h4>AGENTS</h4>
                                    <span>5,000–49,999 <br /> Points</span>
                                </th>
                                <th>
                                    <h4>ELITE</h4>
                                    <span>50,000–199,999 <br /> Points</span>
                                </th>
                                <th>
                                    <h4>TRUE BELIEVER</h4>
                                    <span>200,000+ <br /> Points</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='first-column'>Birthday Gift</td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                            </tr>
                            <tr>
                                <td className='first-column'>Anniversary Gift</td>
                                <td></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                            </tr>
                            <tr>
                                <td className='first-column'>Exclusive Rewards</td>
                                <td></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                            </tr>
                            <tr>
                                <td className='first-column'>Access to Exclusive Content</td>
                                <td></td>
                                <td></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                            </tr>
                            <tr>
                                <td className='first-column'>Exclusive Sales & Discounts</td>
                                <td></td>
                                <td></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                            </tr>
                            <tr>
                                <td className='first-column'>Gift Upon Reaching Tier</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={checkmarkWhite} alt="checkmarkWhite" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="responsive-table">
                        <div className="responsive-table-div">
                            <div className="table-head">
                                <h4>INSIDER</h4>
                                <span>0–4,999 <br /> Points</span>
                            </div>
                            <div className="table-body">Birthday Gift</div>
                        </div>
                        <div className="responsive-table-div">
                            <div className="table-head">
                                <h4>AGENT</h4>
                                <span>5,000–49,999 <br /> Points</span>
                            </div>
                            <div className="table-body">Birthday Gift</div>
                            <div className="table-body">Anniversary Gift</div>
                            <div className="table-body">Exclusive Rewards</div>
                        </div>
                        <div className="responsive-table-div">
                            <div className="table-head">
                                <h4>ELITE</h4>
                                <span>50,000–199,999 <br /> Points</span>
                            </div>
                            <div className="table-body">Birthday Gift</div>
                            <div className="table-body">Anniversary Gift</div>
                            <div className="table-body">Exclusive Rewards</div>
                            <div className="table-body">Access to Exclusive Content</div>
                            <div className="table-body">Exclusive Sales & Discounts</div>
                        </div>
                        <div className="responsive-table-div">
                            <div className="table-head">
                                <h4>TRUE BELIEVER</h4>
                                <span>200,000+ <br /> Points</span>
                            </div>
                            <div className="table-body">Birthday Gift</div>
                            <div className="table-body">Anniversary Gift</div>
                            <div className="table-body">Exclusive Rewards</div>
                            <div className="table-body">Access to Exclusive Content</div>
                            <div className="table-body">Exclusive Sales & Discounts</div>
                            <div className="table-body">Gift Upon Reaching Tier</div>
                        </div>
                    </div>
                    <p>For more information please visit the <a href="/insider">Insider FAQ</a> section. Marvel Insider points and benefits available to eligible US residents only.</p>
                </div>
            </div>
        </>
    )
}
