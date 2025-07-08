import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SimpleForm } from './SimpleForm';

describe('SimpleForm', () => {
  it('permite digitar e submeter o formulário', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');
    fireEvent.change(input, { target: { value: 'Eduardo' } });
    expect(input).toHaveValue('Eduardo');
    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);
    expect(screen.getByTestId('success-msg')).toHaveTextContent('Enviado!');
  });
});
