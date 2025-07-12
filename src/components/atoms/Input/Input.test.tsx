import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renderiza o input corretamente', () => {
    render(<Input placeholder="Digite aqui" />);
    const input = screen.getByPlaceholderText('Digite aqui');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text'); // tipo padrão
  });

  it('aplica as variantes corretamente', () => {
    const { rerender } = render(
      <Input variant="primary" inputSize="lg" placeholder="Teste" />
    );

    let input = screen.getByPlaceholderText('Teste');
    expect(input).toHaveClass('border-blue-600'); // primary variant
    expect(input).toHaveClass('px-4', 'py-3', 'text-lg'); // lg size

    rerender(<Input variant="error" inputSize="sm" placeholder="Teste" />);
    input = screen.getByPlaceholderText('Teste');
    expect(input).toHaveClass('border-red-500'); // error variant
    expect(input).toHaveClass('px-2', 'py-1', 'text-sm'); // sm size
  });

  it('aplica estado de erro corretamente', () => {
    render(<Input error placeholder="Teste" />);
    const input = screen.getByPlaceholderText('Teste');
    expect(input).toHaveClass('border-red-500');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('aplica estado desabilitado corretamente', () => {
    render(<Input disabled placeholder="Teste" />);
    const input = screen.getByPlaceholderText('Teste');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('aplica props de acessibilidade', () => {
    render(
      <Input
        placeholder="Teste"
        aria-label="Campo de teste"
        aria-describedby="help-text"
      />
    );
    const input = screen.getByPlaceholderText('Teste');
    expect(input).toHaveAttribute('aria-label', 'Campo de teste');
    expect(input).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('aceita diferentes tipos de input', () => {
    const { rerender } = render(<Input type="email" placeholder="Email" />);
    let input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('type', 'email');

    rerender(<Input type="password" placeholder="Senha" />);
    input = screen.getByPlaceholderText('Senha');
    expect(input).toHaveAttribute('type', 'password');

    rerender(<Input type="number" placeholder="Número" />);
    input = screen.getByPlaceholderText('Número');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('funciona com forwardRef', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Teste" />);
    const input = screen.getByPlaceholderText('Teste');
    expect(ref).toHaveBeenCalledWith(input);
  });

  it('aplica className customizada', () => {
    render(<Input className="custom-class" placeholder="Teste" />);
    const input = screen.getByPlaceholderText('Teste');
    expect(input).toHaveClass('custom-class');
  });

  it('propaga eventos corretamente', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Teste" />);
    const input = screen.getByPlaceholderText('Teste') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'teste' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('usa valores padrão corretos', () => {
    render(<Input placeholder="Teste" />);
    const input = screen.getByPlaceholderText('Teste');

    // Verifica se as classes padrão estão aplicadas
    expect(input).toHaveClass('border-zinc-300'); // variant default
    expect(input).toHaveClass('px-3', 'py-2', 'text-base'); // size md
    expect(input).toHaveAttribute('aria-invalid', 'false'); // error false
  });
});
