const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
      blue: {
        light: '#0066FF',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      primary1: '#BB004B',
      secondary1: '#0066FF',
    },
    screen: {
      '3xl': '1537px',
    },
    rotate: {
      30: '30deg',
      '-30': '-30deg',
      33: '33deg',
      '-33': '-33deg',
      34: '34deg',
      '-34': '-34deg',
      35: '35deg',
      '-35': '-35deg',
      36: '36deg',
      '-36': '-36deg',

      40: '40deg',
      '-40': '-40deg',
    },
    extend: {
      backgroundImage: (theme) => ({
        'hair-cut': "url('/haircut.png')",
        'brick-wall': "url('/brick-wall.svg')",
        curve1: "url('/curve1.svg')",
        curve2: "url('/curve2.svg')",
        triangle1: "url('/triangle1.svg')",
      }),
    },
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus'],
      rotate: ['group-focus', 'focus'],
    },
  },
  plugins: [],
}
