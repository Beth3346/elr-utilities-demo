import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { createMemoryHistory } from 'history';
// import { withRouter } from 'react-router';
import { Router } from 'react-router-dom';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import App from '@/App';

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
  const { container } = renderWithRouter(<App />);
  expect(container.innerHTML).toMatch('ELR Utilities');
});
