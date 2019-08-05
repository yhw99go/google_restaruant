import React from 'react';
import './GoogleData.css'

export default class GoogleData extends React.Component {
  
  constructor(props){
    super(props);
    this.items = [];
    this.state = {
        query: '',
        suggestions: [],
        text: '',
        data: [],
        isLoaded: false,
    }
}

  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 8
    });

    var request = {
      query: this.props.query,
      fields: ['place_id', 'name', 'formatted_address', 'icon', 'geometry'],
    };
    console.log(request)
    const placeService = new window.google.maps.places.PlacesService(map)
    placeService.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.forEach((item) => {
          console.log(item)
          map.setCenter(results[0].geometry.location);
        });
      }
    })

  }

  render() {
    const { suggestions } = this.state;
    return (
      <div id="map" />
      );
    }
}