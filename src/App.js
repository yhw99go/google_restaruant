import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import GoogleData from './GoogleData'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }
  }

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
