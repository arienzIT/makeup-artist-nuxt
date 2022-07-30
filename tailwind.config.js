module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'page-bg': '#fffaf8',
        rose: {
          default: '#f7e6df'
        },
        brown: {
          lightest: '#f5e5e5',
          lighter: '#C1A3A3',
          light: '#886F6F',
          default: '#694E4E',
          dark: '#452423'
        }
      },
      fontFamily: {
        title: ['Playfair Display'],
        body: ['Tinos']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
