import React from 'react'
import './advertisement.scss';
import { advertise, advertise3 } from '../../../assets/images/comicImg';

export default function Add1() {
  return (
    <>
      <div className="add-div">
        <div className="container">
          <img src={advertise} alt="advertise" />
          <img src={advertise3} alt="advertise3" />
          <span>ADVERTISMENT</span>
        </div>
      </div>
    </>
  )
}
