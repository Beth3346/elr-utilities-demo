import React, { Component } from 'react';
import Header from './Header';
import NavigationMain from './NavigationMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationMain />
        <Header heading="ELR Utilities">
          A collection of reusable, modular Sass Mixins
        </Header>
      </div>
    );
  }
}

export default App;
