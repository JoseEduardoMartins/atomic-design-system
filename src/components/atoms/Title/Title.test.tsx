import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title } from './Title';

describe('Title', () => {
  it('renderiza o children corretamente', () => {
    render(<Title>My Title</Title>);
    expect(screen.getByText('My Title')).toBeInTheDocument();
  });

  it('renderiza como elemento h1', () => {
    render(<Title>My Title</Title>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renderiza com variante success', () => {
    render(<Title variant="success">Success Title</Title>);
    const title = screen.getByRole('heading');
    expect(title).toHaveClass('text-success');
  });

  it('renderiza com variante destructive', () => {
    render(<Title variant="destructive">Destructive Title</Title>);
    const title = screen.getByRole('heading');
    expect(title).toHaveClass('text-destructive');
  });

  it('renderiza com className customizada', () => {
    render(<Title className="custom-class">My Title</Title>);
    expect(screen.getByRole('heading')).toHaveClass('custom-class');
  });

  it('renderiza com diferentes tipos de conteúdo', () => {
    render(<Title>Texto simples</Title>);
    expect(screen.getByText('Texto simples')).toBeInTheDocument();

    render(
      <Title>
        <span>Conteúdo complexo</span>
      </Title>
    );
    expect(screen.getByText('Conteúdo complexo')).toBeInTheDocument();
  });

  it('passa props adicionais para o elemento h1', () => {
    render(<Title aria-label="Custom title">My Title</Title>);
    const title = screen.getByRole('heading');
    expect(title).toHaveAttribute('aria-label', 'Custom title');
  });

  it('renderiza com texto vazio', () => {
    render(<Title>{''}</Title>);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });

  it('renderiza com texto longo', () => {
    const longText =
      'Este é um título muito longo que pode quebrar em múltiplas linhas e testar o comportamento do componente Title com conteúdo extenso';
    render(<Title>{longText}</Title>);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it('mantém acessibilidade como heading', () => {
    render(<Title>Title acessível</Title>);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Title acessível');
  });

  it('renderiza sem variante (padrão)', () => {
    render(<Title>Default Title</Title>);
    const title = screen.getByRole('heading');
    expect(title).not.toHaveClass('text-success', 'text-error');
  });
});
