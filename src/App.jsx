import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationMain from '@/components/NavigationMain/NavigationMain';
import Home from '@/views/Home/Home';
import CSS from '@/views/CSS/CSS';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationMain />
        <Route exact path="/" component={Home} />
        <Route exact path="/css" component={CSS} />
      </div>
    );
  }
}

export default App;
