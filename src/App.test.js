import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
       // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Penguin');

    // explicit assertion
    // recommended
    expect(screen.getByText('Penguin')).toBeInTheDocument();
  });
});