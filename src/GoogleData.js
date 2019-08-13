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
    if (this.props.sq === ""){
      return
    }
    const copyData = [this.state.data];
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
        map.setCenter(results[0].geometry.location);
        results.forEach((item) => {
          if (item.user_ratings_total > this.props.totalRating && item.rating > this.props.rating && copyData.indexOf(item) === -1){ 
            this.createMarker(item, map);
            copyData.push(item)
          }
        });
      
        //if (pagination.hasNextPage) {
        //  pagination.nextPage();
        //  console.log("next!")
        //};
      }
    })
    if (this.state.data.length < copyData.length) {
      this.setState({data: copyData});
    }
  }

  createMarker(place, map) {
    var infowindow = new window.google.maps.InfoWindow();
    var marker = new window.google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    new window.google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  renderResult(){
    const { data } = this.state;

    if (data.length === 0){
        return null;
    } 
    if (data.length < 10000){
      console.log(data)
      return (
        <ul>
            {data.slice(1).map((item) => <li ckey={item.id}>{item.name}</li>)}
        </ul>
    );
    }

  }

  render() {
    return (
      <div id="map">
      </div>
      )

  }
}