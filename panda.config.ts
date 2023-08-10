import { defineConfig } from "@pandacss/dev";
import "@fontsource/raleway";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                fonts: {
                    raleway: {value: 'var(--font-raleway), sans-serif'},
                }
            },
        },
    },

    jsxFramework: "solid",

    // The output directory for your css system
    outdir: "styled-system",
});
