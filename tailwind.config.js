/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const path = require('path');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  corePlugins: {
    appearance        : false,
    container         : false,
    float             : false,
    clear             : false,
    placeholderColor  : false,
    placeholderOpacity: false,
    verticalAlign     : false
  },
  //darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'pokemon-green': '#00693C',
        'pokemon-blue-sky': '#2C85BC',
        'pokemon-blue': '#01426A',
        'pokemon-gray': '#868686'
      },
      // @tailwindcss/typography
      typography: ({theme}) => ({
        DEFAULT: {
            css: {
                color              : 'var(--fuse-text-default)',
                '[class~="lead"]'  : {
                    color: 'var(--fuse-text-secondary)'
                },
                a                  : {
                    color: 'var(--fuse-primary-500)'
                },
                strong             : {
                    color: 'var(--fuse-text-default)'
                },
                'ol > li::before'  : {
                    color: 'var(--fuse-text-secondary)'
                },
                'ul > li::before'  : {
                    backgroundColor: 'var(--fuse-text-hint)'
                },
                hr                 : {
                    borderColor: 'var(--fuse-border)'
                },
                blockquote         : {
                    color          : 'var(--fuse-text-default)',
                    borderLeftColor: 'var(--fuse-border)'
                },
                h1                 : {
                    color: 'var(--fuse-text-default)'
                },
                h2                 : {
                    color: 'var(--fuse-text-default)'
                },
                h3                 : {
                    color: 'var(--fuse-text-default)'
                },
                h4                 : {
                    color: 'var(--fuse-text-default)'
                },
                'figure figcaption': {
                    color: 'var(--fuse-text-secondary)'
                },
                code               : {
                    color     : 'var(--fuse-text-default)',
                    fontWeight: '500'
                },
                'a code'           : {
                    color: 'var(--fuse-primary)'
                },
                pre                : {
                    color          : theme('colors.white'),
                    backgroundColor: theme('colors.gray.800')
                },
                thead              : {
                    color            : 'var(--fuse-text-default)',
                    borderBottomColor: 'var(--fuse-border)'
                },
                'tbody tr'         : {
                    borderBottomColor: 'var(--fuse-border)'
                },
                'ol[type="A" s]'   : false,
                'ol[type="a" s]'   : false,
                'ol[type="I" s]'   : false,
                'ol[type="i" s]'   : false
            }
        },
        sm     : {
            css: {
                code : {
                    fontSize: '1em'
                },
                pre  : {
                    fontSize: '1em'
                },
                table: {
                    fontSize: '1em'
                }
            }
        }
    })
    },
  },
  plugins: [
    // Fuse - Tailwind plugins
    require(path.resolve(__dirname, ('src/tailwind/plugins/utilities'))),
    require(path.resolve(__dirname, ('src/tailwind/plugins/icon-size'))),
    require(path.resolve(__dirname, ('src/tailwind/plugins/theming')))({themes}),

    // Other third party and/or custom plugins
    require('@tailwindcss/typography')({modifiers: ['sm', 'lg']}),
    require('@tailwindcss/line-clamp'),

    plugin(
      function({ addUtilities, addComponents, theme }) {
        const myComponents = {
          '.card': {
            'background-color': theme('colors.white'),
            'border-radius': theme('borderRadius.lg'),
            'padding': theme('spacing.8')
          },
        }

        const myUtilities = {
          '.file-text-input': {
            'font-family': 'Poppins',
            'font-size': '12px',
            'font-weight': '500'
          }
        }

        addComponents(myComponents)
        addUtilities(myUtilities)
      }
    )
  ],
}
