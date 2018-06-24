import React from 'react';
import { shallow, render } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import NavigationMain from '@/components/NavigationMain/NavigationMain';

let app;

beforeEach(() => {
  app = shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
});

describe('layout', () => {
  it('has navigation', () => {
    expect(app.find(NavigationMain).length).toBe(1);
  });
});
