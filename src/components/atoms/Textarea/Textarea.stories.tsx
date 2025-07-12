import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Digite aqui...'
  }
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Com erro'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Desabilitado'
  }
};

export const Small: Story = {
  args: {
    textareaSize: 'sm',
    placeholder: 'Pequeno'
  }
};

export const Large: Story = {
  args: {
    textareaSize: 'lg',
    placeholder: 'Grande'
  }
};
