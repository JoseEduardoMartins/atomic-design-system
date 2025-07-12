import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
  it('renderiza o select corretamente', () => {
    render(
      <Select>
        <option value="">Selecione uma opção</option>
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
      </Select>
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('aplica as variantes corretamente', () => {
    const { rerender } = render(
      <Select variant="primary" selectSize="lg">
        <option value="">Selecione</option>
      </Select>
    );

    let select = screen.getByRole('combobox');
    expect(select).toHaveClass('border-blue-600'); // primary variant
    expect(select).toHaveClass('px-4', 'py-3', 'text-lg'); // lg size

    rerender(
      <Select variant="error" selectSize="sm">
        <option value="">Selecione</option>
      </Select>
    );
    select = screen.getByRole('combobox');
    expect(select).toHaveClass('border-red-500'); // error variant
    expect(select).toHaveClass('px-2', 'py-1', 'text-sm'); // sm size
  });

  it('aplica estado de erro corretamente', () => {
    render(
      <Select error>
        <option value="">Selecione</option>
      </Select>
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('border-red-500');
    expect(select).toHaveAttribute('aria-invalid', 'true');
  });

  it('aplica estado desabilitado corretamente', () => {
    render(
      <Select disabled>
        <option value="">Selecione</option>
      </Select>
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('aplica props de acessibilidade', () => {
    render(
      <Select aria-label="Selecione uma opção" aria-describedby="help-text">
        <option value="">Selecione</option>
      </Select>
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-label', 'Selecione uma opção');
    expect(select).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('funciona com forwardRef', () => {
    const ref = vi.fn();
    render(
      <Select ref={ref}>
        <option value="">Selecione</option>
      </Select>
    );
    const select = screen.getByRole('combobox');
    expect(ref).toHaveBeenCalledWith(select);
  });

  it('aplica className customizada', () => {
    render(
      <Select className="custom-class">
        <option value="">Selecione</option>
      </Select>
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('custom-class');
  });

  it('propaga eventos corretamente', () => {
    const handleChange = vi.fn();
    render(
      <Select onChange={handleChange}>
        <option value="">Selecione</option>
        <option value="1">Opção 1</option>
      </Select>
    );
    const select = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(select, { target: { value: '1' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('usa valores padrão corretos', () => {
    render(
      <Select>
        <option value="">Selecione</option>
      </Select>
    );
    const select = screen.getByRole('combobox');

    // Verifica se as classes padrão estão aplicadas
    expect(select).toHaveClass('border-zinc-300'); // variant default
    expect(select).toHaveClass('px-3', 'py-2', 'text-base'); // size md
    expect(select).toHaveAttribute('aria-invalid', 'false'); // error false
  });
});
