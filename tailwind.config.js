/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            white: '#FFF',
            black: '#000',
            primary: '#52C234',
            middle: '#3EC655',
            ligth: '#7AE15E',
            red: '#F00',
            line: 'rgba(249, 255, 252, 0.30)',
            gun: 'rgba(255, 255, 255, 0.57)',
        },
        fontFamily: {
            gil: ['Gilroy'],
            gilSemi: ['GilroySemi'],
            jura: ['Jura']
        },
    },
    screens: {
        mm: '400px',
        ml: '495px',
        sm: "768px",
        md: "1060px",
        gg: '1328px',
        xl: "1440px",
        bg: '1520px',
    },
};
export const plugins = [];