import React from 'react';
import { getByText, getByTestId } from 'dom-testing-library';
import { render, cleanup, wait } from 'react-testing-library';
import { createMemoryHistory } from 'history';
// import { withRouter } from 'react-router';
import { Router } from 'react-router-dom';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import CommentExample from '@/views/CommentExample/CommentExample';

afterEach(cleanup);
function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
}

describe('CommentExample', () => {
  it('should display comment page', () => {
    const { container } = renderWithRouter(<CommentExample />);
    getByText(container, 'Comments', { selector: 'h1' });
    getByText(container, 'Comments Example', { selector: 'p' });
  });
  it('should display comments', () => {
    const { container } = renderWithRouter(<CommentExample />);

    const main = getByTestId(container, 'main-content');
    getByText(main, 'This article is so interesting!');
    getByText(main, 'This is another reply');
  });
});
