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
import AnimatedLinkExample from '@/views/AnimatedLinkExample/AnimatedLinkExample';
import ButtonExample from '@/views/ButtonExample/ButtonExample';
import CardExample from '@/views/CardExample/CardExample';
import CommentExample from '@/views/CommentExample/CommentExample';
import ContentBlockExample from '@/views/ContentBlockExample/ContentBlockExample';
import DataPatternExample from '@/views/DataPatternExample/DataPatternExample';
import HeadingExample from '@/views/HeadingExample/HeadingExample';
import LabelExample from '@/views/LabelExample/LabelExample';
import LayoutExample from '@/views/LayoutExample/LayoutExample';
import ListExample from '@/views/ListExample/ListExample';
import PositioningExample from '@/views/PositioningExample/PositioningExample';
import PreloaderExample from '@/views/PreloaderExample/PreloaderExample';
import PricingTableExample from '@/views/PricingTableExample/PricingTableExample';
import ProgressMeterExample from '@/views/ProgressMeterExample/ProgressMeterExample';
import ResetExample from '@/views/ResetExample/ResetExample';
import ResponsiveExample from '@/views/ResponsiveExample/ResponsiveExample';
import SlideExample from '@/views/SlideExample/SlideExample';
import StepExample from '@/views/StepExample/StepExample';
import ThumbnailExample from '@/views/ThumbnailExample/ThumbnailExample';
import TypographyExample from '@/views/TypographyExample/TypographyExample';

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
          <Route path="/animated-links" component={AnimatedLinkExample} />
          <Route path="/buttons" component={ButtonExample} />
          <Route path="/cards" component={CardExample} />
          <Route path="/comments" component={CommentExample} />
          <Route path="/content-blocks" component={ContentBlockExample} />
          <Route path="/data-patterns" component={DataPatternExample} />
          <Route path="/headings" component={HeadingExample} />
          <Route path="/labels" component={LabelExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/lists" component={ListExample} />
          <Route path="/positioning" component={PositioningExample} />
          <Route path="/preloaders" component={PreloaderExample} />
          <Route path="/pricing-tables" component={PricingTableExample} />
          <Route path="/progress-meters" component={ProgressMeterExample} />
          <Route path="/reset" component={ResetExample} />
          <Route path="/responsive" component={ResponsiveExample} />
          <Route path="/slide" component={SlideExample} />
          <Route path="/steps" component={StepExample} />
          <Route path="/thumbnails" component={ThumbnailExample} />
          <Route path="/typography" component={TypographyExample} />
        </Switch>
      </div>
    );
  }
}

export default App;
