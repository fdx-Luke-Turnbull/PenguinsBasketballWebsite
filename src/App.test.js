import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
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


describe('Navigation', () => {
  test('Clicking on a link should update the route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Navigation />
        <Route path="/schedule" render={() => <div>Schedule</div>} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Schedule'));

    expect(container.innerHTML).toMatch('schedule');
  });
});
