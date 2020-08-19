import React, { useState } from 'react';
import { BiFont } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';

import './home.styles.scss';

const HomePage = () => {
  const [adjustedFontSize, setAdjustedFontSize] = useState(1.3)
  return (
    <div className="container">
      <div className="back-fade" />
      <div className="home">
        <div className="adjust-text">
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
          <div className="font-adjust-icons">
            <div className="reduce-font">
            <BiFont />
            <AiOutlineMinusCircle />
            </div>
            <div className="increase-font">
            <BiFont />
            <AiOutlinePlusCircle />
            </div>
            <div className="trash">
              <HiOutlineTrash />
            </div>
          </div>
        </div>
        <div className="text-box">
          <textarea 
          style={{
            fontSize: `${adjustedFontSize}em`
          }}
          name="text" placeholder="Type here..." />
          <br />
          <br />
        </div>
      </div>
      {/* <a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a> */}
    </div>
  );
};

export default HomePage;
