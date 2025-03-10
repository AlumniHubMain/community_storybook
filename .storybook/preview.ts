import type { Preview } from "@storybook/react";
import ThemeProviderDecorator from "./decorators/ThemeProviderDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [ThemeProviderDecorator]
};

export default preview;
