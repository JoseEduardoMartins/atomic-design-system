import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Suspense } from 'react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renderiza o ícone do Lucide por nome corretamente', async () => {
    const { findByRole } = render(
      <Suspense fallback={null}>
        <Icon iconName="home" />
      </Suspense>
    );
    const svg = await findByRole('img');
    expect(svg).toBeInTheDocument();
    // O ícone do Lucide tem um path
    expect(svg.querySelector('path')).toBeInTheDocument();
  });

  it('aplica as variantes corretamente', async () => {
    const { findByRole } = render(
      <Suspense fallback={null}>
        <Icon iconName="home" variant="primary" size="lg" />
      </Suspense>
    );
    const svg = await findByRole('img');
    expect(svg).toHaveClass('text-blue-600'); // primary variant
    expect(svg).toHaveClass('h-8', 'w-8'); // lg size
  });

  it('aplica props de acessibilidade', async () => {
    const { findByLabelText } = render(
      <Suspense fallback={null}>
        <Icon iconName="home" aria-label="Home icon" aria-hidden={false} />
      </Suspense>
    );
    const svg = await findByLabelText('Home icon');
    expect(svg).toHaveAttribute('aria-label', 'Home icon');
    expect(svg).toHaveAttribute('aria-hidden', 'false');
  });

  it('usa role="img" por padrão', async () => {
    const { findByRole } = render(
      <Suspense fallback={null}>
        <Icon iconName="home" />
      </Suspense>
    );
    const svg = await findByRole('img');
    expect(svg).toHaveAttribute('role', 'img');
  });

  it('executa onClick quando fornecido', async () => {
    const handleClick = vi.fn();
    const { findByRole } = render(
      <Suspense fallback={null}>
        <Icon iconName="home" onClick={handleClick} />
      </Suspense>
    );
    const svg = await findByRole('img');
    fireEvent.click(svg);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
