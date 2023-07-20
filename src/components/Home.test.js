import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// Mock the react-router useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ pathname: '/' }),
}));

test('renders welcome message', () => {
  // Arrange (Render the Home component within the MemoryRouter)
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  // Assert (Check if the welcome message is rendered)
  const welcomeMessage = getByText(/Welcome To Our Page/i);
  expect(welcomeMessage).toBeInTheDocument();
});
