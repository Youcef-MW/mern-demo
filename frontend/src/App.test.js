import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/MERN Stack Jenkins Pipeline Demo/i);
  expect(headingElement).toBeInTheDocument();
});