import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  args: {
    children: (
      <>
        <option value="">Selecione uma opção</option>
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
        <option value="3">Opção 3</option>
      </>
    )
  }
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Error: Story = {
  args: {
    error: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Small: Story = {
  args: {
    selectSize: 'sm'
  }
};

export const Large: Story = {
  args: {
    selectSize: 'lg'
  }
};
