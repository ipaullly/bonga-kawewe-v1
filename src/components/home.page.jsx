import React, { useState } from 'react';
import { BiFont } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';

import './home.styles.scss';

const HomePage = () => {
  const [adjustedFontSize, setAdjustedFontSize] = useState(1.3);
  const [checked, setChecked] = useState(false);
  const [swahiliText, setSwahiliText] = useState('');

  const handleReduceFont = () => {
    if (adjustedFontSize >= 0.9) {
      setAdjustedFontSize(adjustedFontSize - 0.3);
    }
  }

  const handleIncreaseFont = () => {
    if (adjustedFontSize <= 2.1) {
      setAdjustedFontSize(adjustedFontSize + 0.3);
    }
  }

  const handleTextChange = (e) => {
    setSwahiliText(e.target.value)
  }

  const clearTextField = () => {
    console.log('click');
    setSwahiliText('');
  }

  return (
    <div className="container">
      <div className="back-fade" />
      <div className="home">
        <div className="adjust-text">
          <div className="switch-container">
            <label className="switch">
              <input
                onChange={() => setChecked(!checked)}
                checked={checked}
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>
            <span
              style={{
                fontFamily: 'Banger',
                margin: '0 0 0 1vw',
                letterSpacing: '2px',
              }}
            >
              Banger Font
            </span>
          </div>
          <div className="font-adjust-icons">
            <div className="reduce-font"
              onClick={() => handleReduceFont()}
            >
              <BiFont />
              <AiOutlineMinusCircle />
            </div>
            <div className="increase-font"
              onClick={() => handleIncreaseFont()}
            >
              <BiFont />
              <AiOutlinePlusCircle />
            </div>
            <div className="trash"
              onClick={() => clearTextField()}
            >
              <HiOutlineTrash />
            </div>
          </div>
        </div>
        <div className="text-box">
          <textarea
            style={{
              letterSpacing: '2px',
              fontSize: `${adjustedFontSize}em`,
              fontFamily: checked ? 'Banger' : 'sans-serif',
            }}
            name="text"
            placeholder='Type Here . . .'
            value={swahiliText}
            onChange={(e) => handleTextChange(e)}
          />
          <br />
          <br />
        </div>
      </div>
      {/* <a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a> */}
    </div>
  );
};

export default HomePage;
