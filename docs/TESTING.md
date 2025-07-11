# Estratégia de Testes

Este documento descreve a estratégia de testes implementada no Atomic Design System, garantindo alta qualidade e confiabilidade dos componentes.

## 📊 Cobertura de Testes

### Cobertura Atual

- **Cobertura Geral**: 30.91%
- **Cobertura dos Componentes**: 100% (Button, Label, Title, InputWithLabel, SimpleForm)
- **Cobertura dos Helpers**: 100% (mergeClassNames)

### Metas de Cobertura

- **Componentes**: Mínimo 95% ✅
- **Helpers**: Mínimo 90% ✅
- **Cobertura Geral**: Mínimo 30% ✅

## 🧪 Tipos de Testes

### 1. Testes Unitários

#### **Atoms**

- **Button**: 10 testes

  - Renderização básica
  - Diferentes variantes (primary, secondary, success, warning, error)
  - Diferentes tamanhos (sm, md, lg, icon)
  - Estados (disabled, loading)
  - Props adicionais e acessibilidade
  - Interações (onClick)

- **Label**: 9 testes

  - Renderização básica
  - Associação com inputs (htmlFor)
  - Props adicionais
  - Diferentes tipos de conteúdo
  - Acessibilidade

- **Title**: 11 testes
  - Renderização básica
  - Diferentes variantes (default, success, destructive)
  - Props adicionais
  - Diferentes tipos de conteúdo
  - Acessibilidade como heading

#### **Molecules**

- **InputWithLabel**: 14 testes
  - Renderização básica
  - Interações (onChange)
  - Diferentes tipos de input
  - Associação label-input
  - Props adicionais
  - Validação de entrada

#### **Organisms**

- **SimpleForm**: 12 testes
  - Fluxos completos de usuário
  - Validação de formulário
  - Interações de teclado
  - Integração entre componentes
  - Estados do formulário

#### **Helpers**

- **mergeClassNames**: 18 testes
  - Combinação de classes
  - Remoção de duplicatas do Tailwind
  - Diferentes tipos de entrada (strings, arrays, objetos)
  - Edge cases (valores falsy, classes complexas)
  - Classes responsivas e de estado

### 2. Testes de Integração

#### **Integração entre Componentes**

- **Atoms**: 2 testes

  - Button + Label em formulários
  - Title + Button em seções

- **Molecules**: 2 testes

  - InputWithLabel + Label
  - InputWithLabel + Button em formulários

- **Organisms**: 2 testes
  - SimpleForm integrando todos os componentes
  - Acessibilidade entre componentes

#### **Fluxos de Usuário**

- **Fluxos Completos**: 2 testes

  - Preenchimento e envio de formulário
  - Submissão com campo vazio

- **Interações de Teclado**: 2 testes

  - Submissão com Enter
  - Submissão com Enter em campo vazio

- **Estados e Transições**: 1 teste
  - Transições de estado do formulário

## 🎯 Edge Cases Testados

### Props Opcionais

- Valores undefined/null
- Strings vazias
- Arrays vazios
- Objetos condicionais

### Conteúdo Extremo

- Textos muito longos
- Caracteres especiais
- Números
- Espaços extras

### Estados Especiais

- Componentes desabilitados
- Estados de loading
- Validação de formulários
- Mensagens de erro

### Acessibilidade

- Associação label-input
- Roles semânticos
- Atributos ARIA
- Navegação por teclado

## 🔧 Configuração de Testes

### Ferramentas Utilizadas

- **Vitest**: Runner de testes
- **@testing-library/react**: Utilitários para testes React
- **@testing-library/jest-dom**: Matchers adicionais
- **jsdom**: Ambiente DOM para testes

### Configuração

```javascript
// vitest.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'coverage/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/stories/**'
      ]
    }
  }
});
```

## 📈 Monitoramento de Cobertura

### CI/CD Pipeline

O GitHub Actions monitora automaticamente:

- Cobertura geral mínima de 30%
- Cobertura dos componentes mínima de 95%
- Upload de relatórios para Codecov

### Comandos Disponíveis

```bash
# Executar todos os testes
npm test

# Modo watch para desenvolvimento
npm run test:watch

# Interface visual para testes
npm run test:ui

# Cobertura de testes
npm run test:coverage

# Interface visual com cobertura
npm run test:coverage:ui
```

## 🧪 Exemplos de Testes

