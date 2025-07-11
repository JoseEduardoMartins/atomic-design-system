# Processo de Release

Este documento descreve o processo automatizado de release do Atomic Design System usando semantic-release.

## 🔄 Fluxo de Desenvolvimento Correto

### **Fluxo Recomendado**

1. **Sincronizar versão** (após releases anteriores):

   ```bash
   npm run sync-version
   ```

2. **Fazer alterações** no código

3. **Commit padronizado**:

   ```bash
   npm run commit
   ```

4. **Push para main**:

   ```bash
   git push origin main
   ```

5. **CI/CD executa automaticamente**:

   - Testes
   - Build
   - Release (se necessário)
   - Publicação no npm

6. **Após release, sincronizar novamente**:
   ```bash
   npm run sync-version
   ```

### **Por que sincronizar?**

O semantic-release atualiza automaticamente:

- `package.json` (versão)
- `docs/CHANGELOG.md` (changelog)
- Cria tags no git
- Publica no npm

**SEMPRE** execute `npm run sync-version` após um release para manter seu ambiente local atualizado.

## 🚀 Release Automatizado

### **Triggers de Release**

- **Patch** (`1.4.0` → `1.4.1`): commits `fix:`
- **Minor** (`1.4.0` → `1.5.0`): commits `feat:`
- **Major** (`1.4.0` → `2.0.0`): commits `BREAKING CHANGE:`

### **Commits que NÃO geram release**

- `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Commits sem prefixo convencional

### **Exemplos de Commits**

```bash
# ✅ Gera release patch (1.4.1)
git commit -m "fix: corrigir erro de build no TypeScript"

# ✅ Gera release minor (1.5.0)
git commit -m "feat: adicionar novo componente Modal"

# ✅ Gera release major (2.0.0)
git commit -m "feat: reestruturar API dos componentes

BREAKING CHANGE: Button agora usa variant ao invés de type"

# ❌ NÃO gera release
git commit -m "docs: atualizar README"
git commit -m "style: ajustar espaçamento"
```

## 🔧 Configuração

### **Arquivos de Configuração**

- **`.releaserc.json`**: Configuração principal do semantic-release
- **`.github/workflows/release.yml`**: Workflow de release no GitHub Actions
- **`scripts/sync-version.sh`**: Script de sincronização

### **Plugins Utilizados**

1. **@semantic-release/commit-analyzer**: Analisa commits para determinar tipo de release
2. **@semantic-release/release-notes-generator**: Gera notas de release
3. **@semantic-release/changelog**: Atualiza CHANGELOG.md
4. **@semantic-release/npm**: Publica no npm
5. **@semantic-release/git**: Commita mudanças de versão
6. **@semantic-release/github**: Cria release no GitHub

## 🚨 Troubleshooting

### **Erro: "You cannot publish over the previously published versions"**

**Causa**: Tentativa de publicar versão que já existe no npm.

**Solução**:

1. Execute `npm run sync-version`
2. Faça um novo commit `fix:` ou `feat:`
3. Push novamente

### **Versão desincronizada**

**Sintomas**: `package.json` local diferente da versão no npm.

**Solução**:

```bash
npm run sync-version
```

### **Release não executou**

**Verificar**:

1. Commit segue Conventional Commits?
2. Está na branch `main`?
3. CI/CD passou nos testes?

## 📋 Checklist de Release

- [ ] Código testado e funcionando
- [ ] Commits seguem Conventional Commits
- [ ] Versão local sincronizada (`npm run sync-version`)
- [ ] Push para `main` realizado
- [ ] CI/CD executou com sucesso
- [ ] Release publicado no npm
- [ ] Sincronização pós-release (`npm run sync-version`)

## 🔗 Links Úteis

- **NPM Package**: https://www.npmjs.com/package/@jose-eduardo-martins/atomic-design-system
- **GitHub Releases**: https://github.com/JoseEduardoMartins/atomic-design-system/releases
- **CI/CD**: https://github.com/JoseEduardoMartins/atomic-design-system/actions
- **Conventional Commits**: https://www.conventionalcommits.org/
