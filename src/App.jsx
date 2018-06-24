import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationMain from '@/components/NavigationMain/NavigationMain';
import Home from '@/views/Home/Home';
import CssPage from '@/views/CSS/CSS';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/css" component={CssPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
