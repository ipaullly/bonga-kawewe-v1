import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ImPlay3 } from 'react-icons/im';
import { BsDownload } from 'react-icons/bs';

import './navbar.styles.scss';
import { Context } from '../context/store';

const Navbar = ({ voice, speed, setSpeed, setVoice, setStream }) => {
  const [hideAudioPlayer, setHideAudioPlayer] = useState(false);
  const context = useContext(Context);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === '/about') {
      setHideAudioPlayer(true);
    }
    if (location.pathname === '/') {
      setHideAudioPlayer(false);
    }
    console.log(location, '===/');
  }, [location]);

  const handleAboutClick = () => {
    history.push('/about');
  };

  const handleLogoClick = () => {
    history.push('/');
  };
  return (
    <div className="navbar">
      <div onClick={() => handleLogoClick()} className="logo-container">
        <img
          src="https://i.ibb.co/yBVYbfN/Slide2.png"
          alt="Slide2"
          border="0"
          className="logo"
        />
        <div className="navbar-brand-title">Bonga kaWeWe</div>
      </div>
      {!hideAudioPlayer ? (
        <div className="filters-container">
          <div className="stream-button" onClick={() => setStream(true)}>
            <ImPlay3 />
          </div>
          <div className="download-button">
            <BsDownload />
            <span>MP3</span>
          </div>
          {/* <div className="voice-dropdown">
            <button className="dropbtn">{voice}</button>
            <div className="dropdown-content">
              <span onClick={() => setVoice('English')}>English</span>
              <span onClick={() => setVoice('Italian')}>Italian</span>
              <span onClick={() => setVoice('Swahili')}>Swahili</span>
            </div>
          </div> */}
          <div className="toggle-speech-speed" onClick={() => setSpeed(!speed)}>
            {speed ? 'Fast' : 'Slow'}
          </div>
        </div>
      ) : null}
      <div className="navbar-links">
        <ul>
          <li onClick={() => handleAboutClick()}>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
