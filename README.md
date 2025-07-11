[![CI](https://github.com/JoseEduardoMartins/atomic-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/JoseEduardoMartins/atomic-design-system/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@jose-eduardo-martins/atomic-design-system.svg)](https://www.npmjs.com/package/@jose-eduardo-martins/atomic-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Atomic Design System

Um sistema de design modular baseado em React, TypeScript e Vite, estruturado segundo o padrão Atomic Design. O objetivo é fornecer uma base escalável e reutilizável de componentes para acelerar o desenvolvimento de interfaces consistentes e acessíveis.

## 🚀 Principais Features

- **Atomic Design** (atoms, molecules, organisms)
- **Tokens centralizados** de cor, espaçamento e tipografia
- **Suporte a temas** (light/dark) via CSS custom properties
- **Acessibilidade (a11y)** garantida e testada
- **Testes automatizados** e cobertura monitorada
- **Documentação visual** com Storybook
- **CI/CD** e publicação automatizada
- **TypeScript** para segurança de tipos

## 📦 Componentes Disponíveis

### **Atoms** (Componentes Básicos)

- **Button**: 5 variantes (primary, secondary, success, warning, error), 4 tamanhos
- **Label**: Componente de texto com suporte a associação com inputs
- **Title**: Componente de título com variantes semânticas

### **Molecules** (Componentes Compostos)

- **InputWithLabel**: Campo de input com label integrado

### **Organisms** (Componentes Complexos)

- **SimpleForm**: Formulário completo integrando todos os componentes

## 🛠️ Guia Rápido

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

**Cobertura de Testes**: 100% nos componentes principais, 30.91% geral

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

### Sincronização de Versão

Após releases, sincronize sua versão local:

```bash
npm run sync-version
```

## 📚 Como Contribuir

1. **Sincronize a versão**: `npm run sync-version`
2. **Crie uma branch** a partir da `main`
3. **Siga o padrão** de componentes e estilos do projeto
4. **Adicione testes** e documentação (stories) para novos componentes
5. **Rode lint, type-check, testes** e build antes de abrir PR
6. **Siga o padrão Conventional Commits**
7. **Abra um Pull Request** explicando suas mudanças
8. **Veja mais detalhes** em [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)

## 💻 Exemplo de Uso de um Componente

```tsx
import { Button } from 'src/components/atoms/Button';

export function App() {
  return <Button onClick={() => alert('Olá!')}>Clique aqui</Button>;
}
```

## 📦 Exemplo de Consumo Externo

```bash
npm install @jose-eduardo-martins/atomic-design-system
```

```tsx
import { Button } from '@jose-eduardo-martins/atomic-design-system';

export function App() {
  return <Button variant="primary">Botão do Design System</Button>;
}
```

## 🎨 Sistema de Design

### **Tokens Disponíveis**

- **Cores**: Sistema completo com suporte a temas light/dark
- **Espaçamento**: Tokens padronizados (4px, 8px, 16px, etc.)
- **Tipografia**: Fontes, tamanhos, pesos e line-heights
- **Scrollbars**: Customização consistente

### **Temas**

Suporte nativo a temas light e dark via CSS custom properties:

```css
/* Tema Light (padrão) */
:root {
  --primary: #007bff;
  --background: #ffffff;
  --text: #000000;
}

/* Tema Dark */
.dark {
  --primary: #4dabf7;
  --background: #1a1a1a;
  --text: #ffffff;
}
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start          # Storybook
npm run dev           # Vite dev server

# Testes
npm run test          # Executar testes
npm run test:watch    # Modo watch
npm run test:coverage # Com cobertura

# Build
npm run build         # Build da biblioteca
npm run build-storybook # Build do Storybook

# Qualidade
npm run lint          # ESLint
npm run type-check    # TypeScript check

# Versionamento
npm run sync-version  # Sincronizar versão local
npm run commit        # Commit padronizado

# Release
npm run test:release  # Testar release localmente
```

## 📊 Status do Projeto

### **Cobertura de Testes**

- **Componentes**: 100% (Button, Label, Title, InputWithLabel, SimpleForm)
- **Helpers**: 100% (mergeClassNames)
- **Geral**: 30.91%

### **Qualidade**

- ✅ Linting configurado
- ✅ Type checking
- ✅ Testes automatizados
- ✅ CI/CD pipeline
- ✅ Documentação completa
- ✅ Storybook funcional

### **Releases**

- **Versão atual**: 1.5.0
- **Última atualização**: Ver [Changelog](./docs/CHANGELOG.md)

## 🔗 Links Úteis

- **NPM Package**: https://www.npmjs.com/package/@jose-eduardo-martins/atomic-design-system
- **GitHub Repository**: https://github.com/JoseEduardoMartins/atomic-design-system
- **CI/CD**: https://github.com/JoseEduardoMartins/atomic-design-system/actions
- **Releases**: https://github.com/JoseEduardoMartins/atomic-design-system/releases

---

## 📚 Documentação

Para mais detalhes sobre o projeto, consulte nossa documentação completa:

📖 **[Índice da Documentação](docs/README.md)** - Navegação completa e organizada

### Documentação Específica

- **📋 Guia de Contribuição**: [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)
- **🧪 Estratégia de Testes**: [`docs/TESTING.md`](docs/TESTING.md)
- **🏗️ Arquitetura e Padrões**: [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md)
- **🚀 Processo de Release**: [`docs/RELEASE.md`](docs/RELEASE.md)
- **📝 Histórico de Mudanças**: [`docs/CHANGELOG.md`](docs/CHANGELOG.md)
