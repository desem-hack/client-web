import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Route, Link } from 'react-router';
import $ from 'jquery';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import style from './../css/style.css';
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
          <div id="map" className={style.map}></div>
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
