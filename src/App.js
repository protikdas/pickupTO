import React, { Component } from 'react';
import './App.css';
import './compTorontoMap/TorontoMap.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './compNavbar/Navbar';
import TorontoMap from './compTorontoMap/TorontoMap';
import MapControls from './compMapControls/MapControls';
import SignUp from './compSignUp/SignUp';

class App extends Component {
  constructor() {
    super()
    this.state = {
        signedIn: true,
        show: "Basketball",
        icon: "./bball_icon.png",
        markersBasketball: [
            {
            name: "David Crombie Park",
            id: 1,
            lat: 43.648247,
            lng: -79.370209
            },
            {
            name: "Cooper Koo Family YMCA",
            id: 2,
            lat: 43.653146,
            lng: -79.357861
            }
        ],
        markersSoccer: [{
            name: "SoccerWorld",
            id: 1,
            lat: 43.639740,
            lng: -79.353100
            },
            {
            name: "Polsien Pier",
            id: 2,
            lat: 43.6532,
            lng: -79.3832
            }
        ],
        activeMarkers: []
    }

    //bindings
    this.showBasketball = this.showBasketball.bind(this);
    this.showSoccer = this.showSoccer.bind(this);

  }

  showBasketball() {
    this.setState({
      show: 'Basketball',
      activeMarkers: this.state.markersBasketball,
      icon: "./bball_icon.png"
    })
  }

  showSoccer() {
    this.setState({
      show: "Soccer",
      activeMarkers: this.state.markersSoccer,
      icon: "./fball_icon.png"
    })
  }

  componentWillMount() {
    this.setState({
      activeMarkers: this.state.markersBasketball
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar signedIn={this.state.signedIn} />
            <Switch>
              <div className="pageBody">
                <Route exact path="/" render={() => 
                        <div className="TorontoMap">
                          <TorontoMap icon={this.state.icon} activeMarkers={this.state.activeMarkers} />
                          <MapControls show={this.state.show} showBasketball={this.showBasketball} showSoccer={this.showSoccer} />
                        </div>
                    } />
                <Route path="/signup" render={() => <SignUp />} />
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
