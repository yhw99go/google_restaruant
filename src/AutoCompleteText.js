import React from 'react';
import './AutoCompleteText.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AutoCompleteText extends React.Component {
    constructor(props){
        super(props);
        this.items = [];
        this.state = {
            suggestions: [],
            location: '',
            text: '',
            totalRating: '',
            rating: '',
            isLoaded: false,
        }
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        } 
        this.setState(() => ({suggestions, text: value}));
    }

    onLocationChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({location: value}));
    }

    onTotalChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({totalRating: value}));
    }

    onReviewChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({rating: value}));
    }


    renderSuggestions () {
        const { suggestions } = this.state;
        this.items = this.state.data.map(item => item.name);

        if (suggestions.length === 0){
            return null;
        } 
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    render () {
        const { text, location, totalRating, rating } = this.state;

        return (
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" placeholder="Find Restaurants" />
                <input className ="second_wrap" value= {location} onChange={this.onLocationChanged} type="text" placeholder="Location" />
                <button className ="third_wrap" value="" onClick={() => this.props.onGetClick(text, location,totalRating, rating)} type="text">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input value = {totalRating} onChange={this.onTotalChanged} className = "filter_box" type="text" placeholder="Total Reviews" />
                <input value = {rating} onChange={this.onReviewChanged} className = "filter_box" type="text" placeholder="Ratings" />
            </div>
        )
    }
}