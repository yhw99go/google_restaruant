import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import GoogleData from './GoogleData'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-Component">
            <AutoCompleteText />
            <GoogleData />
        </div>      
      </div>
    );
  }
}

export default App;
