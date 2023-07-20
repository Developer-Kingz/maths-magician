import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extending expect with additional matchers
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to wrap the Home component
import Home from './Home';

// Mock the react-router useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Keep all non-mocked exports as they are
  useLocation: () => ({ pathname: '/' }), // Mock the useLocation hook to return a pathname
}));

test('renders welcome message', () => {
  // Arrange (Render the Home component within the MemoryRouter)
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );

  // Act (No action needed for this test)

  // Assert (Check if the welcome message is rendered)
  const welcomeMessage = getByText(/Welcome To Our Page/i);
  expect(welcomeMessage).toBeInTheDocument();
});
