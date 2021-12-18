

module.exports = {
  mode: 'jit',
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
      typography: (theme) => ({
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
              'font-family': theme('fontFamily.paragraph'),
            }
          }
        }
      })
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
