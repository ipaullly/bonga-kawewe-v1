import React from 'react'

import './navbar.styles.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img 
        src="https://i.ibb.co/yBVYbfN/Slide2.png"
        alt="Slide2"
        border="0"
        className='logo'
      />
        <div class="navbar-brand-title">Bonga kaWeWe</div>
        <a href="/" class="toggle-button">
            <span class="bar" style={{
              backgroundColor: 'black'
            }}>home</span>
            <span class="bar" style={{
              backgroundColor: 'black'
            }}>home</span>
            <span class="bar" style={{
              backgroundColor: 'black'
            }}>home</span>
        </a>

        <div class="navbar-links">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#voices">Voices</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">Faq</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
