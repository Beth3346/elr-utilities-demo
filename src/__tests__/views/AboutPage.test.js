import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import AboutPage from '@/views/AboutPage/AboutPage';

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

describe('About Page', () => {
  it('should display about page', () => {
    const { container } = renderWithRouter(<AboutPage />);
    expect(container.innerHTML).toMatch('About ELR Utilities');
  });
});
