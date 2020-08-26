import React, { useState, useEffect, useCallback } from 'react';
import { BiFont } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import axios from 'axios';
import Navbar from './navbar.component';
import './home.styles.scss';
import { Context } from '../context/store';

const HomePage = () => {
  const [adjustedFontSize, setAdjustedFontSize] = useState(1.3);
  const [checked, setChecked] = useState(false);
  const [swahiliText, setSwahiliText] = useState('');
  const [voice, setVoice] = useState('Swahili');
  const [speed, setSpeed] = useState(false);
  const [stream, setStream] = useState(false);
  const { globalState, dispatch } = React.useContext(Context);

  const handleReduceFont = () => {
    if (adjustedFontSize >= 0.9) {
      setAdjustedFontSize(adjustedFontSize - 0.3);
    }
  };

  const handleStream = useCallback(() => {
    axios
      .get(
        `http://localhost:8080/hear?lang=${
          voice === 'Swahili'
            ? 'sw'
            : voice === 'English'
            ? 'en-uk'
            : voice === 'Italian'
            ? 'it'
            : 'en'
        }&text=${swahiliText}&speed=${speed}`
      )
      .then((data) => {
        console.log(data);
        const audio = new Audio(data.data);
        const audioPromise = audio.play();
        if (audioPromise !== undefined) {
          audioPromise
            .then(_ => {

              console.log('audio played');
              audio.pause()
            })
            .catch(error => {

              console.log('playback prevented');
            })
        }
        console.log(typeof data.data, 'type');
        setStream(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [voice, swahiliText, speed]);

  useEffect(() => {
    if (stream) {
      handleStream()
    }
  }, [stream, handleStream])

  useEffect(() => {
    console.log(swahiliText, 'jdsfsd');
    dispatch({
      type: 'SET_STREAM_TEXT',
      searchText: swahiliText,
    });
  }, [swahiliText, dispatch]);

  const handleIncreaseFont = () => {
    if (adjustedFontSize <= 2.1) {
      setAdjustedFontSize(adjustedFontSize + 0.3);
    }
  };

  const handleTextChange = (e) => {
    setSwahiliText(e.target.value);
  };

  const clearTextField = () => {
    console.log('click');
    setSwahiliText('');
  };

  return (
    <div className="container">
      <Navbar
        voice={voice}
        speed={speed}
        setSpeed={setSpeed}
        setVoice={setVoice}
        setStream={setStream}
      />
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
            <div className="reduce-font" onClick={() => handleReduceFont()}>
              <BiFont />
              <AiOutlineMinusCircle />
            </div>
            <div className="increase-font" onClick={() => handleIncreaseFont()}>
              <BiFont />
              <AiOutlinePlusCircle />
            </div>
            <div className="trash" onClick={() => clearTextField()}>
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
            placeholder="Type Here . . ."
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
