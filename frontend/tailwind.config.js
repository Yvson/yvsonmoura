
module.exports = {
  purge: {
    enabled: false,
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
    ]
  },

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'logo': 'Poppins',
      'nav': 'Open Sans',
      'title': 'Poppins',
      'paragraph': 'Open Sans',

    },

    variants: {
      extend: {},
    },
    plugins: [],
  }
}
