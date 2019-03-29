import React from 'react';
import { getByTestId, getByText } from 'dom-testing-library';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Alert from '@/components/Alert/Alert';

describe('Alert', () => {
  it('should accept some props', () => {
    const clickEvent = jest.fn();
    const { container } = render(
      <Alert
        title="An Alert"
        show={false}
        handleAlert={() => {
          clickEvent();
        }}
        closeAlert={() => {
          clickEvent();
        }}
        buttonText="Close"
      >
        <p>This is some content</p>
      </Alert>
    );

    const button = getByText(container, 'Close');
    const title = getByText(container, 'An Alert');

    getByText(container, 'This is some content');

    expect(button.nodeName.toLowerCase()).toBe('button');
    expect(title.nodeName.toLowerCase()).toBe('h3');

    button.click();

    expect(clickEvent).toHaveBeenCalledTimes(1);
  });
  it('calls function when action button is clicked', () => {
    const clickEvent = jest.fn();
    const { container } = render(
      <Alert
        title="An Alert"
        show={false}
        handleAlert={() => {
          clickEvent(false);
        }}
        closeAlert={() => {}}
        buttonText="Close"
      >
        <p>This is some content</p>
      </Alert>
    );
    const button = getByText(container, 'Close');

    button.click();

    expect(clickEvent).toHaveBeenCalledTimes(1);
    expect(clickEvent).toHaveBeenCalledWith(false);
  });
  it('calls function when close button is clicked', () => {
    const clickEvent = jest.fn();
    const { container } = render(
      <Alert
        title="An Alert"
        show={false}
        handleAlert={() => {}}
        closeAlert={() => {
          clickEvent(false);
        }}
        buttonText="Close"
      >
        <p>This is some content</p>
      </Alert>
    );
    const button = getByTestId(container, 'blackout-close');

    button.click();

    expect(clickEvent).toHaveBeenCalledTimes(1);
    expect(clickEvent).toHaveBeenCalledWith(false);
  });
  it('calls function when blackout is clicked', () => {
    const clickEvent = jest.fn();
    const { container } = render(
      <Alert
        title="An Alert"
        show={false}
        handleAlert={() => {}}
        closeAlert={() => {
          clickEvent(false);
        }}
        buttonText="Close"
      >
        <p>This is some content</p>
      </Alert>
    );
    const blackout = getByTestId(container, 'blackout');

    blackout.click();

    expect(clickEvent).toHaveBeenCalledTimes(1);
    expect(clickEvent).toHaveBeenCalledWith(false);
  });
  it('should not close the alert if the alert element is clicked', () => {
    const clickEvent = jest.fn();
    const { container } = render(
      <Alert
        title="An Alert"
        show={false}
        handleAlert={() => {}}
        closeAlert={() => {
          clickEvent(false);
        }}
        buttonText="Close"
      >
        <p>This is some content</p>
      </Alert>
    );
    const title = getByText(container, 'An Alert');

    title.click();

    expect(clickEvent).toHaveBeenCalledTimes(0);
  });
});
