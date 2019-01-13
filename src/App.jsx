import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationMain from '@/components/NavigationMain/NavigationMain';
import HomePage from '@/views/HomePage/HomePage';
import CssExamples from '@/views/CssExamples/CssExamples';
import SassExamples from '@/views/SassExamples/SassExamples';
import AboutPage from '@/views/AboutPage/AboutPage';
import ContactMe from '@/views/ContactMe/ContactMe';
import FadeExample from '@/views/FadeExample/FadeExample';
import FlipperExample from '@/views/FlipperExample/FlipperExample';
import AnimatedIconExample from '@/views/AnimatedIconExample/AnimatedIconExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationMain />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/css" component={CssExamples} />
          <Route path="/sass" component={SassExamples} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactMe} />
          <Route path="/fade" component={FadeExample} />
          <Route path="/flipper" component={FlipperExample} />
          <Route path="/animated-icons" component={AnimatedIconExample} />
        </Switch>
      </div>
    );
  }
}

export default App;
