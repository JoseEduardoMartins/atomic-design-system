import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { InputWithLabel } from './InputWithLabel';

const meta: Meta<typeof InputWithLabel> = {
  title: 'Components/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
  args: {
    label: 'Nome',
    value: '',
    onChange: () => {},
    placeholder: 'Digite seu nome'
  }
};
export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Default: Story = {};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <InputWithLabel
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
};

export const WithCustomLabel: Story = {
  args: {
    label: 'E-mail',
    placeholder: 'Digite seu e-mail'
  }
};

export const DarkTheme: Story = {
  render: (args) => (
    <div className="dark p-4 bg-[var(--background)]">
      <InputWithLabel {...args} />
    </div>
  ),
  args: {
    label: 'Nome (Dark)',
    placeholder: 'Digite seu nome'
  }
};
