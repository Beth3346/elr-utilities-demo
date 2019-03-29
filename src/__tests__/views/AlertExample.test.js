import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { withRouter } from 'react-router';
import { Link, Route, Router, Switch } from 'react-router-dom';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import AlertExample from '@/views/AlertExample/AlertExample';

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

test('full app rendering/navigating', () => {
  const { container } = renderWithRouter(<AlertExample />);
  expect(container.innerHTML).toMatch('Alert');
});
