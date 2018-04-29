import React from 'react';
import ReactDOM from 'react-dom';
import Graphics from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Graphics />, div);
  ReactDOM.unmountComponentAtNode(div);
});
