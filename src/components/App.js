import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import DectoBin from './dec-to-bin/Dec-to-Bin.js';
import DectoHex from './dec-to-hex/Dec-to-Hex.js';
import BintoDec from './bin-to-dec/Bin-to-Dec.js';
import HextoDec from './hex-to-dec/Hex-to-Dec.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Hello></Hello>
        <Length></Length>
        <br />
        <DectoBin></DectoBin>
        <br />
        <DectoHex></DectoHex>
        <br />
        <BintoDec></BintoDec>
        <br />
        <HextoDec></HextoDec>
      </div>
    );
  }
}

export default App;
