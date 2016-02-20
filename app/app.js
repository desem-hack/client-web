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
    };
  },

  componentDidMount() {
  },

  render() {
    return (
      <div>
        <h1>St Night Bus</h1>
        <div className={style.mapWrapper}>
          <GoogleMapLoader
            containerElement={<div className={style.map} />}
            googleMapElement={
              <GoogleMap
                defaultZoom={14}
                defaultCenter={{lat: 56.3412378, lng: -2.7953315}}
              />
            }
          />
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
