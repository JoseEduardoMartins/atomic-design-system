import React, { useState } from 'react';
import { InputWithLabel } from '../../molecules/InputWithLabel';
import { Button } from '../../atoms/Button';

export const SimpleForm: React.FC = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />
      <Button type="submit">Enviar</Button>
      {submitted && <div data-testid="success-msg">Enviado!</div>}
    </form>
  );
};
