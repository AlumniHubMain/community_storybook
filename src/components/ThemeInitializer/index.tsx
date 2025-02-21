"use client";

import { useDispatch, useSelector } from "react-redux";
import React, { PropsWithChildren, useEffect } from "react";
import {
  currentTheme as currentThemeSelector,
  setTheme,
} from "../../store/slices/themeSlice";
import { createTheme, ThemeProvider } from "@mui/material";
import createPalette, { light, dark } from "@mui/material/styles/createPalette";

declare module "@mui/system" {
  interface Shape {
    borderRadiusS: number;
    paperBorderRadius: number;
    paperBorderRadiusL: number;
  }
}

declare module "@mui/material" {
  interface PaperOwnProps {
    color?: "primary" | "secondary";
  }
}

declare module "@mui/material/styles" {
  interface TypeBackground {
    paperSecondary: string;
  }
}

const sizeOverrides: Parameters<typeof createTheme>[0] = {
  cssVariables: true,
  shape: {
    borderRadiusS: 6,
    borderRadius: 8,
    paperBorderRadius: 10,
    paperBorderRadiusL: 15,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          variants: [
            {
              props: ({ square }) => !square,
              style: {
                borderRadius: theme.shape.paperBorderRadius,
              },
            },
          ],
        }),
      },
      variants: [
        {
          props: { color: "secondary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.background.paperSecondary,
          }),
        },
      ],
    },
  },
};

export const lightTheme = createTheme({
  ...sizeOverrides,
  palette: createPalette({
    ...light,
    primary: { main: "#5A84DB" },
    secondary: { main: "#122043" },
    background: { ...light.background, paperSecondary: "#F1F2F3" },
  }),
});
export const darkTheme = createTheme({
  ...sizeOverrides,
  palette: createPalette({
    ...dark,
    primary: { main: "#5A84DB" },
    secondary: { main: "#122043" },
    background: { ...dark.background, paperSecondary: "#F1F2F3" },
  }),
});

const ThemeInitializer: React.FC<PropsWithChildren> = ({ children }) => {
  const currentTheme = useSelector(currentThemeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    dispatch(setTheme(savedTheme));
  }, [dispatch]);

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeInitializer;
