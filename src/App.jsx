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
import AccordionExample from '@/views/AccordionExample/AccordionExample';
import AlertExample from '@/views/AlertExample/AlertExample';
import BreadcrumbsExample from '@/views/BreadcrumbsExample/BreadcrumbsExample';
import DropdownNavExample from '@/views/DropdownNavExample/DropdownNavExample';
import FlexHelpersExample from '@/views/FlexHelpersExample/FlexHelpersExample';
import FormsExample from '@/views/FormsExample/FormsExample';
import GridExample from '@/views/GridExample/GridExample';
import ImagesExample from '@/views/ImagesExample/ImagesExample';
import InputGroupsExample from '@/views/InputGroupsExample/InputGroupsExample';
import InputsExample from '@/views/InputsExample/InputsExample';
import LayoutUtilitiesExample from '@/views/LayoutUtilitiesExample/LayoutUtilitiesExample';
import ListsExample from '@/views/ListsExample/ListsExample';
import MetroGridExample from '@/views/MetroGridExample/MetroGridExample';
import ModalExample from '@/views/ModalExample/ModalExample';
import NavigationExample from '@/views/NavigationExample/NavigationExample';
import NotificationExample from '@/views/NotificationExample/NotificationExample';
import PaginationExample from '@/views/PaginationExample/PaginationExample';
import PasswordsExample from '@/views/PasswordsExample/PasswordsExample';
import PopoverExample from '@/views/PopoverExample/PopoverExample';
import ShapesExample from '@/views/ShapesExample/ShapesExample';
import StickyNavExample from '@/views/StickyNavExample/StickyNavExample';
import StyledHeadingsExample from '@/views/StyledHeadingsExample/StyledHeadingsExample';
import TablesExample from '@/views/TablesExample/TablesExample';
import TextEffectsExample from '@/views/TextEffectsExample/TextEffectsExample';
import TooltipExample from '@/views/TooltipExample/TooltipExample';
import VideosExample from '@/views/VideosExample/VideosExample';

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
          <Route path="/accordion" component={AccordionExample} />
          <Route path="/alerts" component={AlertExample} />
          <Route path="/breadcrumbs" component={BreadcrumbsExample} />
          <Route path="/dropdown-nav" component={DropdownNavExample} />
          <Route path="/flex-helpers" component={FlexHelpersExample} />
          <Route path="/forms" component={FormsExample} />
          <Route path="/grid" component={GridExample} />
          <Route path="/images" component={ImagesExample} />
          <Route path="/input-groups" component={InputGroupsExample} />
          <Route path="/inputs" component={InputsExample} />
          <Route path="/layout-utilities" component={LayoutUtilitiesExample} />
          <Route path="/lists" component={ListsExample} />
          <Route path="/metro-grid" component={MetroGridExample} />
          <Route path="/modals" component={ModalExample} />
          <Route path="/navigation" component={NavigationExample} />
          <Route path="/notification" component={NotificationExample} />
          <Route path="/pagination" component={PaginationExample} />
          <Route path="/passwords" component={PasswordsExample} />
          <Route path="/popovers" component={PopoverExample} />
          <Route path="/shapes" component={ShapesExample} />
          <Route path="/sticky-nav" component={StickyNavExample} />
          <Route path="/styled-headings" component={StyledHeadingsExample} />
          <Route path="/tables" component={TablesExample} />
          <Route path="/text-effects" component={TextEffectsExample} />
          <Route path="/tooltips" component={TooltipExample} />
          <Route path="/videos" component={VideosExample} />
        </Switch>
      </div>
    );
  }
}

export default App;
