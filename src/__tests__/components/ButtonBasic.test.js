import React from 'react';
import { getByText } from 'dom-testing-library';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import ButtonBasic from '@/components/Buttons/ButtonBasic';

describe('ButtonBasic', () => {
  it('should accept some props', () => {
    const { container } = render(
      <ButtonBasic
        classes="button-success"
        icon={<i>Icon</i>}
        handleClick={() => {}}
      >
        Basic Button
      </ButtonBasic>
    );

    const button = getByText(container, 'Basic Button');
    const icon = getByText(container, 'Icon');

    expect(button.nodeName.toLowerCase()).toBe('button');
    expect(icon.nodeName.toLowerCase()).toBe('i');
    expect(button.classList).toContain('button-success');
  });
  it('should execute a function when clicked', () => {
    const clickEvent = jest.fn();
    const { container } = render(
      <ButtonBasic
        classes="button-success"
        handleClick={() => {
          clickEvent('something');
        }}
      >
        Basic Button
      </ButtonBasic>
    );

    const button = getByText(container, 'Basic Button');
    button.click();

    expect(clickEvent).toHaveBeenCalledTimes(1);
    expect(clickEvent).toHaveBeenCalledWith('something');
  });
});
