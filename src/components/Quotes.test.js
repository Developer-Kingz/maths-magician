// Quotes.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Quotes from './Quotes';

test('Quotes component matches snapshot', () => {
  // Wrap Quotes component in MemoryRouter
  const { asFragment } = render(
    <MemoryRouter>
      <Quotes />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
