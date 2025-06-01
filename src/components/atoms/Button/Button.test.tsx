import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders a button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/click me/i)).toBeDefined();
});