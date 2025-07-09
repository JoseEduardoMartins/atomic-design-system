# Guia de Contribuição

> **Templates disponíveis:**
>
> - [Template de Issue: Bug Report](../.github/ISSUE_TEMPLATE/bug_report.md)
> - [Template de Issue: Feature Request](../.github/ISSUE_TEMPLATE/feature_request.md)
> - [Template de Pull Request](../.github/PULL_REQUEST_TEMPLATE.md)
>
> Ao abrir uma issue ou pull request, utilize os templates disponíveis para garantir clareza e padronização.

Obrigado por contribuir com o Atomic Design System! Siga estas orientações para garantir qualidade, consistência e facilidade de manutenção.

## Como contribuir

1. **Crie uma branch** a partir da `main`.
2. **Implemente sua feature, fix ou melhoria** seguindo os padrões do projeto.
3. **Adicione testes unitários** e, se aplicável, de integração.
4. **Adicione stories no Storybook** para novos componentes ou variações.
5. **Rode os comandos abaixo antes de abrir o PR:**
   - Lint: `npm run lint`
   - Type-check: `npm run type-check`
   - Testes: `npm test`
   - Build: `npm run build`
6. **Siga o padrão Conventional Commits** para mensagens de commit.
7. **Abra um Pull Request** explicando claramente suas mudanças.

## Estrutura de Componentes

Cada componente deve conter:

- Implementação (`.tsx`)
- Estilos (`.style.ts`)
- Tipos (`.type.ts`)
- Testes (`.test.tsx`)
- Stories (`.stories.tsx`)
- Reexportação (`index.ts`)

Exemplo:

```
Button/
  Button.tsx
  Button.style.ts
  Button.type.ts
  Button.test.tsx
  Button.stories.tsx
  index.ts
```

## Testes

- Use o Vitest para testes unitários e de integração.
- Garanta cobertura para renderização, interação, edge cases e acessibilidade.
- Use `@testing-library/react` e `@testing-library/jest-dom` para assertions.

## Storybook

- Adicione stories para cada componente e variação.
- Inclua exemplos de tema light/dark e casos edge.
- Use controles para props dinâmicas.

## Tokens e Temas

- Use apenas tokens definidos em `src/styles/colors.css`, `spacing.css`, `tokens-typography.css`.
- Garanta compatibilidade com temas light/dark.

## Acessibilidade

- Priorize a11y: use ARIA, roles, labels, navegação por teclado.
- Adicione testes de acessibilidade sempre que possível.

## Padrão de Commits

- Use Conventional Commits:
  - `feat: ...` para novas features
  - `fix: ...` para correções de bugs
  - `chore: ...` para tarefas de manutenção
  - `docs: ...` para documentação
  - `test: ...` para testes
  - `refactor: ...` para refatorações

## Dúvidas ou Sugestões

Abra uma issue ou discuta no PR. Feedbacks são bem-vindos!
