import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ARIA Attribute Demonstration heading', () => {
  render(<App />);
  const heading = screen.getByText(/ARIA Attribute Demonstration/i);
  expect(heading).toBeInTheDocument();
});
