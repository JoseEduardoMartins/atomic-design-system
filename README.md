[![CI](https://github.com/JoseEduardoMartins/atomic-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseEduardoMartins/atomic-design-system/actions/workflows/ci.yml)

# Atomic Design System

Um sistema de design modular baseado em React, TypeScript e Vite, estruturado segundo o padrão Atomic Design. O objetivo é fornecer uma base escalável e reutilizável de componentes para acelerar o desenvolvimento de interfaces consistentes e acessíveis.

## Principais Features

- Atomic Design (atoms, molecules, organisms)
- Tokens centralizados de cor, espaçamento e tipografia
- Suporte a temas (light/dark) via CSS custom properties
- Acessibilidade (a11y) garantida e testada
- Testes automatizados e cobertura monitorada
- Documentação visual com Storybook
- CI/CD e publicação automatizada

## Guia Rápido

### Instalação

```bash
npm install # ou yarn install
```

### Rodando o projeto em modo desenvolvimento

```bash
npm run dev
```

### Rodando os testes

```bash
npm test
```

**Cobertura de Testes**: 100% nos componentes principais, 32.55% geral

- Testes unitários e de integração
- Edge cases e acessibilidade
- Monitoramento automático via CI/CD

📖 **Documentação detalhada**: [docs/TESTING.md](./docs/TESTING.md)

### Lint e formatação

```bash
npm run lint
```

### Rodando o Storybook

```bash
npm run start # ou npm run storybook
default: http://localhost:6006
```

### Link para o Storybook

Caso publicado, acesse: [Storybook Online](#) <!-- Substitua pelo link real se usar Chromatic ou Vercel -->

## Como contribuir

1. Crie uma branch a partir da `main`.
2. Siga o padrão de componentes e estilos do projeto.
3. Adicione testes e documentação (stories) para novos componentes.
4. Rode lint, type-check, testes e build antes de abrir PR.
5. Siga o padrão Conventional Commits.
6. Abra um Pull Request explicando suas mudanças.
7. Veja mais detalhes em [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md).

## Exemplo de Uso de um Componente

```tsx
import { Button } from 'src/components/atoms/Button';

export function App() {
  return <Button onClick={() => alert('Olá!')}>Clique aqui</Button>;
}
```

## Exemplo de Consumo Externo

```bash
npm install @jose-eduardo-martins/atomic-design-system
```

```tsx
import { Button } from '@jose-eduardo-martins/atomic-design-system';

export function App() {
  return <Button variant="primary">Botão do Design System</Button>;
}
```

---

## 📚 Documentação

Para mais detalhes sobre o projeto, consulte nossa documentação completa:

📖 **[Índice da Documentação](docs/README.md)** - Navegação completa e organizada

### Documentação Específica

- **📋 Guia de Contribuição**: [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)
- **🧪 Estratégia de Testes**: [`docs/TESTING.md`](docs/TESTING.md)
- **🏗️ Arquitetura e Padrões**: [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md)
- **📝 Histórico de Mudanças**: [`docs/CHANGELOG.md`](docs/CHANGELOG.md)
