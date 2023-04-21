import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Test from './Test.js';

test('renders learn react link', () => {

  render(
    <BrowserRouter>
  <Test />
  
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
