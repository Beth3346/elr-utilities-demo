import React, { Component } from 'react';
import Header from './components/Header/Header';
import NavigationMain from './components/NavigationMain/NavigationMain';
import SidebarMain from './components/SidebarMain/SidebarMain';
import ContentHome from './components/ContentHome/ContentHome';
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
            <ContentHome>
              <h2 className="example-heading">Get Started</h2>
              <h3 className="example-subheading">
                Why Create a Sass Mixin Library
              </h3>
              <p>
                ELR Utilities is a framework of Sass Mixins and CSS designed to
                speed up and streamline the development process.
              </p>
              <p>
                I created this utility library because I found myself spending a
                lot of time looking up CSS syntax for stuff I used all the time.
                Especially clearfix. Using mixins also helps with consistency in
                CSS styles. If I decide I want to use a different method for
                styling or learn some new techniques I can update 1 mixin
                instead of scouring my entire CSS file.
              </p>
              <h3 className="example-subheading">
                The Future of ELR Utilities and CSS Libraries
              </h3>
              <p>
                While I do still think that Sass and CSS Libraries are useful
                for producivity I think that many of them will fall out of use
                in the future. JavaScript frameworks like React and Vue make it
                easier to create reusable, styled components. Using Sass with
                these frameworks can just create more trouble than it solves.
              </p>
              <p>
                I continue to use and maintain ELR Utilities because
                unfortunately not all of my projects use the most modern,
                cutting edge JavaScript frameworks. Sometimes I just need to
                build a WordPress theme or a landing page quickly. This is where
                a mixin library can really help producivity.
              </p>
              <h3 className="example-subheading">
                Recent Updates to ELR Utilities
              </h3>
              <p>
                Recently I decided to break up ELR Sass Utilities into smaller
                modules. I noticed that I typically only used a small number of
                mixins in each project so it really seemed uncessessary to
                include the entire libaray. All of these modules are available
                on npm. I have also added compiled CSS to each module for use in
                projects that don't use Scss.
              </p>
            </ContentHome>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
