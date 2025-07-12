import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: [
        'home',
        'search',
        'heart',
        'user',
        'settings',
        'mail',
        'phone',
        'star',
        'plus',
        'minus',
        'check',
        'x',
        'eye',
        'eye-off',
        'lock',
        'unlock',
        'calendar',
        'clock',
        'map-pin',
        'phone-call',
        'message-circle',
        'bell',
        'thumbs-up',
        'thumbs-down',
        'share',
        'download',
        'upload'
      ],
      description: 'Nome do ícone do Lucide'
    },
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'info',
        'warning',
        'success',
        'error',
        'primary',
        'destructive',
        'gray'
      ],
      description: 'Variante de cor do ícone'
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Tamanho do ícone'
    },
    className: {
      control: { type: 'text' },
      description: 'Classes CSS adicionais'
    },
    onClick: { action: 'clicked' },
    'aria-label': {
      control: { type: 'text' },
      description: 'Descrição para acessibilidade'
    },
    'aria-hidden': {
      control: { type: 'boolean' },
      description: 'Esconde do leitor de tela'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'home',
    variant: 'default',
    size: 'default',
    'aria-label': 'Home icon'
  }
};

export const Primary: Story = {
  args: {
    iconName: 'home',
    variant: 'primary',
    size: 'lg',
    'aria-label': 'Primary home icon'
  }
};

export const Success: Story = {
  args: {
    iconName: 'check',
    variant: 'success',
    size: 'md',
    'aria-label': 'Success check icon'
  }
};

export const Error: Story = {
  args: {
    iconName: 'x',
    variant: 'error',
    size: 'md',
    'aria-label': 'Error close icon'
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon iconName="home" size="sm" variant="default" aria-label="Small" />
      <Icon
        iconName="home"
        size="default"
        variant="default"
        aria-label="Default"
      />
      <Icon iconName="home" size="md" variant="default" aria-label="Medium" />
      <Icon iconName="home" size="lg" variant="default" aria-label="Large" />
      <Icon
        iconName="home"
        size="xl"
        variant="default"
        aria-label="Extra large"
      />
      <Icon iconName="home" size="xxl" variant="default" aria-label="2XL" />
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon iconName="heart" size="md" variant="default" aria-label="Default" />
      <Icon iconName="heart" size="md" variant="info" aria-label="Info" />
      <Icon iconName="heart" size="md" variant="warning" aria-label="Warning" />
      <Icon iconName="heart" size="md" variant="success" aria-label="Success" />
      <Icon iconName="heart" size="md" variant="error" aria-label="Error" />
      <Icon iconName="heart" size="md" variant="primary" aria-label="Primary" />
      <Icon
        iconName="heart"
        size="md"
        variant="destructive"
        aria-label="Destructive"
      />
      <Icon iconName="heart" size="md" variant="gray" aria-label="Gray" />
    </div>
  )
};

export const Clickable: Story = {
  args: {
    iconName: 'heart',
    variant: 'destructive',
    size: 'lg',
    onClick: () => console.log('Heart clicked!'),
    'aria-label': 'Clickable heart icon'
  }
};

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '16px',
        maxWidth: '600px'
      }}
    >
      <Icon iconName="home" size="md" variant="default" aria-label="Home" />
      <Icon iconName="search" size="md" variant="default" aria-label="Search" />
      <Icon iconName="heart" size="md" variant="default" aria-label="Heart" />
      <Icon iconName="user" size="md" variant="default" aria-label="User" />
      <Icon
        iconName="settings"
        size="md"
        variant="default"
        aria-label="Settings"
      />
      <Icon iconName="mail" size="md" variant="default" aria-label="Mail" />
      <Icon iconName="phone" size="md" variant="default" aria-label="Phone" />
      <Icon iconName="star" size="md" variant="default" aria-label="Star" />
      <Icon iconName="plus" size="md" variant="default" aria-label="Plus" />
      <Icon iconName="minus" size="md" variant="default" aria-label="Minus" />
      <Icon iconName="check" size="md" variant="default" aria-label="Check" />
      <Icon iconName="x" size="md" variant="default" aria-label="X" />
      <Icon iconName="eye" size="md" variant="default" aria-label="Eye" />
      <Icon
        iconName="eye-off"
        size="md"
        variant="default"
        aria-label="Eye Off"
      />
      <Icon iconName="lock" size="md" variant="default" aria-label="Lock" />
      <Icon iconName="unlock" size="md" variant="default" aria-label="Unlock" />
      <Icon
        iconName="calendar"
        size="md"
        variant="default"
        aria-label="Calendar"
      />
      <Icon iconName="clock" size="md" variant="default" aria-label="Clock" />
      <Icon
        iconName="map-pin"
        size="md"
        variant="default"
        aria-label="Map Pin"
      />
      <Icon
        iconName="phone-call"
        size="md"
        variant="default"
        aria-label="Phone Call"
      />
      <Icon
        iconName="message-circle"
        size="md"
        variant="default"
        aria-label="Message"
      />
      <Icon iconName="bell" size="md" variant="default" aria-label="Bell" />
      <Icon
        iconName="thumbs-up"
        size="md"
        variant="default"
        aria-label="Thumbs Up"
      />
      <Icon
        iconName="thumbs-down"
        size="md"
        variant="default"
        aria-label="Thumbs Down"
      />
      <Icon iconName="share" size="md" variant="default" aria-label="Share" />
      <Icon
        iconName="download"
        size="md"
        variant="default"
        aria-label="Download"
      />
      <Icon iconName="upload" size="md" variant="default" aria-label="Upload" />
    </div>
  )
};
