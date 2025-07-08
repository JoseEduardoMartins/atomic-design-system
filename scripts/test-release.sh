#!/bin/bash

# Script para testar o processo de release localmente
# Este script simula o processo de release sem publicar

set -e

echo "🧪 Testando processo de release localmente..."
echo "=============================================="

# Verificar se estamos na branch main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Aviso: Você está na branch '$CURRENT_BRANCH', não na 'main'"
    echo "   O semantic-release só funciona na branch main"
fi

echo ""
echo "1️⃣  Verificando build..."
npm run build

echo ""
echo "2️⃣  Verificando testes..."
npm run test:coverage

echo ""
echo "3️⃣  Testando criação do pacote..."
npm pack

echo ""
echo "4️⃣  Verificando conteúdo do pacote..."
PACKAGE_FILE=$(ls jose-eduardo-martins-atomic-design-system-*.tgz | head -1)
echo "📦 Pacote criado: $PACKAGE_FILE"
echo "📋 Conteúdo:"
tar -tzf "$PACKAGE_FILE"

echo ""
echo "5️⃣  Limpando arquivo temporário..."
rm "$PACKAGE_FILE"

echo ""
echo "6️⃣  Verificando configuração do semantic-release..."
echo "📄 Configuração atual:"
cat .releaserc.json

echo ""
echo "7️⃣  Verificando commits recentes..."
echo "📝 Últimos 5 commits:"
git log --oneline -5

echo ""
echo "✅ Teste local concluído!"
echo ""
echo "📋 Próximos passos para release real:"
echo "   1. Certifique-se de estar na branch main"
echo "   2. Faça push das mudanças"
echo "   3. O GitHub Actions executará o release automaticamente"
echo ""
echo "🔗 Links úteis:"
echo "   - GitHub Actions: https://github.com/JoseEduardoMartins/atomic-design-system/actions"
echo "   - NPM Package: https://www.npmjs.com/package/@jose-eduardo-martins/atomic-design-system"
echo "   - Documentação: docs/RELEASE.md" 