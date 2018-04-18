import React, { Component } from 'react';
import Header from './Header';
import NavigationMain from './NavigationMain';
import SidebarMain from './SidebarMain';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationMain />
        <Header heading="ELR Utilities">
          A collection of reusable, modular Sass Mixins
        </Header>
        <main className="main-content">
          <SidebarMain />
        </main>
      </div>
    );
  }
}

export default App;
