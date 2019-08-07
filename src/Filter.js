import React from 'react';
import './AutoCompleteText.css'

export default class Filter extends React.Component {
    constructor(props){
        super(props);
        this.items = [];
        this.state = {
            totalRating: '',
            ratings: '',
            distance: '',
        }
    }

     onTotalRatingChanged = (e) => {
        const value = e.target.value;
         this.setState(() => ({totalRating: value}))
         console.log(this.state)
         this.props.onGetTotalRatings(value)
     }

     onReviewChanged = (e) => {
        const value = e.target.value;
        this.setState(() => ({ratings: value}))
        console.log(this.state)
        this.props.onGetRating(value)
    }

    render () {
        const { totalRating, ratings } = this.state;

        return (
            <div className="filter_box">
            <input value={totalRating} onChange={this.onTotalRatingChanged} type="text" placeholder="Ratings" />
            <input value={ratings} onChange={this.onReviewChanged} type="text" placeholder="Reviews" />
            </div>
        )
    }
}