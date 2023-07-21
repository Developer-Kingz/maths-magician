import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

test('renders Navbar correctly', () => {
  // Arrange (Render the Navbar component within the MemoryRouter)
  const { asFragment } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  // Assert (Check if the rendered output matches the snapshot)
  expect(asFragment()).toMatchSnapshot();
});
