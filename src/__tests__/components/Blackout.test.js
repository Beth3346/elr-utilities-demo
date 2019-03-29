import React from 'react';
import { getByTestId, getByText } from 'dom-testing-library';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Blackout from '@/components/Blackout/Blackout';

describe('Blackout', () => {
  it('should accept some props', () => {
    const { container } = render(
      <Blackout show={false} handleToggle={() => {}}>
        <p>This is some content</p>
      </Blackout>
    );

    getByText(container, 'This is some content');
  });
  it('should call function when close button is clicked', () => {
    const clickEvent = jest.fn();
    const { container } = render(
      <Blackout
        show={false}
        handleToggle={() => {
          clickEvent();
        }}
      >
        <p>This is some content</p>
      </Blackout>
    );
    const button = getByTestId(container, 'blackout-close');
    button.click();

    expect(clickEvent).toHaveBeenCalledTimes(1);
  });
  it('should have a close button', () => {
    const { container } = render(
      <Blackout show={false} handleToggle={() => {}}>
        <p>This is some content</p>
      </Blackout>
    );
    const button = getByText(container, '×');
    expect(button.nodeName.toLowerCase()).toBe('button');
  });
});
