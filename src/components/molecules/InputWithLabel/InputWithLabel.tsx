import React from 'react';
import { Label } from '../../atoms/Label';

type InputWithLabelProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: string;
  placeholder?: string;
};

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  value,
  onChange,
  id,
  type = 'text',
  placeholder
}) => {
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div>
      <Label htmlFor={inputId}>{label}</Label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
      />
    </div>
  );
};
