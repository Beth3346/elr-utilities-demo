import React from 'react';
import { shallow, render } from 'enzyme';

import App from '@/views/App/App';
import Header from '@/components/Header/Header';
import NavigationMain from '@/components/NavigationMain/NavigationMain';
import ContentMain from '@/components/ContentMain/ContentMain';

let app;

beforeEach(() => {
  app = shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

describe('layout', () => {
  it('has navigation', () => {
    expect(app.find(NavigationMain).length).toBe(1);
    expect(app.find(NavigationMain).html()).toMatchSnapshot();
  });
  it('has a header', () => {
    expect(app.find(Header).length).toBe(1);
    expect(app.find(Header).html()).toMatchSnapshot();
  });
  it('has main content', () => {
    expect(app.find(ContentMain).length).toBe(1);
    expect(app.find(ContentMain).html()).toMatchSnapshot();
  });
});
