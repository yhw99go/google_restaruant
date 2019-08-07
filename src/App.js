import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import Filter from './Filter.js'
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

  onGetClick = (text, location) => {
    var searchQuery = String(text) + " Restaurant at " + String(location)
    this.setState(() => ({sq: searchQuery}));
  }

  onGetTotalRatings = (e) => {
    this.setState(() => ({totalRating: e}));
  }

  onGetRating = (e) => {
    this.setState(() => ({rating: e}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-Component">
            <AutoCompleteText onGetClick={this.onGetClick} />
            <Filter onGetTotalRatings={this.onGetTotalRatings} onGetRating={this.onGetRating} />
            <GoogleData sq = {this.state.sq} totalRating = {this.state.totalRating} rating = {this.state.rating} />
            
        </div>      
      </div>
    );
  }
}

export default App;
