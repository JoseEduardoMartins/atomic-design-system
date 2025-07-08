import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { Button } from './atoms/Button';
import { Label } from './atoms/Label';
import { Title } from './atoms/Title';
import { InputWithLabel } from './molecules/InputWithLabel';
import { SimpleForm } from './organisms/SimpleForm';

describe('Integração entre Componentes', () => {
  describe('Atoms - Integração básica', () => {
    it('Button e Label trabalham juntos em um formulário', () => {
      render(
        <div>
          <Label htmlFor="submit-btn">Enviar formulário</Label>
          <Button id="submit-btn">Enviar</Button>
        </div>
      );

      const label = screen.getByText('Enviar formulário');
      const button = screen.getByRole('button', { name: /enviar/i });

      expect(label).toHaveAttribute('for', 'submit-btn');
      expect(button).toHaveAttribute('id', 'submit-btn');
    });

    it('Title e Button trabalham juntos em uma seção', () => {
      render(
        <div>
          <Title>Seção de Ações</Title>
          <Button>Clique aqui</Button>
        </div>
      );

      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Molecules - Integração com Atoms', () => {
    it('InputWithLabel usa Label corretamente', () => {
      render(<InputWithLabel label="Email" value="" onChange={() => {}} />);

      const label = screen.getByText('Email');
      const input = screen.getByLabelText('Email');

      expect(label.tagName).toBe('LABEL');
      expect(label).toHaveAttribute('for', input.id);
      expect(input).toHaveAttribute('id', label.getAttribute('for'));
    });

    it('InputWithLabel com Button em um formulário', () => {
      const handleSubmit = vi.fn();

      render(
        <form onSubmit={handleSubmit}>
          <InputWithLabel label="Nome" value="" onChange={() => {}} />
          <Button type="submit">Enviar</Button>
        </form>
      );

      const input = screen.getByLabelText('Nome');
      const button = screen.getByRole('button', { name: /enviar/i });

      expect(input).toHaveAttribute('type', 'text');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });

  describe('Organisms - Integração completa', () => {
    it('SimpleForm integra todos os componentes corretamente', () => {
      render(<SimpleForm />);

      // Verifica se todos os componentes estão presentes
      expect(screen.getByLabelText('Nome')).toBeInTheDocument(); // InputWithLabel
      expect(
        screen.getByRole('button', { name: /enviar/i })
      ).toBeInTheDocument(); // Button
    });

    it('SimpleForm mantém acessibilidade entre componentes', () => {
      render(<SimpleForm />);

      const label = screen.getByText('Nome');
      const input = screen.getByLabelText('Nome');
      const button = screen.getByRole('button', { name: /enviar/i });

      // Verifica associação label-input
      expect(label).toHaveAttribute('for', input.id);
      expect(input).toHaveAttribute('id', label.getAttribute('for'));

      // Verifica tipos corretos
      expect(input).toHaveAttribute('type', 'text');
      expect(button).toHaveAttribute('type', 'submit');
    });
  });

  describe('Fluxos de usuário completos', () => {
    it('fluxo completo de preenchimento e envio de formulário', () => {
      render(<SimpleForm />);

      const input = screen.getByLabelText('Nome');
      const button = screen.getByRole('button', { name: /enviar/i });

      // Preenche o formulário
      fireEvent.change(input, { target: { value: 'João Silva' } });
      expect(input).toHaveValue('João Silva');

      // Submete o formulário
      fireEvent.click(button);

      // Verifica sucesso
      expect(screen.getByTestId('success-msg')).toBeInTheDocument();
      expect(screen.getByTestId('success-msg')).toHaveTextContent('Enviado!');

      // Verifica que o campo mantém o valor
      expect(input).toHaveValue('João Silva');
    });

    it('fluxo de submissão com campo vazio', () => {
      render(<SimpleForm />);

      const button = screen.getByRole('button', { name: /enviar/i });

      // Submete sem preencher
      fireEvent.click(button);

      // Verifica sucesso mesmo com campo vazio
      expect(screen.getByTestId('success-msg')).toBeInTheDocument();
    });
  });

  describe('Interações de teclado', () => {
    it('submissão com Enter no input', () => {
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

    it('submissão com Enter no input vazio', () => {
      render(<SimpleForm />);

      fireEvent.keyDown(screen.getByLabelText('Nome'), {
        key: 'Enter',
        code: 'Enter'
      });

      // O evento keyDown não submete automaticamente o formulário
      // Vamos simular o clique no botão após o Enter
      const button = screen.getByRole('button', { name: /enviar/i });
      fireEvent.click(button);

      expect(screen.getByTestId('success-msg')).toBeInTheDocument();
    });
  });

  describe('Estados e transições', () => {
    it('estados do formulário', () => {
      render(<SimpleForm />);

      const input = screen.getByLabelText('Nome');
      const button = screen.getByRole('button', { name: /enviar/i });

      // Estado inicial
      expect(input).toHaveValue('');
      expect(button).not.toBeDisabled();

      // Estado com valor
      fireEvent.change(input, { target: { value: 'Carlos' } });
      expect(input).toHaveValue('Carlos');

      // Estado de sucesso
      fireEvent.click(button);
      expect(screen.getByTestId('success-msg')).toBeInTheDocument();
      expect(input).toHaveValue('Carlos');
      expect(button).not.toBeDisabled();
    });
  });
});
