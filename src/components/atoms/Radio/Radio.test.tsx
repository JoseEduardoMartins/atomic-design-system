import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renderiza o radio corretamente', () => {
    render(<Radio name="test" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('aplica as variantes corretamente', () => {
    const { rerender } = render(
      <Radio name="test" variant="primary" radioSize="lg" />
    );
    let radio = screen.getByRole('radio');
    expect(radio).toHaveClass('border-blue-600'); // primary variant
    expect(radio).toHaveClass('h-6', 'w-6'); // lg size

    rerender(<Radio name="test" variant="error" radioSize="sm" />);
    radio = screen.getByRole('radio');
    expect(radio).toHaveClass('border-red-500'); // error variant
    expect(radio).toHaveClass('h-4', 'w-4'); // sm size
  });

  it('aplica estado de erro corretamente', () => {
    render(<Radio name="test" error />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('border-red-500');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('aplica estado desabilitado corretamente', () => {
    render(<Radio name="test" disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('aplica props de acessibilidade', () => {
    render(
      <Radio
        name="test"
        aria-label="Opção de teste"
        aria-describedby="help-text"
      />
    );
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-label', 'Opção de teste');
    expect(radio).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('funciona com forwardRef', () => {
    const ref = vi.fn();
    render(<Radio name="test" ref={ref} />);
    const radio = screen.getByRole('radio');
    expect(ref).toHaveBeenCalledWith(radio);
  });

  it('aplica className customizada', () => {
    render(<Radio name="test" className="custom-class" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('custom-class');
  });

  it('propaga eventos corretamente', () => {
    const handleChange = vi.fn();
    render(<Radio name="test" onChange={handleChange} />);
    const radio = screen.getByRole('radio') as HTMLInputElement;

    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalled();
  });

  it('usa valores padrão corretos', () => {
    render(<Radio name="test" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('border-zinc-300'); // variant default
    expect(radio).toHaveClass('h-5', 'w-5'); // size md
    expect(radio).toHaveAttribute('aria-invalid', 'false'); // error false
  });
});
