import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renderiza o checkbox corretamente', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('aplica as variantes corretamente', () => {
    const { rerender } = render(
      <Checkbox variant="primary" checkboxSize="lg" />
    );
    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('border-blue-600'); // primary variant
    expect(checkbox).toHaveClass('h-6', 'w-6'); // lg size

    rerender(<Checkbox variant="error" checkboxSize="sm" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('border-red-500'); // error variant
    expect(checkbox).toHaveClass('h-4', 'w-4'); // sm size
  });

  it('aplica estado de erro corretamente', () => {
    render(<Checkbox error />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('border-red-500');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  it('aplica estado desabilitado corretamente', () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('aplica estado indeterminate corretamente', () => {
    render(<Checkbox indeterminate />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    // O atributo indeterminate não aparece no DOM, mas pode ser testado via propriedade
    expect((checkbox as HTMLInputElement).indeterminate).toBe(true);
  });

  it('aplica props de acessibilidade', () => {
    render(
      <Checkbox aria-label="Aceitar termos" aria-describedby="help-text" />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Aceitar termos');
    expect(checkbox).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('funciona com forwardRef', () => {
    const ref = vi.fn();
    render(<Checkbox ref={ref} />);
    const checkbox = screen.getByRole('checkbox');
    expect(ref).toHaveBeenCalledWith(checkbox);
  });

  it('aplica className customizada', () => {
    render(<Checkbox className="custom-class" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('custom-class');
  });

  it('propaga eventos corretamente', () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  it('usa valores padrão corretos', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('border-zinc-300'); // variant default
    expect(checkbox).toHaveClass('h-5', 'w-5'); // size md
    expect(checkbox).toHaveAttribute('aria-invalid', 'false'); // error false
  });
});
