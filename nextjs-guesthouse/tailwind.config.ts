import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DM: ['DM Serif Display', 'sans-serif'],
      },
      fontSize: {
        'body-sm': '14px',
        'body-base': '15px',
        'body-lg': '16px',
        'heading-sm': '18px',
        'heading-base': '20px',
        'heading-lg': '24px',
        'heading-xxl': '30px',
        'title-sm': '36px',
        'title-lg': '48px',
        'title-xl': '60px',
        'title-xxl': '72px',
      },
      fontWeight: {
        regular: '400',
        semibold: '500',
        closebold: '550',
        bold: '700',
      },
      lineHeight: {
        body: '1',
      },
      letterSpacing: {
        normal: 'normal',
        more: '10'
      },
      colors: {
        bgcolor: '#F8F9FB',
        primary: '#FBCF7B',
        bgdark: '#8E7A55',
        primarylighter: '#FFB74D',
        primarydarkened: '#E07D13',
        primarydarker: '#C96F11',
        secondary: '#FBCF7B',
        secondarylighter: '#FFD69C',
        secondarydarkened: '#E1BA6E',
        secondarydarker: '#C8A462',
        textcolor: '#747881',
        titlecolor: '#0A0A0A',
        whitetextcolor: "#ddd",
        bordercolor: '#ddd',
        bgprimary: '#F5EEFB',
      },
      spacing: {
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1300px',
        xl: '1500px',
      },
    },
  },
  plugins: [],
} satisfies Config;
