"use client";

import { useDispatch, useSelector } from "react-redux";
import React, { PropsWithChildren, useEffect } from "react";
import {
  currentTheme as currentThemeSelector,
  setTheme,
} from "../../store/slices/themeSlice";
import { TamaguiProvider, createTamagui, Theme } from 'tamagui'
import config from '../../../tamagui.config.ts'

const tamaguiConfig = createTamagui(config)

const ThemeInitializer: React.FC<PropsWithChildren> = ({ children }) => {
  const currentTheme = useSelector(currentThemeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    dispatch(setTheme(savedTheme));
  }, [dispatch]);

  return (
      <TamaguiProvider config={tamaguiConfig}>
        <Theme name={currentTheme}>
          {children}
        </Theme>
      </TamaguiProvider>
  );
};

export default ThemeInitializer;
