import React, { Component } from 'react';
import './Tabs.scss';
import TabContent from '@/components/Tabs/TabContent';
import TabNav from '@/components/Tabs/TabNav';
import img from '@/assets/images/cat.jpg';
import img2 from '@/assets/images/cat2.jpg';
import img3 from '@/assets/images/cat3.jpg';

class Tabs extends Component {
  state = {
    current: 1
  };

  tabs = [
    {
      id: 1,
      title: 'Tab 1'
    },
    {
      id: 2,
      title: 'Tab 2'
    },
    {
      id: 3,
      title: 'Tab 3'
    },
    {
      id: 4,
      title: 'Tab 4'
    }
  ];

  handleClick = tabIndex => {
    this.setState(({ current }) => {
      return tabIndex === current ? { current: 0 } : { current: tabIndex };
    });
  };

  render() {
    return (
      <div className="elr-tabs" data-tab-type="top">
        <TabNav
          handleClick={this.handleClick}
          current={this.state.current}
          tabs={this.tabs}
        />
        <div className="elr-tab-holder">
          <TabContent show={this.state.current === 1} title="Tab 1">
            <figure>
              <img src={img} alt="" />
            </figure>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit suscipit neque, iure perferendis impedit inventore
              exercitationem veniam mollitia vitae fugit deleniti nulla, harum a
              nam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolore, officiis porro. Voluptas quaerat minus perferendis dolorum
              totam magni consequuntur rerum?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officiis porro. Voluptas quaerat minus perferendis dolorum totam
              magni consequuntur rerum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat iure ad non explicabo voluptates numquam,
              fuga quo ducimus sequi facere.
            </p>
          </TabContent>
          <TabContent show={this.state.current === 2} title="Tab 2">
            <figure>
              <img src={img2} alt="" />
            </figure>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit suscipit neque, iure perferendis impedit inventore
              exercitationem veniam mollitia vitae fugit deleniti nulla, harum a
              nam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolore, officiis porro. Voluptas quaerat minus perferendis dolorum
              totam magni consequuntur rerum?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officiis porro. Voluptas quaerat minus perferendis dolorum totam
              magni consequuntur rerum? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dolore, officiis porro. Voluptas quaerat minus
              perferendis dolorum totam magni consequuntur rerum?
            </p>
          </TabContent>
          <TabContent show={this.state.current === 3} title="Tab 3">
            <figure>
              <img src={img3} alt="" />
            </figure>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit suscipit neque, iure perferendis impedit inventore
              exercitationem veniam mollitia vitae fugit deleniti nulla, harum a
              nam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt eos cum debitis provident exercitationem officia
              necessitatibus animi voluptatibus adipisci laboriosam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officiis porro. Voluptas quaerat minus perferendis dolorum totam
              magni consequuntur rerum? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dolore, officiis porro. Voluptas quaerat minus
              perferendis dolorum totam magni consequuntur rerum?
            </p>
          </TabContent>
          <TabContent show={this.state.current === 4} title="Tab 4">
            <figure>
              <img src={img} alt="" />
            </figure>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit suscipit neque, iure perferendis impedit inventore
              exercitationem veniam mollitia vitae fugit deleniti nulla, harum a
              nam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis, asperiores.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              officiis porro. Voluptas quaerat minus perferendis dolorum totam
              magni consequuntur rerum? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Dolore, officiis porro. Voluptas quaerat minus
              perferendis dolorum totam magni consequuntur rerum?
            </p>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Tabs;
