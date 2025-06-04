import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label component', () => {
  it('renders with default text', () => {
    render(<Label>My Label</Label>);
    expect(screen.getByText('My Label')).toBeDefined();
  });
});
