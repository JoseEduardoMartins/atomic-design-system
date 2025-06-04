import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Default Label'
  }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    children: 'Red Label',
    className: 'text-red-500'
  }
};

export const AssociatedWithInput: Story = {
  args: {
    children: 'Label for Input',
    htmlFor: 'my-input'
  }
};
