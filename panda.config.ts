import { defineConfig } from '@pandacss/dev';
import textStyles from './style-extensions/text-styles';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        tokens: {
            fonts: {
                'face-font': {value: 'Raleway, sans-serif'},
                'main-font': {value: "'Open Sans', sans-serif"},
            },
        },
        extend: {
            textStyles,
        },
    },

    jsxFramework: 'solid',

    // The output directory for your css system
    outdir: 'styled-system',
});
