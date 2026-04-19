import type { Preview } from '@storybook/react-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

// Import all brand CSS files upfront for Storybook
import '../src/themes/corporate.css';
import '../src/themes/playful.css';
import '../src/themes/luxury.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
     },
   },

    a11y: {
      test: 'todo'
    }
  },
  decorators: [
    withThemeByDataAttribute({
      attributeName: 'data-brand',
      themes: {
        corporate: 'corporate',
        playful: 'playful',
        luxury: 'luxury',
      },
      defaultTheme: 'corporate',
    }),
  ],
};

export default preview;