/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'blue-1': "#082f49",
      'blue-2':'#0369a1',
      'yellow-1': '#facc15',
      'yellow-2': '#eab308',
      'neutral': '#262626',
      'neutral-2': '#3f3f46',
      'transparetNeutral': 'rgba(0, 0, 0, .3)',
      'transparentWhite':'rgba(225, 225, 225, .2)'
    },
    
    fontFamily: {
      sans: ['Hind', 'sans-serif'],
    },

    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    }
  },
  plugins: [],
}

