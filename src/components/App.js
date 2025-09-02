import React from 'react';
import './App.css';
import Header from './header/Header.js';
/*
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import DectoBin from './dec-to-bin/Dec-to-Bin.js';
import DectoHex from './dec-to-hex/Dec-to-Hex.js';
import BintoDec from './bin-to-dec/Bin-to-Dec.js';
import HextoDec from './hex-to-dec/Hex-to-Dec.js';
*/
import Post from './post/Post.js';
import Form from './form/Form.js';
import Range from './range/Range.js';
import Posts from './posts/Posts.js';
class App extends React.Component {
  state = {
    posts: [
      { id: "1", title: "Процедурное программирование на языке C++", content: "Изучаются базовые конструкции языка C++" },
      { id: "2", title: "ООП программирование на языке C++", content: "Изучаются базовые концепции ООП" },
      { id: "3", title: "DataContainers", content: "Изучаются основные структуры данных, и контейнеры, основаные на них" }
    ]
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        {
          //#region Homework
          /* <Hello></Hello>
          <Length></Length>
          <br />
          <DectoBin></DectoBin>
          <br />
          <DectoHex></DectoHex>
          <br />
          <BintoDec></BintoDec>
          <br />
          <HextoDec></HextoDec> */
          //#endregion
        }
        {/* <Form></Form>
        <Range /> */}
        {/* props={this.state.props} */}
        <Posts posts={this.state.posts}></Posts>
        {/* <Post title={"Title"} content={"Content"} /> */}
      </div>
    );
  }
}

export default App;
