import React, { useState, useEffect, useCallback } from 'react';
import { BiFont } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import axios from 'axios';
import Navbar from './navbar.component';
import './home.styles.scss';
import { Context } from '../context/store';
const fileDownload = require('js-file-download');

const HomePage = () => {
  const [adjustedFontSize, setAdjustedFontSize] = useState(1.3);
  const [checked, setChecked] = useState(false);
  const [swahiliText, setSwahiliText] = useState('');
  const [speed, setSpeed] = useState(false);
  const [stream, setStream] = useState(false);
  const { globalState, dispatch } = React.useContext(Context);

  const handleReduceFont = () => {
    if (adjustedFontSize >= 0.9) {
      setAdjustedFontSize(adjustedFontSize - 0.3);
    }
  };

  const getAudioContext =  useCallback(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContent = new AudioContext();
    return audioContent;
  },[]);

  const handleStream = useCallback(() => {
    axios
      .get(`http://localhost:8080/?text=${swahiliText}&speed=${speed}`,
        { responseType: 'arraybuffer' }
      )
      .then( async (res) => {
        setStream(false)
        console.log(res.headers);
        console.log(res.status);
        const audioContext = getAudioContext();
        // create audioBuffer (decode audio file)
        const audioBuffer = await audioContext.decodeAudioData(res.data);

        // create audio source
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);

        // play audio
        source.start();
        // const mp3 = new Blob([res.data], { type: 'audio/mp3' });
        
        // // console.log('blobbed');
        // const url = window.URL.createObjectURL(mp3)
        // const audio = new Audio(url)
        // fileDownload(audio, 'savedAudio.mp3');
        // audio.load()
        // await audio.play()
      })
      .catch((err) => {
        console.error(err);
      });
  }, [swahiliText, speed]);

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
        speed={speed}
        setSpeed={setSpeed}
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
              Any Swahili Word
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
