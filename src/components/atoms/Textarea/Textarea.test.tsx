import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renderiza o textarea corretamente', () => {
    render(<Textarea placeholder="Digite aqui" />);
    const textarea = screen.getByPlaceholderText('Digite aqui');
    expect(textarea).toBeInTheDocument();
  });

  it('aplica as variantes corretamente', () => {
    const { rerender } = render(
      <Textarea variant="primary" textareaSize="lg" placeholder="Teste" />
    );

    let textarea = screen.getByPlaceholderText('Teste');
    expect(textarea).toHaveClass('border-blue-600'); // primary variant
    expect(textarea).toHaveClass('px-4', 'py-3', 'text-lg'); // lg size

    rerender(
      <Textarea variant="error" textareaSize="sm" placeholder="Teste" />
    );
    textarea = screen.getByPlaceholderText('Teste');
    expect(textarea).toHaveClass('border-red-500'); // error variant
    expect(textarea).toHaveClass('px-2', 'py-1', 'text-sm'); // sm size
  });

  it('aplica estado de erro corretamente', () => {
    render(<Textarea error placeholder="Teste" />);
    const textarea = screen.getByPlaceholderText('Teste');
    expect(textarea).toHaveClass('border-red-500');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('aplica estado desabilitado corretamente', () => {
    render(<Textarea disabled placeholder="Teste" />);
    const textarea = screen.getByPlaceholderText('Teste');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('aplica props de acessibilidade', () => {
    render(
      <Textarea
        placeholder="Teste"
        aria-label="Campo de teste"
        aria-describedby="help-text"
      />
    );
    const textarea = screen.getByPlaceholderText('Teste');
    expect(textarea).toHaveAttribute('aria-label', 'Campo de teste');
    expect(textarea).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('funciona com forwardRef', () => {
    const ref = vi.fn();
    render(<Textarea ref={ref} placeholder="Teste" />);
    const textarea = screen.getByPlaceholderText('Teste');
    expect(ref).toHaveBeenCalledWith(textarea);
  });

  it('aplica className customizada', () => {
    render(<Textarea className="custom-class" placeholder="Teste" />);
    const textarea = screen.getByPlaceholderText('Teste');
    expect(textarea).toHaveClass('custom-class');
  });

  it('propaga eventos corretamente', () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} placeholder="Teste" />);
    const textarea = screen.getByPlaceholderText(
      'Teste'
    ) as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: 'teste' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('usa valores padrão corretos', () => {
    render(<Textarea placeholder="Teste" />);
    const textarea = screen.getByPlaceholderText('Teste');

    // Verifica se as classes padrão estão aplicadas
    expect(textarea).toHaveClass('border-zinc-300'); // variant default
    expect(textarea).toHaveClass('px-3', 'py-2', 'text-base'); // size md
    expect(textarea).toHaveAttribute('aria-invalid', 'false'); // error false
  });
});
