import React from 'react';
import './experiences.scss';
import { experiencesCard1, experiencesCard2, experiencesCard3 } from '../../../assets/images/imageJS/lifestyleImg';

export default function Experiences() {
  return (
    <>
      <div className="experiences" id="experiences">
        <div className="containerH">
            <div className="experiences-div">
                <h2>EXPERIENCES</h2>
                <div className="experiences-card">
                    <div className="experiences-div-card">
                        <img src={experiencesCard1} alt="experiencesCard1" />
                        <p>Marvel Avengers S.T.A.T.I.O.N.</p>
                    </div>
                    <div className="experiences-div-card">
                        <img src={experiencesCard2} alt="experiencesCard2" />
                        <p>Marvel Universe Live! Age of Heroes</p>
                    </div>
                    <div className="experiences-div-card">
                        <img src={experiencesCard3} alt="experiencesCard3" />
                        <p>Marvel: Universe of Super Heroes</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
