import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="success">
        Success
      </Button>
      <Button {...args} variant="warning">
        Warning
      </Button>
    </div>
  )
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
  args: {
    variant: 'primary'
  }
};

export const Playground: Story = {
  args: {
    children: 'Custom Button',
    variant: 'primary',
    size: 'md'
  }
};
