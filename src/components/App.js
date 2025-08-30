import React from 'react';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Hello></Hello>
      </div>
    );
  }
}

export default App;
