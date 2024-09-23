import React, { useState } from 'react';
import './musiclist.scss';
import Volume from '../../../../assets/images/svg/volume';
import MusicPlay from '../../../../assets/images/svg/musicplay';
import Music from '../../../../assets/images/svg/music';

export default function MusicList1() {
  const speeds = ["1X", "1.2X", "1.5X", "2X", "0.5X"];
  const [currentSpeedIndex, setCurrentSpeedIndex] = useState(0);

  const handleSpeedClick = () => {
    setCurrentSpeedIndex((prevIndex) => (prevIndex + 1) % speeds.length);
  };

  return (
    <>
      <div className="musiclist">
        <h3>Marvel/Method</h3>
        <div className="musiclist-box">
          <div className="musiclist-first">
            <div className="musiclist-image"></div>
            <div className="musiclist-title">
              <div className="musiclist-head">
                <div className="music-head-main">
                  <span> Marvel/Method with Method Man | EP8 </span>
                  <h4>Killer Mike</h4>
                </div>
                <div className="music-sound">
                  <Volume />
                </div>
              </div>
              <div className="musiclist-play">
                <div className="musiclist-play-button">
                  <MusicPlay />
                </div>
                <div className="musiclist-batch">
                  <Music />
                  <div className="musiclist-start">00:00</div>
                  <div className="musiclist-end">48:01</div>
                  <div className="musiclist-control">
                    <div className="musiclist-speed" onClick={handleSpeedClick}>
                      <span>{speeds[currentSpeedIndex]}</span>
                    </div>
                    <div className="musiclist-share">
                      <span>PRIVACY</span>
                      <span>SHARE</span>
                      <span>SUBSCRIBE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="musiclist-table">
            <table>
              <tbody>
                <tr>
                  <td>S1:E8</td>
                  <td>Killer Mike</td>
                  <td>48:01</td>
                </tr>
                <tr>
                  <td>S1:E7</td>
                  <td>Jemele Hill</td>
                  <td>50:47</td>
                </tr>
                <tr>
                  <td>S1:E6</td>
                  <td>Kevin Smith</td>
                  <td>50:45</td>
                </tr>
                <tr>
                  <td>S1:E5</td>
                  <td>Michelle Rodriguez</td>
                  <td>41:27</td>
                </tr>
                <tr>
                  <td>S1:E4</td>
                  <td>Joe Manganeillo</td>
                  <td>48:01</td>
                </tr>
                <tr>
                  <td>S1:E3</td>
                  <td>Chirs Gethard</td>
                  <td>01:01:30</td>
                </tr>
                <tr>
                  <td>S1:E2</td>
                  <td>Jean Grae</td>
                  <td>59:24</td>
                </tr>
                <tr>
                  <td>S1:E1</td>
                  <td>DMC</td>
                  <td>47:10</td>
                </tr>
                <tr>
                  <td>S1:T</td>
                  <td>Marvel/Method Trailer - Subscribe for the Series</td>
                  <td>01:36</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="banner-content-button">
          <button><span>SUBSCRIBE</span><div className="inner-cut"></div></button>
          <button><span>VIEW ARCHIVE</span><div className="inner-cut"></div></button>
        </div>
      </div>
    </>
  );
}
