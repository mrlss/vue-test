/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}

const REM_BASE = 10
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px, base = REM_BASE) => `${round(px / base)}rem`
const stripUnit = (value) => parseInt(value, 10)
const media = (resolution, mobileFirst = true) => {
  if (mobileFirst) {
    return `@media (min-width: ${stripUnit(resolution)}px)`
  }

  return `@media (max-width: ${stripUnit(resolution) - 1}px)`
}

const extraSizes = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '15/12': '125%',
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%'
}

const SPACING = {
  full: '100%',
  0: 0,
  1: '0.1rem',
  2: '0.2rem',
  3: '0.3rem',
  4: rem(4),
  5: rem(5),
  6: rem(6),
  7: rem(7),
  8: rem(8),
  9: rem(9),
  10: rem(10),
  16: rem(16),
  20: rem(20),
  30: rem(30),
  40: rem(40),
  50: rem(50),
  60: rem(60),
  70: rem(70),
  80: rem(80),
  90: rem(90),
  100: rem(100),
  screen: '100svh'
}

const OPACITY = {
  0: '0',
  10: '0.1',
  20: '0.2',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  80: '0.8',
  90: '0.9',
  100: '1'
}

module.exports = {
  mode: 'jit',
  important: false,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {}
    },
    extend: {
      opacity: OPACITY,
      borderOpacity: OPACITY,
      height: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes
      }),
      minHeight: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes
      }),
      minWidth: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes
      }),
      maxWidth: (theme, { breakpoints }) => ({
        ...breakpoints(theme('screens')),
        ...SPACING,
        ...extraSizes
      }),
      spacing: {
        ...SPACING,
        ...extraSizes
      },
      inset: (theme) => ({
        ...SPACING,
        ...extraSizes,
        ...theme('spacing'),
        ...theme('width')
      }),
      transitionTimingFunction: {
        linear: 'linear',
        in: 'cubic-bezier(0.25,0.46,0.45,0.94)',
        out: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'in-out': 'cubic-bezier(0.19,1,0.22,1)',
        back: 'cubic-bezier(0.68,-0.55,0.27,1.55)'
      },
      transitionDelay: {
        0: '0ms'
      },
      zIndex: {
        n1: '-1',
        n2: '-2',
        n3: '-3',
        n4: '-4',
        n5: '-5',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      scale: {
        ...OPACITY
      },
      cursor: {
        draggable: 'draggable'
      },
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('currentColor')
      })
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#fff',
      black: {
        ...Object.keys(OPACITY).reduce(
          (acc, key) => ({ ...acc, [`${key}0`]: `rgba(0,0,0, ${OPACITY[key]})` }),
          {}
        ),
        DEFAULT: '#000'
      },
      gray: {
        100: '#F4F4F4',
        200: '#F0F0F0',
        300: '#EDEDED',
        400: '#4E5153',
        500: '#E6E6E6',
        900: '#252525',
        DEFAULT: '#EFF0F2'
      }
    },
    screens: {
      xs: '375px',
      sm: '520px',
      md: '768px',
      lg: '1024px',
      laptop: '1280px',
      xl: '1366px',
      '2xl': '1440px',
      fhd: '1920px',
      'h-min': { raw: '(max-height: 800px) and (min-width: 1280px)' },
      land: { raw: '(orientation: landscape) and (max-width: 1023px)' }
    },
    fontFamily: {
      primary: ['Roboto, sans-serif']
    },
    fontSize: {
      xxs: rem(10),
      xs: rem(12),
      sm: rem(14),
      base: rem(16),
      md: rem(18),
      lg: rem(20),
      xl: rem(22),
      '4xl': rem(40),
      '7xl': rem(70)
    },
    lineHeight: {
      xs: '0.8',
      none: '1',
      tight: '1.1',
      small: '1.2',
      base: '1.3',
      relaxed: '1.4',
      loose: '1.5',
      high: '1.7'
    },
    letterSpacing: {
      tightest: '-0.07em',
      tighter: '-0.04em',
      tight: '-0.02em',
      normal: '0',
      high: '0.01em',
      higher: '0.02em',
      highest: '0.04em'
    },
    borderRadius: {
      none: '0',
      xs: '0.4rem',
      sm: '0.5rem',
      DEFAULT: '1rem',
      md: '1.2rem',
      lg: '1.5rem',
      xl: '3rem',
      full: '9999px',
      circle: '50%'
    }
  },
  plugins: [
    ({ addComponents, theme, addBase }) => {
      const inputHoverFocus = {
        opacity: 1,
        outline: 'none',
        borderColor: theme('colors.black.DEFAULT')
      }

      const nonAppearance = {
        appearance: 'none',
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none'
      }

      const headingsGeneral = {
        lineHeight: '1.15',
        fontWeight: theme('fontWeight.normal'),
        marginBottom: '3rem',
        letterSpacing: '-0.035em'
      }

      const BUTTON_STATES = '&:hover, .group:not(.group--no-events):hover &'

      addBase({
        '*': {
          '-webkit-tap-highlight-color': 'transparent'
        },

        'div[style="width: 0; height: 0;"]': {
          position: 'fixed',
          zIndex: -9999
        },

        sup: {
          top: '-1.5em',
          left: '-0.5em',
          fontSize: '32%'
        },

        sub: {
          bottom: 0
        },

        html: {
          fontSize: `${REM_BASE}px`,
          marginTop: '0 !important',
          // scrollBehavior: 'initial',

          [media(theme('screens.2xl'))]: {
            fontSize: `${1000 / stripUnit(theme('screens.2xl'))}vw`
          }
        },

        'html, body': {
          width: '100%',
          minHeight: '100%'
          // 'overscroll-behavior-y': 'none',
        },

        button: {
          '&:focus': {
            outline: 'none'
          }
        },

        body: {
          color: theme('colors.black.DEFAULT'),
          backgroundColor: theme('colors.white'),
          lineHeight: '1.4',
          fontSize: theme('fontSize.base'),
          fontFamily: theme('fontFamily.primary'),
          fontWeight: theme('fontWeight.normal'),
          '-webkit-font-smoothing': 'antialiased',
          marginRight: '0 !important',
          'font-kerning': 'none'
        },

        '.cursor-none': {
          '*': {
            cursor: 'none !important'
          }
        },

        '[style^="--aspect"]': {
          aspectRatio: 'var(--aspect)'
        },

        'main[tabindex="-1"]': {
          outline: 'none'
        },

        '[data-lenis-prevent]': {
          overscrollBehavior: 'contain'
        },

        '.is-transitioning, .is-animating': {
          pointerEvents: 'none !important',
          cursor: 'progress !important'
        },

        '.overflow-y-auto, .md:overflow-y-auto, .lg:overflow-y-auto': {
          '.no-touchevents &': {
            '-webkit-overflow-scrolling': 'touch',

            '&::-webkit-scrollbar': {
              width: '4px',
              background: 'transparent'
            },

            '&::-webkit-scrollbar-thumb': {
              background: theme('colors.black[300]')
            }
          }
        },

        '.overflow-x-auto': {
          ' &::-webkit-scrollbar': {
            '-webkit-appearance': 'none',
            width: 0,
            height: 0,
            display: 'none'
          }
        },

        'h1, h2, h3, h4, h5, h6': {
          ...headingsGeneral
        },

        'h1, .h1': {
          fontSize: rem(56),
          letterSpacing: '-0.05em',

          [media(theme('screens.laptop'))]: {
            fontSize: rem(124)
          }
        },

        'h2, .h2': {
          fontSize: rem(38),

          [media(theme('screens.laptop'))]: {
            fontSize: rem(50)
          }
        },

        'h3, .h3': {
          fontSize: rem(24),
          lineHeight: 1.1,

          [media(theme('screens.laptop'))]: {
            fontSize: rem(34)
          }
        },

        'h4, .h4': {
          fontSize: rem(18),
          marginBottom: '2rem',

          [media(theme('screens.laptop'))]: {
            fontSize: rem(20)
          }
        },

        'h5, .h5': {
          fontSize: rem(18)
        },

        'h6, .h6': {
          fontSize: rem(18)
        },

        p: {
          marginBottom: '2rem'
        },

        '.reset-last': {
          '> *:last-child': {
            marginBottom: '0'
          }
        }
      })

      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.6rem',
          paddingRight: '1.6rem',

          [media(theme('screens.laptop'))]: {
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }
        },

        '.link': {
          position: 'relative',
          cursor: 'pointer',
          display: 'inline-block',
          verticalAlign: 'top',

          '&:after': {
            content: "''",
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '0.15rem',
            background: 'currentColor',
            willChange: 'transform',
            transformOrigin: '100% 100%',
            transform: 'scaleX(0)',
            pointerEvents: 'none',
            transitionProperty: theme('transitionProperty.transform'),
            transitionTimingFunction: theme('transitionTimingFunction[out]'),
            transitionDuration: theme('transitionDuration[500]')
          },

          '&:hover, .group.is-active &, .group:hover &, &.is-active, &.is-complete': {
            '&:after': {
              transformOrigin: '0 0',
              transform: 'scaleX(1)'
            }
          },

          '.group.is-active &, &.is-active, .active &, &.is-complete': {
            '&:after': {
              transformOrigin: '0 0',
              transform: 'scaleX(1)'
            }
          },

          '&--underline': {
            '&:after': {
              transformOrigin: '0 0',
              transform: 'scaleX(1)',
              animation: 'none'
            },

            '&:hover, .group.is-active &, .group:hover &, &.is-active': {
              '&:after': {
                animation: 'link 0.75s forwards'
              }
            },

            '.group.is-active &, &.is-active': {
              '&:after': {
                animation: 'link 0.75s forwards'
              }
            }

            // '.touchevents &': {
            //   textDecoration: 'underline',

            //   '&:after': {
            //     display: 'none',
            //   },
            // },
          },

          '&--underline-default': {
            textDecoration: 'underline',

            '&:after': {
              display: 'none'
            },

            '&:hover, .group.is-active &, .group:hover &, &.is-active': {
              textDecoration: 'none'
            }
          },

          '&--custom': {
            display: 'inline-block',
            verticalAlign: 'top',

            '&:after': {
              bottom: '-0.15em'
            },

            '.link__inner': {
              overflow: 'hidden',
              position: 'relative',
              display: 'block'
            },

            '.link__hover-text, .link__default-text': {
              display: 'block',
              position: 'relative',
              transitionProperty: theme('transitionProperty.transform'),
              transitionTimingFunction: theme('transitionTimingFunction[out]'),
              transitionDuration: theme('transitionDuration[500]')
            },

            '.link__hover-text': {
              position: 'absolute',
              left: 0,
              top: 0,
              transform: 'translateY(125%)'
            },

            '&:hover, .group.is-active &, .group:hover &, &.is-active': {
              '.no-touchevents &': {
                '.link__hover-text': {
                  transform: 'none'
                },

                '.link__default-text': {
                  transform: 'translateY(-125%)'
                }
              }
            },

            '.group.is-active &, &.is-active': {
              '.link__hover-text': {
                transform: 'none'
              },

              '.link__default-text': {
                transform: 'translateY(-125%)'
              }
            }
          },

          '&--innactive': {
            '&:after': {
              display: 'none'
            },

            '.splitter-row': {
              overflow: 'visible !important',

              '.link': {
                display: 'inline-block !important',
                verticalAlign: 'top'
              }
            }
          }
        }
      })
    }
  ],
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  variants: {
    aspectRatio: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    fontFamily: ['responsive', 'hover', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'checked'],
    transform: ['responsive', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    transformOrigin: ['responsive', 'hover', 'focus', 'group-hover'],
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
    transitionTimingFunction: ['responsive', 'hover', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'group-hover'],
    transitionDelay: ['responsive', 'hover', 'group-hover'],
    pointerEvents: ['responsive', 'hover', 'group-hover']
  },
  experimental: {
    optimizeUniversalDefaults: true
  }
}
