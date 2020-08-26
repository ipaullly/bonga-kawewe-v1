import React from 'react';
import logoImg from '../images/big-shoes.png';
import Navbar from './navbar.component';
import './about.styles.scss'

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-page">
        <div className="back-fade" />
        <div className="about">
          <span className='about-header'>
            At Bonga Kawewe, We believe in the better experience while communicating Swahili in a social settings
          </span>
          <br/>
          <div className='instructions'>
            <span>
            1. Enter the text you want to hear in swahili in the textarea of the home page.
            </span>
            <span>
            2. Select the accent you want the audio to be spoken.
            </span>
            <span>
            3. Toggle the audio speed to either fast or slow.
            </span>
            <span>
            4. Press the <i className='fas fa-play' style={{margin: '0 5px 0 5px'}}></i> icon on the header section to hear the text spoken out loud.
            </span>
            <span>
            5. Alternatively you can download the audio in mp3 format by clicking the download icon on the header section.
            </span>
          </div>
        </div>
        <div className="svg-backdrop">
          <img src={logoImg} alt='hijab'/>
        </div>
      </div>
    </div>
  );
};

export default About;
