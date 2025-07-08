import type { Meta, StoryObj } from '@storybook/react-vite';
import { SimpleForm } from './SimpleForm';

const meta: Meta<typeof SimpleForm> = {
  title: 'Components/SimpleForm',
  component: SimpleForm,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof SimpleForm>;

export const Default: Story = {};

export const DarkTheme: Story = {
  render: () => (
    <div className="dark p-4 bg-[var(--background)]">
      <SimpleForm />
    </div>
  )
};
