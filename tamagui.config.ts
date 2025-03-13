import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createTamagui } from "tamagui";

export const colors = {
    grays: {
        gray50: '#F4F7FA',
        gray100: '#F1F4F7',
        gray200: '#E5EAEF',
        gray300: '#CED5DD',
        gray400: '#B6BDC6',
        gray500: '#939AA3',
        gray600: '#5E656D'
    },
    blue: {
        blue100: '#CFDCF7',
        blue200: '#AAC2F6',
        blue300: '#7199F0',
        blue400: '#5A84DB',
        blue500: '#3B59AE'
    },
    darkBlue: {
        darkBlue100: '#96A5CA',
        darkBlue200: '#6A7CA7',
        darkBlue300: '#475985',
        darkBlue400: '#25355D',
        darkBlue500: '#122043'
    },
    accent: {
        yellow: '#F6FF86',
        white: '#F3FFFF',
        lightCyan: '#ECF9F9',
        lightBlue: '#E4F1F9',
        red: '#F25352',
        orange: '#F6BC50'
    },
    lightGrays: {
        lightGray100: '#F9F9F7',
        lightGray200: '#F5F5F1',
        lightGray300: '#E7E8E2',
        lightGray400: '#DADAD7'
    },
    gradients: {
        gradient1: 'linear-gradient(to right,rgba(53, 102, 223, 1),rgba(78, 225, 225, 1))',
        gradient2: 'linear-gradient(to right,rgba(113, 152, 249, 1),rgba(99, 203, 226, 1))',
        gradient3: 'linear-gradient(to right,rgba(171, 197, 245, 1),rgba(132, 199, 249, 1))',
        gradient4: 'linear-gradient(to right,rgba(188, 207, 247, 1),rgba(117, 202, 221, 0.15))',
        gradient5: 'linear-gradient(to bottom,rgba(18, 32, 67, 1),rgba(67, 86, 123, 1), rgba(144, 171, 200, 1), rgba(195, 221, 235, 1), rgba(236, 250, 251, 1))'
    },
    upperSquare: {
        light: '#F4F1F6',
        dark: '#3B353E',
        pink: '#FF05C8',
        lightPink: '#F0CFFF'
    },
    underSquare: {
        yellow: '#FFD066',
        orange: '#FFB000',
        red: '#FF4228',
        blue: '#0070C1',
        purple: '#664077',
        darkPurple: '#2D1D35',
        black: '#160020'
    }
}


const animations = createAnimations({
    bouncy: {
        type: "spring",
        damping: 10,
        mass: 0.9,
        stiffness: 100,
    },
    lazy: {
        type: "spring",
        damping: 20,
        stiffness: 60,
    },
    quick: {
        type: "spring",
        damping: 20,
        mass: 1.2,
        stiffness: 250,
    },
});

const headingFont = createInterFont();

const bodyFont = createInterFont();

const config = createTamagui({
    animations,
    defaultTheme: "light",
    shorthands,
    fonts: {
        heading: headingFont,
        body: bodyFont,
    },
    themes,
    tokens,
});

export type AppConfig = typeof config;

declare module "tamagui" {
    // overrides TamaguiCustomConfig so your custom types
    // work everywhere you import `tamagui`
    interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
