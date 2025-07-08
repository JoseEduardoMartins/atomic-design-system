# Estratégia de Testes

Este documento descreve a estratégia de testes implementada no Atomic Design System, garantindo alta qualidade e confiabilidade dos componentes.

## 📊 Cobertura de Testes

### Cobertura Atual

- **Cobertura Geral**: 32.55%
- **Cobertura dos Componentes**: 100% (Button, Label, Title, InputWithLabel, SimpleForm)
- **Cobertura dos Helpers**: 100% (mergeClassNames)

### Metas de Cobertura

- **Componentes**: Mínimo 95%
- **Helpers**: Mínimo 90%
- **Cobertura Geral**: Mínimo 30% (considerando arquivos de configuração)

## 🧪 Tipos de Testes

### 1. Testes Unitários

#### Atoms

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

#### Molecules

- **InputWithLabel**: 14 testes
  - Renderização básica
  - Interações (onChange)
  - Diferentes tipos de input
  - Associação label-input
  - Props adicionais
  - Validação de entrada

#### Organisms

- **SimpleForm**: 12 testes
  - Fluxos completos de usuário
  - Validação de formulário
  - Interações de teclado
  - Integração entre componentes
  - Estados do formulário

#### Helpers

- **mergeClassNames**: 18 testes
  - Combinação de classes
  - Remoção de duplicatas do Tailwind
  - Diferentes tipos de entrada (strings, arrays, objetos)
  - Edge cases (valores falsy, classes complexas)
  - Classes responsivas e de estado

### 2. Testes de Integração

#### Integração entre Componentes

- **Atoms**: 2 testes

  - Button + Label em formulários
  - Title + Button em seções

- **Molecules**: 2 testes

  - InputWithLabel + Label
  - InputWithLabel + Button em formulários

- **Organisms**: 2 testes
  - SimpleForm integrando todos os componentes
  - Acessibilidade entre componentes

#### Fluxos de Usuário

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
npm run test

# Executar testes com cobertura
npm run test:coverage

# Executar testes em modo watch
npm run test:watch

# Executar testes específicos
npm run test Button
```

## 🚀 Boas Práticas

### Estrutura de Testes

1. **Describe** para agrupar testes relacionados
2. **It** para casos de teste específicos
3. **Setup** e **teardown** quando necessário
4. **Nomes descritivos** em português

### Padrões de Teste

```typescript
describe('ComponentName', () => {
  it('deve renderizar corretamente', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('deve chamar callback quando clicado', () => {
    const handleClick = vi.fn();
    render(<Component onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Assertions Recomendadas

- `toBeInTheDocument()` para verificar presença
- `toHaveClass()` para verificar classes CSS
- `toHaveAttribute()` para verificar atributos
- `toHaveValue()` para verificar valores de inputs
- `toBeDisabled()` para verificar estados

## 🔍 Debugging de Testes

### Comandos Úteis

```bash
# Executar teste específico com debug
npm run test Button -- --reporter=verbose

# Executar com console.log
DEBUG=* npm run test

# Executar com coverage detalhada
npm run test:coverage -- --reporter=text
```

### Ferramentas de Debug

- `screen.debug()` para imprimir DOM
- `screen.logTestingPlaygroundURL()` para URL do playground
- `fireEvent` para simular interações
- `waitFor` para operações assíncronas

## 📝 Manutenção

### Adicionando Novos Testes

1. Criar arquivo `ComponentName.test.tsx`
2. Seguir estrutura padrão
3. Testar edge cases
4. Verificar acessibilidade
5. Executar cobertura

### Atualizando Testes

1. Verificar se testes ainda fazem sentido
2. Atualizar expectativas se necessário
3. Manter cobertura alta
4. Documentar mudanças

## 🎉 Resultados

Com esta estratégia de testes, garantimos:

- ✅ **100% de cobertura** nos componentes principais
- ✅ **Testes robustos** para edge cases
- ✅ **Integração testada** entre componentes
- ✅ **Acessibilidade validada**
- ✅ **Monitoramento contínuo** via CI/CD
- ✅ **Documentação clara** para manutenção
