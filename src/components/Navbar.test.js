import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter to wrap the Navbar component
import '@testing-library/jest-dom/extend-expect'; // For extending expect with additional matchers
import Navbar from './Navbar';

test('renders Navbar correctly', () => {
  // Arrange (Render the Navbar component within the MemoryRouter)
  const { asFragment } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  // Act (No action needed for this test)

  // Assert (Check if the rendered output matches the snapshot)
  expect(asFragment()).toMatchSnapshot();
});
