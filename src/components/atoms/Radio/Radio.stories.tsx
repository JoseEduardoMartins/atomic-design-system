import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  args: {
    name: 'radio-example',
    'aria-label': 'Radio'
  }
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {};

export const Checked: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={() => setChecked((v) => !v)}
      />
    );
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
    radioSize: 'sm'
  }
};

export const Large: Story = {
  args: {
    radioSize: 'lg'
  }
};

export const WithLabel: Story = {
  render: (args) => (
    <label className="flex items-center gap-2">
      <Radio {...args} />
      <span>Opção selecionada</span>
    </label>
  )
};

export const RadioGroup: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <Radio {...args} name="group1" value="option1" />
        <span>Opção 1</span>
      </label>
      <label className="flex items-center gap-2">
        <Radio {...args} name="group1" value="option2" />
        <span>Opção 2</span>
      </label>
      <label className="flex items-center gap-2">
        <Radio {...args} name="group1" value="option3" />
        <span>Opção 3</span>
      </label>
    </div>
  )
};
