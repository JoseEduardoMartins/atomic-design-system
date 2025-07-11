#!/bin/bash

# Script para sincronizar versão local com remota
# Útil após releases automáticos

set -e

echo "🔄 Sincronizando versão com repositório remoto..."

# Verificar se estamos na branch main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Aviso: Você está na branch '$CURRENT_BRANCH', não na 'main'"
    echo "   Recomendado: git checkout main"
fi

# Fazer pull das mudanças remotas
echo "📥 Fazendo pull das mudanças remotas..."
git pull origin main

# Verificar versão atual
CURRENT_VERSION=$(npm run --silent echo-version)
echo "📦 Versão atual: $CURRENT_VERSION"

# Verificar se há mudanças não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Há mudanças não commitadas:"
    git status --short
    echo ""
    echo "💡 Recomendado: commit suas mudanças antes de continuar"
fi

echo "✅ Sincronização concluída!"
echo ""
echo "📋 Próximos passos:"
echo "   1. Faça suas alterações"
echo "   2. Use 'npm run commit' para commits padronizados"
echo "   3. Faça push: git push origin main"
echo "   4. O CI/CD vai executar o release automaticamente"
echo "   5. Após o release, execute este script novamente" 