import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Route, Link } from 'react-router';
import $ from 'jquery';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import style from './../css/style.css';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import stops from './markers';

const App = React.createClass({
  getInitialState() {
    return {
      currentTime: Date.now(),
      markers: stops
    };
  },

  componentDidMount() {
    this._getCurrentPosition();
    this._getBusPosition();
    setInterval(this._getBusPosition, 3000);
  },

  _getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.state.markers.push({
        position: {
          lat: +pos.coords.latitude,
          lng: +pos.coords.longitude
        },
        key: 'self',
        defaultAnimation: 2,
        icon: 'self.png'
      });

      this.setState({
        markers: this.state.markers
      });
    }, () => {}, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  },

  _getBusPosition() {
    $.ajax({
      url: 'http://138.251.207.124:4000/api/bus',
      success: (res) => {
        this.state.markers[0].position.lat = res.lat;
        this.state.markers[0].position.lng = res.lng;

        this.setState({
          currentTime: res.timestamp,
          markers: this.state.markers
        });
      },
      error: () => {}
    });
  },

  _gmapsElement() {
    return (
      <GoogleMap defaultZoom={14} defaultCenter={{lat: 56.3360378, lng: -2.8023315}}>
        { this.state.markers.map((marker, index) => <Marker {...marker} />) }
      </GoogleMap>
    );
  },

  render() {
    return (
      <div>
        <h1>St Night Bus</h1>
        <h2>Update ed on {(new Date(this.state.currentTime * 1000)).toString()}</h2>
        <div className={style.mapWrapper}>
          <GoogleMapLoader containerElement={<div className={style.map} />} googleMapElement={this._gmapsElement()} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App} />
  </Router>,
  document.querySelector('#main')
);
