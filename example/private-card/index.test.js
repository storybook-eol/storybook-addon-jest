import React from 'react';
import ReactDOM from 'react-dom';

import PrivateCard from './index'


describe('<PrivateCard /> rendering', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<PrivateCard />, div);
  });
});
