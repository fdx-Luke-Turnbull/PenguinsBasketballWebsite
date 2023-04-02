import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {axe, toHaveNoViolations} from 'jest-axe'

  import Home from './Components/Main/Home/Home';
  import AboutUs from './Components/Main/AboutUs/AboutUs';
  import Roster from './Components/Main/Roster/Roster';
  import Schedule from './Components/Main/Schedule/Schedule';
  import Standings from './Components/Main/Standings/Standings';
  import MailingListForm from './Components/Main/Community/MailingList';
  import Gallery from './Components/Main/Gallery/Gallery';
  import Map from './Components/Main/Contact/Map';
  
  //Test to confirm image carousel includes valid src attributes
  describe('Home', () => {
    test('renders all carousel images', () => {
      render(<Home />);
      const carouselImages = screen.getAllByAltText(/carouselbackground\d/i);
      carouselImages.forEach((image) => {
        expect(image).toHaveAttribute('src');
        expect(image).toBeVisible();
      });
    });
  });


//test About Section includes reference to club.
test('renders Penguins about', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/Penguin/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Roster', () => {
  test('renders all team roster images', () => {
    render(<Roster />);
    const rosterImages = screen.getAllByAltText(/Player/i);
    rosterImages.forEach((player) => {
      expect(player).toHaveAttribute('src');
      expect(player).toBeVisible();
    });
  });
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


// test to check all videos contain valid src attributes
describe('Gallery Component', () => {
  test('only contains active iframe src links', async () => {
    render(<Gallery />);
    const iframes = await screen.findAllByTitle(/youtube video/i);

    iframes.forEach((iframe) => {
      const frame = document.createElement('iframe');
      frame.src = iframe.src;
      frame.onload = () => {
        expect(frame.contentWindow.location.href).not.toBe('about:blank');
      };
      document.body.appendChild(frame);
    });
  });
});


//test contact iframe
describe('Contact Component', () => {
  test('only contains iframe', () => {
    render(<Map />)
    const iframeElement = screen.getByTitle('Map Location Embed');
    expect(iframeElement).toBeInTheDocument();
  });
});