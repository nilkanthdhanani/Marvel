import React from 'react'
import './advertisement.scss';
import { advertise2, advertise4 } from '../../../assets/images//imageJS/comicImg';

export default function Add2() {
  return (
    <>
      <div className="add-div">
        <div className="container">
          <img src={advertise2} alt="advertise2" />
          <img src={advertise4} alt="advertise4" />
          <span>ADVERTISMENT</span>
        </div>
      </div>
    </>
  )
}
