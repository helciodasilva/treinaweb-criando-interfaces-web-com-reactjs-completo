import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextCounter from './TextCounter.js';
import {MyList, MyListItem} from './MyList';

class App extends Component {
  render() {
    var abc = "TreinaWeb";
    return (
      <div className="App">
        <MyList></MyList>
      </div>
    );
  }
}

export default App;
