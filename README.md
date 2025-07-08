# Atomic Design System

Um sistema de design modular baseado em React, TypeScript e Vite, estruturado segundo o padrão Atomic Design. O objetivo é fornecer uma base escalável e reutilizável de componentes para acelerar o desenvolvimento de interfaces consistentes e acessíveis.

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

### Lint e formatação

```bash
npm run lint
```

### Como contribuir

1. Crie uma branch a partir da `main`.
2. Faça suas alterações seguindo o padrão de componentes e estilos do projeto.
3. Adicione testes e documentação para novos componentes.
4. Abra um Pull Request explicando suas mudanças.

## Exemplo de Uso de um Componente

```tsx
import { Button } from 'src/components/atoms/Button';

export function App() {
  return <Button onClick={() => alert('Olá!')}>Clique aqui</Button>;
}
```

---

Para detalhes sobre arquitetura, padrões de design e extensão dos componentes, consulte a documentação técnica em [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md).
