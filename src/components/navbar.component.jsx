import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { ImPlay3 } from 'react-icons/im';
import { BsDownload } from 'react-icons/bs';

import './navbar.styles.scss'

const Navbar = () => {
  const [voice, setVoice] = useState('swahili');
  const [speed, setSpeed] = useState(false);

  return (
    <div className='navbar'>
      <Link to='/' className="logo-container">
        <img 
          src="https://i.ibb.co/yBVYbfN/Slide2.png"
          alt="Slide2"
          border="0"
          className='logo'
        />
        <div className="navbar-brand-title">Bonga kaWeWe</div>
      </Link>
      <div className="filters-container">
        <div className="stream-button"><ImPlay3 /></div>
        <div className="download-button"><BsDownload /><span>MP3</span></div>
        <div className="voice-dropdown">
          <button class="dropbtn">Voices</button>
          <div class="dropdown-content">
            <span
              onClick={() => setVoice('english')}
            >English</span>
            <span
              onClick={() => setVoice('italian')}
            >Italian</span>
            <span
              onClick={() => setVoice('swahili')}
            >Swahili</span>
          </div>
        </div>
        <div className="toggle-speech-speed"
          onClick={() => setSpeed(!speed)}
        >
          {
            speed? 'Fast': 'Slow'
          }
        </div>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
