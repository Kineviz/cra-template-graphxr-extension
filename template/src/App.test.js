import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn ant design link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn Ant Design/i);
  expect(linkElement).toBeInTheDocument();
});
