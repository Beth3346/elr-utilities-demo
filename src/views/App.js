import React, { Component } from 'react';
import Header from '../components/Header';
import NavigationMain from '../components/NavigationMain';
import SidebarMain from '../components/SidebarMain';
import ContentHome from '../components/ContentHome';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
          <article className="content-holder">
            <ContentHome />
          </article>
        </main>
      </div>
    );
  }
}

export default App;
