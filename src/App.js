import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import GoogleData from './GoogleData'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sq: '',
      totalRating: '',
      rating: '',
    }
  }

  onGetClick = (text, location, totalRating, rating) => {
    var searchQuery = String(text) + " Restaurant at " + String(location)
    this.setState(() => ({sq: searchQuery, totalRating: totalRating, rating: rating}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-Component">
            <AutoCompleteText onGetClick={this.onGetClick} />
            <GoogleData sq = {this.state.sq} totalRating = {this.state.totalRating} rating = {this.state.rating} />
        </div>      
      </div>
    );
  }
}

export default App;
