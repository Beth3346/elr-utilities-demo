import React, { Component } from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Alert from '@/components/Alert/Alert';

class AlertExample extends Component {
  state = {
    show: false
  };

  handleAlert = display => this.setState(show => ({ show: display }));

  render() {
    return (
      <div>
        <Header heading="Alert">Alert Example</Header>
        <ContentMain>
          <section id="alerts">
            <ExampleSection heading="Alert" subheading="">
              <button
                onClick={() => this.handleAlert(true)}
                className="elr-button elr-button-primary"
              >
                Launch Alert
              </button>
              <Alert
                title="An Alert"
                handleAlert={this.handleAlert}
                show={this.state.show}
                buttonText="Close"
              >
                <p>This is some content</p>
              </Alert>
            </ExampleSection>
          </section>
        </ContentMain>
      </div>
    );
  }
}

export default AlertExample;
