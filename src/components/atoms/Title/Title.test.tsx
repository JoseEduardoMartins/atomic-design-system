import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('Title component', () => {
  it('renders the children correctly', () => {
    render(<Title>My Title</Title>);
    expect(screen.getByText('My Title')).toBeDefined();
  });
});
