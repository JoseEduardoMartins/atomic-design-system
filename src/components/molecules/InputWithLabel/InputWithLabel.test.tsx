import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { InputWithLabel } from './InputWithLabel';

describe('InputWithLabel', () => {
  it('renderiza label e input corretamente', () => {
    render(<InputWithLabel label="Nome" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
  });

  it('chama onChange ao digitar', () => {
    const handleChange = vi.fn();
    render(<InputWithLabel label="Nome" value="" onChange={handleChange} />);
    const input = screen.getByLabelText('Nome');
    fireEvent.change(input, { target: { value: 'Eduardo' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('passa placeholder corretamente', () => {
    render(
      <InputWithLabel
        label="Nome"
        value=""
        onChange={() => {}}
        placeholder="Digite seu nome"
      />
    );
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument();
  });
});
