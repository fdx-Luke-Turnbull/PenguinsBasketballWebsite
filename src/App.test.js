import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {axe, toHaveNoViolations} from 'jest-axe'


  import AboutUs from './Components/Main/AboutUs/AboutUs';
  import Schedule from './Components/Main/Schedule/Schedule';
  import Standings from './Components/Main/Standings/Standings';
  import MailingListForm from './Components/Main/Community/MailingList';
  import Map from './Components/Main/Contact/Map'


//test About Section includes reference to club.

test('renders Penguins about', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/Penguin/i);
  expect(linkElement).toBeInTheDocument();
});

// tests render of schedule
describe('Schedule', () => {
  test('renders Schedule component', () => {
    render(<Schedule />);
  });
});

//test render of standings table
describe('Standings Table>', () => {
  test('renders a table', () => {
    render(<Standings />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });
});

//test mailing list form rendered correctly
describe('Mailing List Component', () => {
  test('is accessible to all', async () => {
    expect.extend(toHaveNoViolations);
    const {container} = render(<MailingListForm />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();

  });
});

//test form submission
describe('MailingList Component', () => {
  test('form message sent', () => {
    render(<MailingListForm />);
    window.alert = jest.fn();

    const nameInput = screen.getByPlaceholderText('Enter your name');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.click(submitButton);  

    expect(window.alert).toHaveBeenCalledWith('Welcome to the team John Doe! Keep an eye on your inbox for exciting news and developments.');

  })
});


//test contact iframe
describe('Contact Component', () => {
  test('only contains iframe', () => {
    render(<Map />)
    const iframeElement = screen.getByTitle('Map Location Embed');
    expect(iframeElement).toBeInTheDocument();
  });
});