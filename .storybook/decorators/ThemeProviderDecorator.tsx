import React, { useState} from "react";
import { TamaguiProvider, createTamagui, Theme } from 'tamagui'
import config from '../../tamagui.config.ts'

const tamaguiConfig = createTamagui(config)

export default function ThemeProviderDecorator(Story) {
  const [currentTheme] = useState(() => localStorage.getItem("theme") as 'light' | 'dark' || "light");

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={currentTheme}>
        <Story/>
      </Theme>
    </TamaguiProvider>
  );
}
