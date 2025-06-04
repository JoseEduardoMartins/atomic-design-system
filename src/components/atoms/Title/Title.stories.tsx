import type { Meta, StoryObj } from '@storybook/react-vite';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    children: 'Default Title'
  }
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    children: 'Success Title',
    variant: 'success'
  }
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Title',
    variant: 'destructive'
  }
};

export const WithCustomClass: Story = {
  args: {
    children: 'Large Title',
    className: 'text-4xl'
  }
};
