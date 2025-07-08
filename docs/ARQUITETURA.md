# Arquitetura e Design Patterns

## Visão Geral da Arquitetura

O projeto segue o padrão Atomic Design, organizando os componentes em diferentes níveis de abstração para promover reutilização, escalabilidade e manutenção facilitada.

```
src/
  components/
    atoms/        # Componentes básicos e reutilizáveis (ex: Button, Label, Title)
    molecules/    # Componentes compostos por átomos
    organisms/    # Componentes mais complexos, compostos por moléculas e átomos
  helpers/        # Funções utilitárias e helpers
  styles/         # Estilos globais, temas e integrações com Tailwind CSS
```

### Atoms

- Elementos fundamentais da interface (ex: botões, textos, inputs).
- Devem ser independentes e reutilizáveis.

### Molecules

- Combinações de átomos que formam blocos funcionais (ex: campo de busca com label e input).

### Organisms

- Estruturas mais complexas, compostas por moléculas e átomos (ex: header, cards, formulários completos).

## Design Patterns Adotados

- **Atomic Design:** Estruturação dos componentes em átomos, moléculas e organismos.
- **Componentização:** Cada componente possui sua própria pasta, contendo implementação (`.tsx`), estilos (`.style.ts`), tipos (`.type.ts`), testes (`.test.tsx`) e stories para Storybook (`.stories.tsx`).
- **Reexportação:** Arquivos `index.ts` facilitam a importação dos componentes.
- **Helpers:** Funções utilitárias para composição de classes e outras necessidades comuns.
- **Estilização Modular:** Uso de Tailwind CSS e arquivos de estilos dedicados para cada componente.
- **Tipagem Estática:** Uso extensivo de TypeScript para garantir segurança e clareza na API dos componentes.
- **Testes Automatizados:** Cada componente deve possuir testes unitários para garantir seu funcionamento.

## Boas Práticas

- **Acessibilidade:** Priorize a acessibilidade (a11y) nos componentes, utilizando roles, ARIA e navegação por teclado.
- **Consistência Visual:** Siga o padrão visual definido nos estilos globais e utilize tokens de design (cores, espaçamentos, etc).
- **Documentação:** Sempre documente novos componentes com exemplos de uso e, se possível, adicione stories no Storybook.
- **Extensão:** Para criar novos componentes, siga a estrutura de pastas e arquivos dos existentes.
- **Testes:** Adicione testes unitários e, quando aplicável, de snapshot.

## Como Estender o Design System

1. Crie uma nova pasta para o componente no nível apropriado (atom, molecule, organism).
2. Implemente o componente em TypeScript (`.tsx`).
3. Adicione arquivos de estilo, tipos, teste e story conforme o padrão.
4. Exporte o componente no `index.ts` correspondente.
5. Documente o uso e adicione exemplos.

## Exemplo de Estrutura de um Componente Atom

```
Button/
  Button.tsx         # Implementação do componente
  Button.style.ts    # Estilos específicos
  Button.type.ts     # Tipos e interfaces
  Button.test.tsx    # Testes unitários
  Button.stories.tsx # Documentação visual (Storybook)
  index.ts           # Reexportação
```

## Exemplos de Componentes

### Exemplo de Molecule: InputWithLabel

Componente que combina um Label e um input controlado, promovendo reutilização e acessibilidade.

```
InputWithLabel/
  InputWithLabel.tsx      # Implementação do componente
  InputWithLabel.test.tsx # Testes unitários cobrindo renderização, interação e acessibilidade
  index.ts                # Reexportação
```

**Exemplo de uso:**

```tsx
<InputWithLabel
  label="Nome"
  value={nome}
  onChange={(e) => setNome(e.target.value)}
  placeholder="Digite seu nome"
/>
```

### Exemplo de Organism: SimpleForm

Componente que integra InputWithLabel e Button, formando um formulário controlado e testando a integração entre componentes.

```
SimpleForm/
  SimpleForm.tsx      # Implementação do componente
  SimpleForm.test.tsx # Testes de integração e fluxo de formulário
  index.ts            # Reexportação
```

**Exemplo de uso:**

```tsx
<SimpleForm />
```

## Práticas de Testes

- **Cobertura:** Todos os componentes principais (atoms, molecules, organisms) possuem testes unitários cobrindo renderização, interação, props opcionais e integração.
- **Acessibilidade:** Os testes utilizam queries como `getByLabelText`, `getByRole` e matchers do `@testing-library/jest-dom` para garantir acessibilidade.
- **Edge cases:** São testados casos alternativos, como props opcionais e estados de erro.
- **Helpers:** Funções utilitárias possuem cobertura total de testes.
- **Integração:** Organisms testam a integração entre componentes menores.

## Tokens de Design e Temas

O design system centraliza os principais tokens de design em arquivos CSS, facilitando a manutenção, consistência visual e suporte a temas.

- **Cores:** Definidas em `src/styles/colors.css` usando variáveis CSS, com suporte a temas light e dark via classes (`:root` e `.dark`).
- **Espaçamento:** Tokens em `src/styles/spacing.css` (ex: `--space-4: 16px;`).
- **Tipografia:** Tokens em `src/styles/tokens-typography.css` (fontes, tamanhos, pesos, line-heights).
- **Scrollbars:** Customizadas via tokens em `src/styles/scrollbar.css`.

Esses tokens são importados globalmente em `src/styles/tailwind.css` e integrados ao Tailwind via `tailwind.config.js`, permitindo o uso de utilitários como `bg-primary`, `text-gray-700`, `p-[var(--space-4)]`, etc.

### Suporte a Temas (Light/Dark)

- O tema padrão é definido em `:root` e o tema dark na classe `.dark`.
- Para alternar o tema, basta adicionar ou remover a classe `dark` no elemento `<html>` ou `<body>`.
- Todos os componentes devem usar apenas tokens (ex: `var(--primary)`) para garantir compatibilidade com temas.

**Exemplo de alternância de tema:**

```js
// Alternar tema via JavaScript
// document.documentElement.classList.toggle('dark');
```

**Exemplo de uso de tokens em componentes:**

```tsx
<button
  style={{
    background: 'var(--primary)',
    color: 'var(--foreground)',
    padding: 'var(--space-4)'
  }}
>
  Botão temático
</button>
```

---

Para dúvidas ou sugestões, contribua via Pull Request ou abra uma issue no repositório.
