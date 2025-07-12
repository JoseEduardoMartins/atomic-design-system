import type { Preview } from '@storybook/react-vite';
import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f1f5f9' },
        { name: 'dark', value: '#1d283a' }
      ]
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' }
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' }
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' }
        }
      },
      defaultViewport: 'desktop'
    },
    a11y: {
      test: 'todo'
    }
  }
};

export default preview;
