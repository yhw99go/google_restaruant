import React from 'react';
import './GoogleData.css'

export default class GoogleData extends React.Component {
  
  constructor(props){
    super(props);
    this.items = [];
    this.state = {
        text: '',
        data: [],
        isLoaded: false,
    }
}


  componentDidUpdate() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 8
    });

    var request = {
      query: this.props.sq,
      fields: ['place_id', 'name', 'formatted_address', 'icon', 'geometry', 'user_ratings_total'],
    };
    const placeService = new window.google.maps.places.PlacesService(map)
    placeService.textSearch(request, (results, status, pagination) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        
        results.forEach((item) => {
          this.setState({ data: this.state.data.concat(item.name) })
          map.setCenter(results[0].geometry.location);
        });
      
        //if (pagination.hasNextPage) {
        //  pagination.nextPage();
        //  console.log("next!")
        //};
      }
    })
  }

  renderResult(){
    const { data } = this.state;
    if (data.length === 0){
        return null;
    } 
    console.log(data)
    if (data.length > 300){
      return (
        <ul>
            {data.map((item) => <li key={item.place_id}>{item.name}</li>)}
        </ul>
    );
    console.log("done:?")
    }

  }

  render() {
    return (
      <div id="map">
      {this.renderResult()}
      </div>
      )

  }
}