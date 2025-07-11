# Guia de Contribuição

> **Templates disponíveis:**
>
> - [Template de Issue: Bug Report](../.github/ISSUE_TEMPLATE/bug_report.md)
> - [Template de Issue: Feature Request](../.github/ISSUE_TEMPLATE/feature_request.md)
> - [Template de Pull Request](../.github/PULL_REQUEST_TEMPLATE.md)
>
> Ao abrir uma issue ou pull request, utilize os templates disponíveis para garantir clareza e padronização.

Obrigado por contribuir com o Atomic Design System! Siga estas orientações para garantir qualidade, consistência e facilidade de manutenção.

## 🚀 Como Contribuir

### **Fluxo de Desenvolvimento**

1. **Sincronize a versão** (após releases anteriores):

   ```bash
   npm run sync-version
   ```

2. **Crie uma branch** a partir da `main`:

   ```bash
   git checkout -b feature/nova-feature
   # ou
   git checkout -b fix/correcao-bug
   ```

3. **Implemente sua feature, fix ou melhoria** seguindo os padrões do projeto

4. **Adicione testes unitários** e, se aplicável, de integração

5. **Adicione stories no Storybook** para novos componentes ou variações

6. **Rode os comandos de validação**:

   ```bash
   npm run lint          # ESLint
   npm run type-check    # TypeScript check
   npm test              # Testes
   npm run build         # Build
   ```

7. **Siga o padrão Conventional Commits** para mensagens de commit:

   ```bash
   npm run commit        # Usar commitizen
   ```

8. **Abra um Pull Request** explicando claramente suas mudanças

## 📁 Estrutura de Componentes

Cada componente deve conter:

```
ComponentName/
  ComponentName.tsx         # Implementação do componente
  ComponentName.style.ts    # Estilos usando CVA
  ComponentName.type.ts     # Tipos TypeScript
  ComponentName.test.tsx    # Testes unitários
  ComponentName.stories.tsx # Documentação visual (Storybook)
  index.ts                  # Reexportação
```

### **Exemplo de Estrutura Completa**

```
Button/
  Button.tsx
  Button.style.ts
  Button.type.ts
  Button.test.tsx
  Button.stories.tsx
  index.ts
```

## 🧪 Testes

### **Requisitos de Testes**

- Use o **Vitest** para testes unitários e de integração
- Garanta cobertura para renderização, interação, edge cases e acessibilidade
- Use `@testing-library/react` e `@testing-library/jest-dom` para assertions
- **Mínimo 8 testes** por componente
- **Cobertura mínima**: 95% para componentes

### **Estrutura de Testes**

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

### **Comandos de Teste**

```bash
npm test                    # Executar todos os testes
npm run test:watch         # Modo watch
npm run test:coverage      # Com cobertura
npm run test:ui           # Interface visual
```

## 📖 Storybook

### **Requisitos de Stories**

- Adicione stories para cada componente e variação
- Inclua exemplos de tema light/dark e casos edge
- Use controles para props dinâmicas
- Documente props e exemplos de uso

### **Estrutura de Stories**

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    children: 'Default Component'
  }
};

export const Variant: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Component'
  }
};
```

### **Comandos do Storybook**

```bash
npm run start              # Storybook dev server
npm run build-storybook    # Build do Storybook
```

## 🎨 Tokens e Temas

### **Diretrizes de Design**

- Use apenas tokens definidos em:
  - `src/styles/colors.css`
  - `src/styles/spacing.css`
  - `src/styles/tokens-typography.css`
  - `src/styles/scrollbar.css`

### **Exemplo de Uso de Tokens**

```typescript
// ✅ Correto - usando tokens
className = 'bg-primary text-foreground p-4';

// ❌ Incorreto - cores hardcoded
className = 'bg-blue-500 text-black p-4';
```

### **Suporte a Temas**

- Todos os componentes devem funcionar em temas light e dark
- Use CSS custom properties para cores
- Teste em ambos os temas no Storybook

## 🔧 Padrões de Código

### **TypeScript**

- Use interfaces para props de componentes
- Exporte tipos quando necessário
- Use generics quando apropriado
- Mantenha tipagem rigorosa

### **Estrutura de Props**

```typescript
export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}
```

### **Estilos com CVA**

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

export const componentStyles = cva('base-styles', {
  variants: {
    variant: {
      primary: 'primary-styles',
      secondary: 'secondary-styles'
    },
    size: {
      sm: 'small-styles',
      md: 'medium-styles',
      lg: 'large-styles'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});
```

