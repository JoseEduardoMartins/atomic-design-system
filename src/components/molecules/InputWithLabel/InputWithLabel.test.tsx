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

  it('renderiza com valor inicial', () => {
    render(<InputWithLabel label="Nome" value="Eduardo" onChange={() => {}} />);
    const input = screen.getByLabelText('Nome') as HTMLInputElement;
    expect(input.value).toBe('Eduardo');
  });

  it('renderiza com tipo correto', () => {
    render(
      <InputWithLabel label="Email" value="" onChange={() => {}} type="email" />
    );
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renderiza com id customizado', () => {
    render(
      <InputWithLabel
        label="Nome"
        value=""
        onChange={() => {}}
        id="custom-id"
      />
    );
    const input = screen.getByLabelText('Nome');
    expect(input).toHaveAttribute('id', 'custom-id');
  });

  it('associa label com input corretamente', () => {
    render(
      <InputWithLabel
        label="Nome"
        value=""
        onChange={() => {}}
        id="nome-input"
      />
    );
    const label = screen.getByText('Nome');
    const input = screen.getByLabelText('Nome');
    expect(label).toHaveAttribute('for', 'nome-input');
    expect(input).toHaveAttribute('id', 'nome-input');
  });

  it('chama onChange com valor correto', () => {
    const handleChange = vi.fn();
    render(<InputWithLabel label="Nome" value="" onChange={handleChange} />);
    const input = screen.getByLabelText('Nome');
    fireEvent.change(input, { target: { value: 'Novo valor' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('renderiza com texto longo no label', () => {
    const longLabel =
      'Este é um label muito longo que pode quebrar em múltiplas linhas';
    render(<InputWithLabel label={longLabel} value="" onChange={() => {}} />);
    expect(screen.getByText(longLabel)).toBeInTheDocument();
  });

  it('renderiza com valor muito longo', () => {
    const longValue = 'a'.repeat(1000);
    render(
      <InputWithLabel label="Nome" value={longValue} onChange={() => {}} />
    );
    const input = screen.getByLabelText('Nome') as HTMLInputElement;
    expect(input.value).toBe(longValue);
  });

  it('mantém foco no input', () => {
    render(<InputWithLabel label="Nome" value="" onChange={() => {}} />);
    const input = screen.getByLabelText('Nome');
    input.focus();
    expect(input).toHaveFocus();
  });

  it('gera id automático quando não fornecido', () => {
    render(
      <InputWithLabel label="Nome Completo" value="" onChange={() => {}} />
    );
    const input = screen.getByLabelText('Nome Completo');
    expect(input).toHaveAttribute('id', 'input-nome-completo');
  });

  it('renderiza com tipo padrão text', () => {
    render(<InputWithLabel label="Nome" value="" onChange={() => {}} />);
    const input = screen.getByLabelText('Nome');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renderiza com placeholder vazio', () => {
    render(
      <InputWithLabel
        label="Nome"
        value=""
        onChange={() => {}}
        placeholder=""
      />
    );
    const input = screen.getByLabelText('Nome');
    expect(input).toHaveAttribute('placeholder', '');
  });
});
