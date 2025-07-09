import React from 'react';
import { Button } from '../components/atoms/Button';
import { Label } from '../components/atoms/Label';
import { Title } from '../components/atoms/Title';

// Exemplo de uso dos componentes do Design System em um app externo
export function ExternalUsageExample() {
  return (
    <div style={{ padding: 24, background: '#f9f9f9', minHeight: 200 }}>
      {/* Título principal */}
      <Title>Bem-vindo ao Design System</Title>

      {/* Label associada a um input */}
      <Label htmlFor="input-demo">Nome</Label>
      <input
        id="input-demo"
        type="text"
        placeholder="Digite seu nome"
        style={{ marginBottom: 16, display: 'block' }}
      />

      {/* Botão de ação */}
      <Button variant="primary" onClick={() => alert('Ação!')}>
        Enviar
      </Button>
    </div>
  );
}

// Para usar em outro projeto:
// import { Button, Label, Title } from '@jose-eduardo-martins/atomic-design-system';
// Veja mais exemplos no Storybook ou na documentação.