## 📝 Conventional Commits

### **Formato**

```
type(scope): description

[optional body]

[optional footer]
```

### **Tipos de Commit**

- `feat`: Nova feature
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula, etc.
- `refactor`: Refatoração de código
- `test`: Adicionar ou corrigir testes
- `chore`: Mudanças em build, configs, etc.

### **Exemplos**

```bash
feat(button): add loading state variant
fix(input): resolve accessibility issue with label association
docs(readme): update installation instructions
test(form): add integration tests for form submission
```

### **Usando Commitizen**

```bash
npm run commit
# Seguir as instruções interativas
```

## 🔄 Workflow de Pull Request

### **Antes de Abrir o PR**

1. **Sincronize com main**:

   ```bash
   git checkout main
   git pull origin main
   git checkout sua-branch
   git rebase main
   ```

2. **Execute validações**:

   ```bash
   npm run lint
   npm run type-check
   npm test
   npm run build
   ```

3. **Verifique cobertura**:
   ```bash
   npm run test:coverage
   ```

### **Template do Pull Request**

```markdown
## Descrição

Breve descrição das mudanças

## Tipo de Mudança

- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Componentes Afetados

- [ ] Atoms
- [ ] Molecules
- [ ] Organisms
- [ ] Helpers
- [ ] Styles

## Testes

- [ ] Testes unitários adicionados/atualizados
- [ ] Testes de integração adicionados/atualizados
- [ ] Cobertura mantida acima de 95%

## Storybook

- [ ] Stories adicionadas/atualizadas
- [ ] Documentação atualizada

## Checklist

- [ ] Código segue padrões do projeto
- [ ] Self-review do código
- [ ] Comentários adicionados onde necessário
- [ ] Mudanças documentadas
- [ ] Não há warnings no console
```

## 🚫 O que NÃO Fazer

### **Código**

- ❌ Não use cores hardcoded
- ❌ Não ignore testes
- ❌ Não quebre a API existente sem discussão
- ❌ Não adicione dependências desnecessárias
- ❌ Não ignore linting errors

### **Commits**

- ❌ Não use commits sem Conventional Commits
- ❌ Não faça commits grandes com múltiplas mudanças
- ❌ Não force push para branches compartilhadas

### **Pull Requests**

- ❌ Não abra PRs sem testes
- ❌ Não ignore feedback de review
- ❌ Não force merge sem aprovação

## 🎯 Checklist de Qualidade

### **Antes do Commit**

- [ ] Código linter passa
- [ ] TypeScript não tem erros
- [ ] Testes passam
- [ ] Build funciona
- [ ] Stories funcionam
- [ ] Cobertura adequada

### **Antes do PR**

- [ ] Branch atualizada com main
- [ ] Commits seguem Conventional Commits
- [ ] Descrição clara do PR
- [ ] Testes adicionados
- [ ] Documentação atualizada
- [ ] Self-review feito

## 📚 Recursos Úteis

### **Documentação**

- [Arquitetura](./ARQUITETURA.md) - Estrutura e padrões
- [Testes](./TESTING.md) - Estratégia de testes
- [Release](./RELEASE.md) - Processo de release

### **Ferramentas**

- **ESLint**: Linting de código
- **TypeScript**: Type checking
- **Vitest**: Testes
- **Storybook**: Documentação visual
- **Commitizen**: Commits padronizados

### **Comandos Úteis**

```bash
# Desenvolvimento
npm run start              # Storybook
npm run dev               # Vite dev server

# Testes
npm test                  # Executar testes
npm run test:watch        # Modo watch
npm run test:coverage     # Com cobertura

# Qualidade
npm run lint              # ESLint
npm run type-check        # TypeScript check

# Build
npm run build             # Build da biblioteca
npm run build-storybook   # Build do Storybook

# Versionamento
npm run sync-version      # Sincronizar versão
npm run commit            # Commit padronizado
```

## 🤝 Comunidade

### **Como Pedir Ajuda**

1. **Verifique a documentação** primeiro
2. **Procure por issues** similares
3. **Abra uma issue** com template apropriado
4. **Seja específico** sobre o problema

### **Como Revisar**

1. **Verifique se segue padrões**
2. **Teste localmente** se necessário
3. **Comente construtivamente**
4. **Aprove apenas quando satisfeito**

---

Obrigado por contribuir! 🎉
