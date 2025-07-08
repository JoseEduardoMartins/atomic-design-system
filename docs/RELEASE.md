# 🚀 Processo de Release Automatizado

Este documento descreve o processo de release automatizado do Atomic Design System usando semantic-release.

## 📋 Visão Geral

O projeto utiliza **semantic-release** para automatizar completamente o processo de versionamento e publicação. Cada commit na branch `main` pode gerar um novo release baseado no tipo de mudança.

## 🔧 Configuração

### Arquivos de Configuração

- **`.releaserc.json`**: Configuração principal do semantic-release
- **`.github/workflows/release.yml`**: Workflow de CI/CD para releases
- **`package.json`**: Scripts e configurações do npm

### Plugins Utilizados

1. **@semantic-release/commit-analyzer**: Analisa commits para determinar o tipo de release
2. **@semantic-release/release-notes-generator**: Gera notas de release
3. **@semantic-release/changelog**: Atualiza o CHANGELOG.md
4. **@semantic-release/npm**: Publica no npm registry
5. **@semantic-release/git**: Cria tags e commits de release
6. **@semantic-release/github**: Cria releases no GitHub

## 📝 Convenções de Commit

O semantic-release usa [Conventional Commits](https://www.conventionalcommits.org/) para determinar o tipo de release:

### Tipos de Commit

| Tipo               | Descrição                          | Release               |
| ------------------ | ---------------------------------- | --------------------- |
| `feat:`            | Nova funcionalidade                | Minor (1.0.0 → 1.1.0) |
| `fix:`             | Correção de bug                    | Patch (1.0.0 → 1.0.1) |
| `BREAKING CHANGE:` | Mudança que quebra compatibilidade | Major (1.0.0 → 2.0.0) |
| `docs:`            | Documentação                       | Nenhum                |
| `style:`           | Formatação                         | Nenhum                |
| `refactor:`        | Refatoração                        | Nenhum                |
| `test:`            | Testes                             | Nenhum                |
| `chore:`           | Manutenção                         | Nenhum                |

### Exemplos

```bash
# Nova funcionalidade (Minor release)
git commit -m "feat: add new Button variant"

# Correção de bug (Patch release)
git commit -m "fix: resolve Button onClick issue"

# Breaking change (Major release)
git commit -m "feat!: change Button API to use new props"

# Documentação (sem release)
git commit -m "docs: update README with new examples"
```

## 🔄 Workflow de Release

### 1. Desenvolvimento

```bash
# Criar feature branch
git checkout -b feat/new-component

# Fazer mudanças e commits
git add .
git commit -m "feat: add new Input component"

# Push para o repositório
git push origin feat/new-component
```

### 2. Pull Request

1. Criar PR da feature branch para `main`
2. CI/CD executa testes e verificações
3. Após aprovação, merge para `main`

### 3. Release Automatizado

Quando o PR é mergeado na `main`:

1. **GitHub Actions** executa o workflow de release
2. **semantic-release** analisa os commits desde o último release
3. **Determina o tipo de release** (patch/minor/major)
4. **Atualiza version** no `package.json`
5. **Gera CHANGELOG.md** com as mudanças
6. **Cria tag** no Git
7. **Publica no npm** registry
8. **Cria release** no GitHub

## 🧪 Teste Local

### Verificar Build

```bash
# Build do projeto
npm run build

# Verificar se o build está correto
ls -la dist/
```

### Testar Pacote Localmente

```bash
# Criar pacote local (sem publicar)
npm pack

# Verificar conteúdo do pacote
tar -tzf jose-eduardo-martins-atomic-design-system-*.tgz

# Limpar arquivo temporário
rm jose-eduardo-martins-atomic-design-system-*.tgz
```

### Testar semantic-release Localmente

```bash
# Testar análise de commits (dry-run)
npx semantic-release --dry-run

# Verificar configuração
npx semantic-release --help

# Teste completo do processo (recomendado)
npm run test:release
```

## 🔐 Secrets Necessários

O workflow de release requer os seguintes secrets no GitHub:

- **`GH_TOKEN`**: Token do GitHub com permissões de repo
- **`NPM_TOKEN`**: Token do npm para publicação

### Configuração dos Secrets

1. **GitHub Token**:

   - Vá para Settings → Developer settings → Personal access tokens
   - Crie um token com permissões: `repo`, `write:packages`, `read:packages`

2. **NPM Token**:

   - Vá para npmjs.com → Account → Access Tokens
   - Crie um token com permissões de publicação

3. **Configurar no GitHub**:
   - Vá para Settings → Secrets and variables → Actions
   - Adicione os tokens como secrets

## 📊 Monitoramento

### Status dos Releases

- **GitHub Actions**: [Workflow de Release](https://github.com/JoseEduardoMartins/atomic-design-system/actions/workflows/release.yml)
- **NPM Package**: [@jose-eduardo-martins/atomic-design-system](https://www.npmjs.com/package/@jose-eduardo-martins/atomic-design-system)
- **GitHub Releases**: [Releases](https://github.com/JoseEduardoMartins/atomic-design-system/releases)

### Logs e Debugging

```bash
# Ver logs detalhados do semantic-release
DEBUG=semantic-release:* npx semantic-release

# Verificar configuração
npx semantic-release --help
```

## 🚨 Troubleshooting

### Problemas Comuns

1. **Release não executado**:

   - Verificar se os commits seguem Conventional Commits
   - Verificar se os secrets estão configurados
   - Verificar logs do GitHub Actions

2. **Erro de publicação no npm**:

   - Verificar se o NPM_TOKEN está correto
   - Verificar se o nome do pacote está disponível
   - Verificar se a versão não já existe

3. **Erro de build**:
   - Executar `npm run build` localmente
   - Verificar se todos os arquivos estão incluídos no `package.json`

### Comandos Úteis

```bash
# Verificar versão atual
npm version

# Verificar configuração do semantic-release
cat .releaserc.json

# Verificar logs do último release
git log --oneline -10
```

## 📈 Métricas de Release

### Histórico de Releases

- **Versão atual**: 1.4.0
- **Total de releases**: Ver [CHANGELOG.md](./CHANGELOG.md)
- **Frequência**: Automática baseada em commits

### Qualidade dos Releases

- ✅ Build automatizado
- ✅ Testes executados antes do release
- ✅ CHANGELOG atualizado automaticamente
- ✅ Tags criadas automaticamente
- ✅ Publicação no npm automatizada

## 🔗 Links Úteis

- **[Conventional Commits](https://www.conventionalcommits.org/)**: Especificação de commits
- **[semantic-release](https://semantic-release.gitbook.io/)**: Documentação oficial
- **[GitHub Actions](https://docs.github.com/en/actions)**: Documentação do GitHub Actions
- **[NPM Publishing](https://docs.npmjs.com/cli/v8/commands/npm-publish)**: Guia de publicação no npm

---

**Última atualização**: Janeiro 2025
