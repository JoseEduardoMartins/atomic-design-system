import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    'aria-label': 'Checkbox'
  }
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={() => setChecked((v) => !v)}
      />
    );
  }
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true
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
    checkboxSize: 'sm'
  }
};

export const Large: Story = {
  args: {
    checkboxSize: 'lg'
  }
};

export const WithLabel: Story = {
  render: (args) => (
    <label className="flex items-center gap-2">
      <Checkbox {...args} />
      <span>Concordo com os termos</span>
    </label>
  )
};
