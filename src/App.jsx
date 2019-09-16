import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

class App extends Component {
  static openNav() {
    document.getElementById('myNav').style.width = '100%';
  }

  static closeNav() {
    document.getElementById('myNav').style.width = '0%';
  }

  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
    };
    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggleLogo() {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'}
            alt="logo"
            onClick={this.openNav}
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
          />
          <h1
            className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
            onClick={this.openNav}
          >
Menu

          </h1>
          <Navigation closeNav={this.closeNav} />
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