### Teste Unitário - Button

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border', 'border-border');
  });
});
```

### Teste de Integração - SimpleForm

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { SimpleForm } from './SimpleForm';

describe('SimpleForm', () => {
  it('submits form with valid data', () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText(/nome/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(input, { target: { value: 'John Doe' } });
    fireEvent.click(submitButton);

    expect(screen.getByTestId('success-msg')).toBeInTheDocument();
  });
});
```

### Teste de Helper - mergeClassNames

```typescript
import { mergeClassNames } from './mergeClassNames';

describe('mergeClassNames', () => {
  it('combines multiple class strings', () => {
    const result = mergeClassNames('bg-blue-500', 'text-white', 'p-4');
    expect(result).toBe('bg-blue-500 text-white p-4');
  });

  it('removes duplicate Tailwind classes', () => {
    const result = mergeClassNames(
      'bg-blue-500 text-white',
      'bg-red-500 text-black'
    );
    expect(result).toBe('bg-red-500 text-black');
  });
});
```

## 🎯 Boas Práticas

### 1. Estrutura de Testes

```typescript
describe('ComponentName', () => {
  // Testes de renderização
  describe('rendering', () => {
    it('renders with default props', () => {
      // teste
    });
  });

  // Testes de interação
  describe('interactions', () => {
    it('handles user interactions', () => {
      // teste
    });
  });

  // Testes de acessibilidade
  describe('accessibility', () => {
    it('has proper ARIA attributes', () => {
      // teste
    });
  });
});
```

### 2. Queries Recomendadas

```typescript
// Prioridade 1: Queries acessíveis
getByRole('button', { name: /submit/i });
getByLabelText(/email/i);
getByPlaceholderText(/enter email/i);

// Prioridade 2: Queries semânticas
getByText(/submit/i);
getByDisplayValue('john@example.com');

// Prioridade 3: Queries de teste
getByTestId('submit-button');
```

### 3. Assertions

```typescript
// Verificar presença
expect(element).toBeInTheDocument();

// Verificar classes
expect(element).toHaveClass('bg-blue-500');

// Verificar atributos
expect(element).toHaveAttribute('type', 'submit');

// Verificar texto
expect(element).toHaveTextContent('Submit');

// Verificar estado
expect(element).toBeDisabled();
```

## 🔍 Debugging de Testes

### Comandos Úteis

```bash
# Executar teste específico
npm test -- Button.test.tsx

# Executar com debug
npm test -- --reporter=verbose

# Executar com UI
npm run test:ui

# Gerar relatório de cobertura
npm run test:coverage
```

### Debugging no Código

```typescript
// Usar screen.debug() para ver o DOM
screen.debug();

// Usar screen.debug(element) para elemento específico
screen.debug(screen.getByRole('button'));

// Usar prettyDOM para formatação
import { prettyDOM } from '@testing-library/dom';
console.log(prettyDOM(element));
```

## 📊 Relatórios de Cobertura

### Interpretando Relatórios

```
File                              | % Stmts | % Branch | % Funcs | % Lines
Button.tsx                        |     100 |      100 |     100 |     100
SimpleForm.tsx                    |     100 |      100 |     100 |     100
mergeClassNames.ts                |     100 |      100 |     100 |     100
```

- **Statements**: Porcentagem de linhas executadas
- **Branch**: Porcentagem de branches (if/else) executadas
- **Functions**: Porcentagem de funções executadas
- **Lines**: Porcentagem de linhas executadas

### Identificando Gaps

1. **Branches não testadas**: Adicionar testes para diferentes condições
2. **Funções não testadas**: Verificar se há funções mortas ou não utilizadas
3. **Linhas não testadas**: Adicionar casos de teste para cobrir edge cases

## 🚀 Próximos Passos

### Melhorias Planejadas

1. **Testes E2E**: Adicionar Playwright para testes end-to-end
2. **Testes de Performance**: Medir performance dos componentes
3. **Testes de Regressão Visual**: Integrar com Chromatic ou similar
4. **Testes de Acessibilidade**: Adicionar axe-core para testes de a11y

### Métricas de Qualidade

- **Tempo de execução**: < 30 segundos
- **Cobertura mínima**: 95% para componentes
- **Testes por componente**: Mínimo 8 testes
- **Testes de integração**: Mínimo 2 por organismo

## 📚 Recursos Adicionais

- [Testing Library Docs](https://testing-library.com/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
