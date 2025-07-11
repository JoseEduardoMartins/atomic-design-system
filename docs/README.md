# 📚 Documentação do Atomic Design System

Bem-vindo à documentação completa do Atomic Design System. Aqui você encontrará todas as informações necessárias para entender, usar e contribuir com o projeto.

## 📖 Documentação Disponível

### 🚀 Para Começar

- **[README Principal](../README.md)** - Visão geral do projeto e guia rápido

### 🏗️ Arquitetura e Design

- **[Arquitetura e Padrões](./ARQUITETURA.md)** - Estrutura do projeto, padrões de design, tokens e temas

### 🧪 Qualidade e Testes

- **[Estratégia de Testes](./TESTING.md)** - Cobertura de testes, tipos de testes, boas práticas e monitoramento

### 🤝 Contribuição

- **[Guia de Contribuição](./CONTRIBUTING.md)** - Como contribuir, padrões de código e workflow

### 📝 Histórico e Releases

- **[Processo de Release](./RELEASE.md)** - Como funciona o release automatizado
- **[Changelog](./CHANGELOG.md)** - Histórico completo de mudanças e releases

## 🎯 Navegação Rápida

### Para Desenvolvedores

1. **Primeiro contato**: [README Principal](../README.md)
2. **Entender a arquitetura**: [Arquitetura e Padrões](./ARQUITETURA.md)
3. **Contribuir**: [Guia de Contribuição](./CONTRIBUTING.md)

### Para Testadores

1. **Estratégia de testes**: [Estratégia de Testes](./TESTING.md)
2. **Executar testes**: `npm run test:coverage`

### Para Mantenedores

1. **Releases**: [Processo de Release](./RELEASE.md)
2. **Histórico**: [Changelog](./CHANGELOG.md)
3. **Padrões**: [Arquitetura e Padrões](./ARQUITETURA.md)
4. **Workflow**: [Guia de Contribuição](./CONTRIBUTING.md)

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
- **Última atualização**: Ver [Changelog](./CHANGELOG.md)

## 📦 Componentes Disponíveis

### **Atoms** (Componentes Básicos)

- **Button**: 5 variantes, 4 tamanhos, estados loading/disabled
- **Label**: Componente de texto com suporte a associação com inputs
- **Title**: Componente de título com variantes semânticas

### **Molecules** (Componentes Compostos)

- **InputWithLabel**: Campo de input com label integrado

### **Organisms** (Componentes Complexos)

- **SimpleForm**: Formulário completo integrando todos os componentes

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run start              # Storybook
npm run dev               # Vite dev server

# Testes
npm test                  # Executar testes
npm run test:watch        # Modo watch
npm run test:coverage     # Com cobertura
npm run test:ui          # Interface visual

# Qualidade
npm run lint              # ESLint
npm run type-check        # TypeScript check

# Build
npm run build             # Build da biblioteca
npm run build-storybook   # Build do Storybook

# Versionamento
npm run sync-version      # Sincronizar versão local
npm run commit            # Commit padronizado

# Release
npm run test:release      # Testar release localmente
```

## 🎨 Sistema de Design

### **Tokens Disponíveis**

- **Cores**: Sistema completo com suporte a temas light/dark
- **Espaçamento**: Tokens padronizados (4px, 8px, 16px, etc.)
- **Tipografia**: Fontes, tamanhos, pesos e line-heights
- **Scrollbars**: Customização consistente

### **Temas**

- **Light**: Tema padrão
- **Dark**: Ativado via classe `.dark`
- **Customização**: Via CSS custom properties

## 🔧 Tecnologias Utilizadas

### **Core**

- **React 19.1.0**: Framework principal
- **TypeScript 5.8.3**: Tipagem estática
- **Vite 6.3.5**: Build tool e dev server

### **Estilização**

- **Tailwind CSS 3.4.3**: Framework CSS
- **Class Variance Authority**: Gerenciamento de variantes
- **Tailwind Merge**: Combinação inteligente de classes

### **Testes**

- **Vitest 3.1.4**: Runner de testes
- **@testing-library/react**: Utilitários React
- **@testing-library/jest-dom**: Matchers adicionais

### **Documentação**

- **Storybook 9.0.2**: Documentação visual
- **@storybook/react-vite**: Integração com Vite

### **Qualidade**

- **ESLint 9.25.0**: Linting
- **TypeScript ESLint**: Linting TypeScript
- **Husky**: Git hooks

### **CI/CD**

- **GitHub Actions**: Automação
- **Semantic Release**: Versionamento automático
- **Commitizen**: Commits padronizados

## 📈 Métricas de Qualidade

### **Cobertura de Testes**

```
File                              | % Stmts | % Branch | % Funcs | % Lines
Button.tsx                        |     100 |      100 |     100 |     100
Label.tsx                         |     100 |      100 |     100 |     100
Title.tsx                         |     100 |      100 |     100 |     100
InputWithLabel.tsx                |     100 |      100 |     100 |     100
SimpleForm.tsx                    |     100 |      100 |     100 |     100
mergeClassNames.ts                |     100 |      100 |     100 |     100
```

### **Build Status**

- ✅ **TypeScript**: Sem erros
- ✅ **ESLint**: Sem warnings
- ✅ **Testes**: Todos passando
- ✅ **Build**: Funcionando
- ✅ **Storybook**: Funcionando

## 🔗 Links Úteis

### **Repositório**

- **GitHub**: https://github.com/JoseEduardoMartins/atomic-design-system
- **NPM Package**: https://www.npmjs.com/package/@jose-eduardo-martins/atomic-design-system

### **CI/CD**

- **GitHub Actions**: https://github.com/JoseEduardoMartins/atomic-design-system/actions
- **Releases**: https://github.com/JoseEduardoMartins/atomic-design-system/releases

### **Documentação**

- **Storybook**: http://localhost:6006 (local)
- **Changelog**: [docs/CHANGELOG.md](./CHANGELOG.md)

## 🚀 Próximos Passos

### **Para Desenvolvedores**

1. **Clone o repositório**
2. **Instale dependências**: `npm install`
3. **Sincronize versão**: `npm run sync-version`
4. **Execute Storybook**: `npm run start`
5. **Leia a documentação**: [Arquitetura](./ARQUITETURA.md)

### **Para Contribuidores**

1. **Leia o guia**: [Guia de Contribuição](./CONTRIBUTING.md)
2. **Entenda os padrões**: [Arquitetura](./ARQUITETURA.md)
3. **Teste suas mudanças**: `npm test`
4. **Abra um PR**: Siga o template

### **Para Mantenedores**

1. **Gerencie releases**: [Processo de Release](./RELEASE.md)
2. **Monitore qualidade**: [Estratégia de Testes](./TESTING.md)
3. **Atualize documentação**: Mantenha docs atualizados

## 📞 Suporte

### **Issues**

- **Bug Report**: Use o template de bug report
- **Feature Request**: Use o template de feature request
- **Documentação**: Abra issue para melhorias na docs

### **Discussões**

- **GitHub Discussions**: Para dúvidas gerais
- **Pull Requests**: Para discussões sobre mudanças

---

**Última atualização**: Janeiro 2025  
**Versão da documentação**: 1.5.0
