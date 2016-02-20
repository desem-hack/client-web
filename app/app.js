import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Route, Link } from 'react-router';
import $ from 'jquery';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import style from './../css/style.css';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
// TODO Add Immutable

const App = React.createClass({
  getInitialState() {
    return {
      markers: [
        {
          position: {
            lat: 56.3412378,
            lng: -2.7953315,
          },
          key: "bus",
          defaultAnimation: 2,
          icon: 'bus.png'
        },
        {
          position: {
            lat: 56.3341776,
            lng: -2.783473,
          },
          key: "albany",
          defaultAnimation: 2
        },
        {
          position: {
            lat: 56.3415514 - 0.00022,
            lng: -2.7951661 - 0.00054,
          },
          key: "library",
          defaultAnimation: 2
        },
        {
          position: {
            lat: 56.3283371 - 0,
            lng: -2.805844 - 0.0027,
          },
          key: "morrison",
          defaultAnimation: 2
        },
        {
          position: {
            lat: 56.3355399 + 0.0002,
            lng: -2.8208376 - 0.0007,
          },
          key: "dra",
          defaultAnimation: 2
        },
        {
          position: {
            lat: 56.3404036 + 0.0004,
            lng: -2.8101418 - 0.0037,
          },
          key: "agnes",
          defaultAnimation: 2
        },
        {
          position: {
            lat: 56.3402233 + 0.00005,
            lng: -2.7993857 - 0.0007,
          },
          key: "union",
          defaultAnimation: 2
        }
      ]
    };
  },

  componentDidMount() {
    $.get('http://138.251.207.124:4000/api/bus', () => {
      console.log(arguments);
    })
    // setInterval(() => {
    //   this.state.markers[0].position.lng -= 0.0005
    //   this.setState({ markers: this.state.markers });
    // }, 1000);
  },

  _gmapsElement() {
    return (
      <GoogleMap defaultZoom={14} defaultCenter={{lat: 56.3360378, lng: -2.8023315}}>
        {this.state.markers.map((marker, index) => {
          return (
            <Marker {...marker} />
          );
        })}
      </GoogleMap>
    );
  },

  render() {
    return (
      <div>
        <h1>St Night Bus</h1>
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
