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
    placeService.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(results)
        results.forEach((item) => {
          console.log(item)
          map.setCenter(results[0].geometry.location);
        });
      }
    })

  }

  render() {
    return (
      <div id="map" />
      );
    }
}