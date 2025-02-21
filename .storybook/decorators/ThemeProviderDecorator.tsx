import React from "react";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import ThemeInitializer from "../../src/components/ThemeInitializer";

export default function ThemeProviderDecorator(Story) {
  return (
    <Provider store={store}>
      <ThemeInitializer>
        <Story />
      </ThemeInitializer>
    </Provider>
  );
}
