import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error']
    },
    inputSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url']
    },
    error: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite aqui...'
  }
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Input primário'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'Input secundário'
  }
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Input com erro'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input desabilitado'
  }
};

export const Small: Story = {
  args: {
    inputSize: 'sm',
    placeholder: 'Input pequeno'
  }
};

export const Large: Story = {
  args: {
    inputSize: 'lg',
    placeholder: 'Input grande'
  }
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'seu@email.com'
  }
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Sua senha'
  }
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Digite um número'
  }
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label
        htmlFor="input-with-label"
        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
        Nome completo
      </label>
      <Input id="input-with-label" {...args} />
    </div>
  ),
  args: {
    placeholder: 'Digite seu nome completo'
  }
};

export const WithHelperText: Story = {
  render: (args) => (
    <div className="space-y-1">
      <Input {...args} />
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Digite pelo menos 3 caracteres
      </p>
    </div>
  ),
  args: {
    placeholder: 'Digite aqui...'
  }
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h3 className="text-sm font-medium mb-2">Tamanhos</h3>
        <div className="space-y-2">
          <Input inputSize="sm" placeholder="Pequeno" />
          <Input inputSize="md" placeholder="Médio" />
          <Input inputSize="lg" placeholder="Grande" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Variantes</h3>
        <div className="space-y-2">
          <Input variant="default" placeholder="Padrão" />
          <Input variant="primary" placeholder="Primário" />
          <Input variant="secondary" placeholder="Secundário" />
          <Input variant="error" placeholder="Erro" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Estados</h3>
        <div className="space-y-2">
          <Input placeholder="Normal" />
          <Input disabled placeholder="Desabilitado" />
          <Input error placeholder="Com erro" />
        </div>
      </div>
    </div>
  )
};
