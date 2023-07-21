import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Home from './Home';

test('Home component matches snapshot', () => {
  // Wrap Home component in MemoryRouter
  const { asFragment } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
