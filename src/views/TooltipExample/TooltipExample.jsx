import React, { Component } from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import ToolTip from '../../components/ToolTip/ToolTip';
import './TooltipExample.scss';

class TooltipsExample extends Component {
  state = {
    tooltips: [
      {
        id: 1,
        show: false
      },
      {
        id: 2,
        show: false
      }
    ]
  };

  handleMouseOver = id =>
    this.setState(tooltips => {
      return this.state.tooltips.map(o => {
        if (o.id === id) {
          o.show = true;
        }

        return o;
      });
    });

  handleMouseOut = id =>
    this.setState(tooltips => {
      return this.state.tooltips.map(o => {
        if (o.id === id) {
          o.show = false;
        }

        return o;
      });
    });

  render() {
    return (
      <div>
        <Header heading="Tooltips">Tooltips Example</Header>
        <ContentMain>
          <section id="tooltips">
            <ExampleSection
              heading="Tooltips"
              subheading="Tool tips are useful for adding a little more context to your content"
            >
              <div className="tooltip-holder">
                <ToolTip show={true} direction="top">
                  Some text
                </ToolTip>
              </div>
              <div className="tooltip-holder">
                <ToolTip show={true} direction="left">
                  Some text
                </ToolTip>
              </div>
              <div className="tooltip-holder">
                <ToolTip show={true} direction="right">
                  Some text
                </ToolTip>
              </div>
              <div className="tooltip-holder">
                <ToolTip show={true} direction="bottom">
                  Some text
                </ToolTip>
              </div>
            </ExampleSection>
            <ExampleSection heading="Dynamic Tooltips" subheading="">
              <p className="tooltip-example">
                Lorem ipsum dolor sit amet&nbsp;
                <span
                  onMouseOver={() => this.handleMouseOver(1)}
                  onMouseOut={() => this.handleMouseOut(1)}
                  className="has-tooltip"
                >
                  <ToolTip show={this.state.tooltips[0].show} direction="top">
                    Some text
                  </ToolTip>
                  consectetur
                </span>
                &nbsp;adipisicing elit.&nbsp;
                <span
                  onMouseOver={() => this.handleMouseOver(2)}
                  onMouseOut={() => this.handleMouseOut(2)}
                  className="has-tooltip"
                >
                  <ToolTip show={this.state.tooltips[1].show} direction="top">
                    Some text
                  </ToolTip>
                  Voluptas
                </span>
                &nbsp;officia et dolor voluptatem, doloremque consectetur? Totam
                sed non animi deleniti possimus adipisci illo, cum, iure labore
                ab optio debitis dolor nemo mollitia, repellendus quasi ratione
                sequi. Minus repudiandae, inventore, quos quam deleniti
                veritatis odio laudantium, dolores soluta sint velit illo.
              </p>
            </ExampleSection>
          </section>
        </ContentMain>
      </div>
    );
  }
}

export default TooltipsExample;
