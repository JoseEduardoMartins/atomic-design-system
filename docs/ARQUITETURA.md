# Arquitetura e Design Patterns

## Visão Geral da Arquitetura

O projeto segue o padrão Atomic Design, organizando os componentes em diferentes níveis de abstração para promover reutilização, escalabilidade e manutenção facilitada.

```
src/
  components/
    atoms/        # Componentes básicos e reutilizáveis (Button, Label, Title)
    molecules/    # Componentes compostos por átomos (InputWithLabel)
    organisms/    # Componentes mais complexos (SimpleForm)
  helpers/        # Funções utilitárias e helpers (mergeClassNames)
  styles/         # Estilos globais, temas e integrações com Tailwind CSS
  examples/       # Exemplos de uso dos componentes
```

## 📦 Componentes Implementados

### **Atoms** (Componentes Básicos)

#### **Button**

- **Localização**: `src/components/atoms/Button/`
- **Variantes**: primary, secondary, success, warning, error
- **Tamanhos**: sm, md, lg, icon
- **Estados**: disabled, loading
- **Testes**: 10 testes cobrindo renderização, variantes, interações e acessibilidade

#### **Label**

- **Localização**: `src/components/atoms/Label/`
- **Funcionalidade**: Componente de texto com suporte a associação com inputs
- **Props**: htmlFor, children, className
- **Testes**: 9 testes cobrindo renderização, associação e acessibilidade

#### **Title**

- **Localização**: `src/components/atoms/Title/`
- **Variantes**: default, success, destructive
- **Semântica**: Renderiza como `<h1>` para acessibilidade
- **Testes**: 11 testes cobrindo renderização, variantes e acessibilidade

### **Molecules** (Componentes Compostos)

#### **InputWithLabel**

- **Localização**: `src/components/molecules/InputWithLabel/`
- **Composição**: Combina Label + input controlado
- **Funcionalidade**: Campo de input com label integrado
- **Props**: label, value, onChange, placeholder, type
- **Testes**: 14 testes cobrindo renderização, interações e validação

### **Organisms** (Componentes Complexos)

#### **SimpleForm**

- **Localização**: `src/components/organisms/SimpleForm/`
- **Composição**: Integra InputWithLabel + Button
- **Funcionalidade**: Formulário completo com validação
- **Estado**: Controla nome e estado de submissão
- **Testes**: 12 testes cobrindo fluxos completos e integração

## 🎨 Sistema de Design

### **Tokens de Design**

O design system centraliza os principais tokens de design em arquivos CSS, facilitando a manutenção, consistência visual e suporte a temas.

#### **Cores** (`src/styles/colors.css`)

```css
:root {
  --primary: #007bff;
  --primary-hover: #0056b3;
  --secondary: #6c757d;
  --success: #28a745;
  --warning: #ffc107;
  --error: #dc3545;
  --background: #ffffff;
  --foreground: #000000;
  --border: #dee2e6;
}

.dark {
  --primary: #4dabf7;
  --primary-hover: #339af0;
  --background: #1a1a1a;
  --foreground: #ffffff;
  --border: #495057;
}
```

