import React, { Component } from 'react';
import { Route, IndexRoute, IndexLink, hashHistory, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    fetch('/api/food')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let restaurants = json.map((restaurant) => {
          return (
            <div key={restaurant.name}>
              Name: {restaurant.name}
              Catagory: {restaurant.catagory}
            </div>
          )
        });
        this.setState({
          restaurants: restaurants
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stuff">Stuff</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <h1>Restaurants</h1>
          {this.state.restaurants}
      </div>
    );
  }
}

export default App;
