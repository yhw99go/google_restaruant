import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import GoogleData from './GoogleData'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sq: '',
    }
  }

  onGetClick = (text, location) => {
    var searchQuery = String(text) + " in " + String(location)
    console.log(searchQuery)
    this.setState(() => ({sq: searchQuery}));
      
  }

  render() {
    return (
      <div className="App">
        <div className="App-Component">
            <AutoCompleteText onGetClick={this.onGetClick} />
            <GoogleData sq = {this.state.sq}/>
        </div>      
      </div>
    );
  }
}

export default App;
