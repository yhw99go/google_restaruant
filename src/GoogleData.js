import React from 'react';
import Button from '@material-ui/core/Button';
import './GoogleData.css'



export default class GoogleData extends React.Component {
  
  constructor(props){
    super(props);
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center:"toronto",
      zoom: 8
    });
    this.items = [];
    this.state = {
        text: '',
        data: [],
        isLoaded: false,
    }
}

  componentDidUpdate(prevProps) {
    if (this.props.sq === ""){
      return
    }

    if (this.props.sq === prevProps.sq){
      return
    }

    var copyData = [];

    var request = {
      query: this.props.sq,
      fields: ['place_id', 'name', 'formatted_address', 'icon', 'geometry', 'user_ratings_total'],
    };
    const placeService = new window.google.maps.places.PlacesService(this.map)
    placeService.textSearch(request, (results, status, pagination) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.map.setCenter(results[0].geometry.location);
        results.forEach((item) => {
          if (item.user_ratings_total > this.props.totalRating && item.rating > this.props.rating && copyData.indexOf(item) === -1){ 
            this.createMarker(item, this.map);
            copyData.push(item)
          }
        });
        this.setState({data: copyData});
        //if (pagination.hasNextPage) {
        //  pagination.nextPage();
        //  console.log("next!")
        //};
      }
    })
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

  renderResult = () => {
    const { data } = this.state;

    if (data.length === 0){
        return null;
    } 
    if (data.length < 10000){
      console.log(data)
      return (
        <ul>
            {data.slice(1).map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
    );
    }
  }

  render() {
    return (
      <div>
      {this.renderResult()}
      <Button variant="contained" color="primary">
      Hello World
    </Button>
      </div>
      )
  }
}