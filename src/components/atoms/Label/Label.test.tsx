import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label', () => {
  it('renderiza com texto padrão', () => {
    render(<Label>My Label</Label>);
    expect(screen.getByText('My Label')).toBeInTheDocument();
  });

  it('renderiza como elemento label', () => {
    render(<Label>My Label</Label>);
    expect(screen.getByText('My Label').tagName).toBe('LABEL');
  });

  it('associa corretamente com input via htmlFor', () => {
    render(<Label htmlFor="my-input">My Label</Label>);
    const label = screen.getByText('My Label');
    expect(label).toHaveAttribute('for', 'my-input');
  });

  it('renderiza com className customizada', () => {
    render(<Label className="custom-class">My Label</Label>);
    expect(screen.getByText('My Label')).toHaveClass('custom-class');
  });

  it('renderiza com diferentes tipos de conteúdo', () => {
    render(<Label>Texto simples</Label>);
    expect(screen.getByText('Texto simples')).toBeInTheDocument();

    render(
      <Label>
        <span>Conteúdo complexo</span>
      </Label>
    );
    expect(screen.getByText('Conteúdo complexo')).toBeInTheDocument();
  });

  it('passa props adicionais para o elemento label', () => {
    render(
      <Label data-testid="custom-label" aria-describedby="description">
        My Label
      </Label>
    );
    const label = screen.getByTestId('custom-label');
    expect(label).toHaveAttribute('aria-describedby', 'description');
  });

  it('renderiza com texto vazio', () => {
    render(<Label></Label>);
    const label = screen.getByRole('generic');
    expect(label).toBeInTheDocument();
  });

  it('renderiza com texto longo', () => {
    const longText =
      'Este é um texto muito longo que pode quebrar em múltiplas linhas e testar o comportamento do componente Label com conteúdo extenso';
    render(<Label>{longText}</Label>);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it('mantém acessibilidade com htmlFor', () => {
    render(<Label htmlFor="input-id">Label acessível</Label>);
    const label = screen.getByText('Label acessível');
    expect(label).toHaveAttribute('for', 'input-id');
  });
});
