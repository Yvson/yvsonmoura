const { width } = require('tailwindcss/defaultTheme')

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

    extend: {
      typography: {
        'xs': {
          css: {
            fontSize: '0.75rem',
          },
        },
        DEFAULT : {
          css: {
            'h1, h2, h3, h4, blockquote, ul, p, a, th, td, tr, thead, tbody, strong, code, a>code': {
              color: 'inherit',
            },
            'pre': {
              'white-space': 'pre-wrap',
              'word-wrap': 'break-word',
            }
          }
        }
      }
    },

    variants: {
      extend: {},
    },
    plugins: [],
  },

  plugins: [
    require('@tailwindcss/typography'),
  ]
}
