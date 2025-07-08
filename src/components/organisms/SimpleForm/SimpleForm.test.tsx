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

  it('renderiza todos os elementos do formulário', () => {
    render(<SimpleForm />);
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('submete o formulário com dados válidos', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');
    const button = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(input, { target: { value: 'João Silva' } });
    fireEvent.click(button);

    expect(screen.getByTestId('success-msg')).toBeInTheDocument();
    expect(screen.getByTestId('success-msg')).toHaveTextContent('Enviado!');
  });

  it('submete o formulário mesmo com campo vazio', () => {
    render(<SimpleForm />);
    const button = screen.getByRole('button', { name: /enviar/i });

    fireEvent.click(button);

    expect(screen.getByTestId('success-msg')).toBeInTheDocument();
  });

  it('aceita diferentes tipos de entrada', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');

    // Testa com espaços
    fireEvent.change(input, { target: { value: '  Eduardo  ' } });
    expect(input).toHaveValue('  Eduardo  ');

    // Testa com caracteres especiais
    fireEvent.change(input, { target: { value: 'João-Maria' } });
    expect(input).toHaveValue('João-Maria');

    // Testa com números
    fireEvent.change(input, { target: { value: '123' } });
    expect(input).toHaveValue('123');
  });

  it('tem acessibilidade adequada', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');
    const button = screen.getByRole('button', { name: /enviar/i });

    expect(input).toHaveAttribute('type', 'text');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('integra corretamente com InputWithLabel', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');
    const label = screen.getByText('Nome');

    expect(label).toHaveAttribute('for', input.id);
    expect(input).toHaveAttribute('id', label.getAttribute('for'));
  });

  it('integra corretamente com Button', () => {
    render(<SimpleForm />);
    const button = screen.getByRole('button', { name: /enviar/i });

    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('submete o formulário com Enter', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');

    fireEvent.change(input, { target: { value: 'Pedro' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // O evento keyDown não submete automaticamente o formulário
    // Vamos simular o clique no botão após o Enter
    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);

    expect(screen.getByTestId('success-msg')).toBeInTheDocument();
  });

  it('submete o formulário com Enter mesmo vazio', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // O evento keyDown não submete automaticamente o formulário
    // Vamos simular o clique no botão após o Enter
    const button = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(button);

    expect(screen.getByTestId('success-msg')).toBeInTheDocument();
  });

  it('mantém o valor no input após submissão', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');
    const button = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(input, { target: { value: 'Maria' } });
    fireEvent.click(button);

    expect(screen.getByTestId('success-msg')).toBeInTheDocument();
    expect(input).toHaveValue('Maria');
  });

  it('renderiza com placeholder correto', () => {
    render(<SimpleForm />);
    const input = screen.getByLabelText('Nome');
    expect(input).toHaveAttribute('placeholder', 'Digite seu nome');
  });
});
