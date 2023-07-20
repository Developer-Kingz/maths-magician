import React from 'react';
import {
  render, waitFor, screen, act,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import Quotes from './Quotes';
import '@testing-library/jest-dom/extend-expect';

jest.useFakeTimers();

beforeEach(() => {
  jest.clearAllMocks();
  fetchMock.enableMocks();
});

test('renders error message', async () => {
  fetchMock.mockRejectOnce(new Error('API Error'));

  render(
    <MemoryRouter>
      <Quotes />
    </MemoryRouter>,
  );

  act(() => jest.runAllTimers());

  await waitFor(() => {
    const errorMessage = screen.queryByText('Cannot load data');
    expect(errorMessage).toBeInTheDocument();
  });
});