#### **Espaçamento** (`src/styles/spacing.css`)

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
}
```

#### **Tipografia** (`src/styles/tokens-typography.css`)

```css
:root {
  --font-family-sans: system-ui, -apple-system, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

#### **Scrollbars** (`src/styles/scrollbar.css`)

```css
:root {
  --scrollbar-width: 8px;
  --scrollbar-track: transparent;
  --scrollbar-thumb: #c1c1c1;
  --scrollbar-thumb-hover: #a8a8a8;
}
```

### **Integração com Tailwind CSS**

Os tokens são integrados ao Tailwind via `tailwind.config.js`:

```javascript
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)'
        // ... outros tokens
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)'
        // ... outros espaçamentos
      }
    }
  }
};
```

## 🧪 Estratégia de Testes

### **Cobertura Atual**

- **Componentes**: 100% (Button, Label, Title, InputWithLabel, SimpleForm)
- **Helpers**: 100% (mergeClassNames)
- **Geral**: 30.91%

### **Tipos de Testes**

#### **Testes Unitários**

- **Renderização**: Verificar se componentes renderizam corretamente
- **Props**: Testar diferentes combinações de props
- **Interações**: Simular cliques, mudanças de input
- **Acessibilidade**: Verificar roles, labels, navegação por teclado

#### **Testes de Integração**

- **Fluxos completos**: Formulários, validações
- **Composição**: Como componentes trabalham juntos
- **Estados**: Transições entre estados

### **Ferramentas de Teste**

- **Vitest**: Runner de testes
- **@testing-library/react**: Utilitários React
- **@testing-library/jest-dom**: Matchers adicionais
- **jsdom**: Ambiente DOM

## 🔧 Design Patterns Adotados

### **1. Atomic Design**

- **Atoms**: Componentes básicos (Button, Label, Title)
- **Molecules**: Combinações de átomos (InputWithLabel)
- **Organisms**: Estruturas complexas (SimpleForm)

### **2. Componentização**

Cada componente possui sua própria pasta com estrutura padronizada:

```
ComponentName/
  ComponentName.tsx         # Implementação
  ComponentName.style.ts    # Estilos (CVA)
  ComponentName.type.ts     # Tipos TypeScript
  ComponentName.test.tsx    # Testes unitários
  ComponentName.stories.tsx # Documentação Storybook
  index.ts                  # Reexportação
```

### **3. Class Variance Authority (CVA)**

Uso do CVA para gerenciar variantes de componentes:

```typescript
export const buttonStyles = cva('base-styles', {
  variants: {
    variant: {
      primary: 'primary-styles',
      secondary: 'secondary-styles'
      // ...
    },
    size: {
      sm: 'small-styles',
      md: 'medium-styles'
      // ...
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});
```

### **4. Helpers Utilitários**

- **mergeClassNames**: Combina classes CSS removendo duplicatas do Tailwind
- **Reexportação**: Arquivos `index.ts` facilitam importações

### **5. Tipagem Estática**

- **TypeScript**: Uso extensivo para segurança de tipos
- **Interfaces**: Props bem definidas para cada componente
- **Generics**: Quando necessário para flexibilidade

## 🚀 Como Estender o Design System

### **1. Criando um Novo Atom**

```bash
mkdir src/components/atoms/NewComponent
cd src/components/atoms/NewComponent
```

Estrutura necessária:

```typescript
// NewComponent.tsx
import { newComponentStyles } from './NewComponent.style';
import type { NewComponentProps } from './NewComponent.type';

export const NewComponent = ({ ...props }: NewComponentProps) => {
  return <div className={newComponentStyles(props)} {...props} />;
};

// NewComponent.type.ts
export interface NewComponentProps {
  children?: React.ReactNode;
  className?: string;
  // ... outras props
}

// NewComponent.style.ts
import { cva } from 'class-variance-authority';

export const newComponentStyles = cva('base-styles', {
  variants: {
    // ... variantes
  }
});

// NewComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { NewComponent } from './NewComponent';

describe('NewComponent', () => {
  it('renders correctly', () => {
    render(<NewComponent>Test</NewComponent>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

// NewComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { NewComponent } from './NewComponent';

const meta: Meta<typeof NewComponent> = {
  title: 'Components/NewComponent',
  component: NewComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof NewComponent>;

export const Default: Story = {
  args: {
    children: 'New Component'
  }
};

// index.ts
export * from './NewComponent';
```

### **2. Atualizando Exportações**

```typescript
// src/components/atoms/index.ts
export * from './Button';
export * from './Label';
export * from './Title';
export * from './NewComponent'; // Adicionar nova linha
```

### **3. Adicionando Testes de Integração**

```typescript
// src/components/integration.test.tsx
describe('NewComponent Integration', () => {
  it('works with other components', () => {
    // Teste de integração
  });
});
```

## 📋 Boas Práticas

### **Acessibilidade**

- Use roles semânticos apropriados
- Implemente navegação por teclado
- Associe labels com inputs
- Teste com screen readers

### **Performance**

- Use React.memo quando apropriado
- Evite re-renders desnecessários
- Otimize imports

### **Manutenibilidade**

- Siga a estrutura de pastas
- Documente props e exemplos
- Mantenha testes atualizados
- Use TypeScript rigorosamente

### **Consistência**

- Use tokens de design
- Siga padrões de nomenclatura
- Mantenha API consistente
- Documente mudanças

## 🔄 Workflow de Desenvolvimento

1. **Sincronizar versão**: `npm run sync-version`
2. **Criar componente**: Seguir estrutura padrão
3. **Implementar**: Componente + estilos + tipos
4. **Testar**: Testes unitários + integração
5. **Documentar**: Stories no Storybook
6. **Validar**: Lint + type-check + build
7. **Commit**: Conventional Commits
8. **PR**: Pull Request com descrição clara

## 📊 Monitoramento

### **CI/CD Pipeline**

- Testes automáticos em cada PR
- Build validation
- Cobertura de testes
- Release automatizado

### **Qualidade**

- ESLint para linting
- TypeScript para type-checking
- Vitest para testes
- Storybook para documentação

### **Métricas**

- Cobertura de testes: 30.91%
- Componentes testados: 100%
- Builds bem-sucedidos: Monitorado via GitHub Actions
