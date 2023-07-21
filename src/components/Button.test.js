import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button component matches snapshot', () => {
  const { asFragment } = render(
    <Button text="Click Me" className="custom-btn" onClick={() => {}} />,
  );
  expect(asFragment()).toMatchSnapshot();
});
