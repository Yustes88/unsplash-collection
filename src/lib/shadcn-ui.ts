import animatePlugin from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import {fontFamily} from 'tailwindcss/defaultTheme'
import type {Config} from 'tailwindcss'

const shadcnPlugin = plugin(
  // 1. add css variables definitions to the base layer
  function ({addBase}) {
    addBase({
      ':root': {
        '--background': '0 0% 100%',
        '--foreground': '240 10% 3.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '240 10% 3.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '240 10% 3.9%',
        '--primary': '240 5.9% 10%',
        '--primary-foreground': '0 0% 98%',
        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',
        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',
        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--ring': '240 10% 3.9%',
        '--radius': '0.5rem',
        '--gray-50': '220, 13%, 91%, 0.8',
        '--gray-100': '221, 8%, 46%',
        '--white-50': '0, 0%, 100%',
        '--white-100': '220, 13%, 91%',
        '--dark-100': '222, 36%, 11%',
        '--fs-display': '2.25rem',
        '--lh-display': '2.5rem',
        '--fs-base': '1rem',
        '--lh-base': '1.5rem',
        '--fs-sm': '0.875rem',
        '--lh-sm': '1.25rem',
        '--fs-xs': '0.75rem',
        '--lh-xs': '1rem',
      },
      '.dark': {
        '--background': '222, 36%, 11%',
        '--foreground': '0 0% 98%',
        '--card': '240 10% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--popover': '240 10% 3.9%',
        '--popover-foreground': '0 0% 98%',
        '--primary': '0 0% 98%',
        '--primary-foreground': '240 5.9% 10%',
        '--secondary': '240 3.7% 15.9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '240 3.7% 15.9%',
        '--muted-foreground': '240 5% 64.9%',
        '--accent': '240 3.7% 15.9%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '240 3.7% 15.9%',
        '--input': '240 3.7% 15.9%',
        '--ring': '240 4.9% 83.9%',
      },
    }),
      addBase({
        '*': {
          '@apply border-border': {},
        },
        body: {
          '@apply bg-background text-foreground': {},
        },
      })
  },

  // 2. Extend the tailwind theme with utilities
  {
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1200px',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },

      fontSize: {
        display: ['var(--fs-display)', {lineHeight: 'var(--lh-display)'}],
        sm: ['var(--fs-sm)', {lineHeight: 'var(--lh-sm)'}],
        xs: ['var(--fs-xs)', {lineHeight: 'var(--lh-xs)'}],
        base: ['var(--fs-base)', {lineHeight: 'var(--lh-base)'}],
      },

      extend: {
        gridTemplateColumns: {
          collection: 'repeat(auto-fill, minmax(20rem, 1fr))',
        },

        colors: {
          'gray-50': 'hsl(var(--gray-50))',
          'gray-100': 'hsl(var(--gray-100))',

          'white-50': 'hsl(var(--white-50))',
          'white-100': 'hsl(var(--white-100))',
          'dark-100': 'hsl(var(--dark-100))',

          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: {height: '0'},
            to: {height: 'var(--radix-accordion-content-height)'},
          },
          'accordion-up': {
            from: {height: 'var(--radix-accordion-content-height)'},
            to: {height: '0'},
          },
          gradient: {
            '0%': {backgroundPosition: '0% 50%'},
            '100%': {backgroundPosition: '100% 50%'},
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          gradient: 'gradient 6s linear infinite',
        },
      },
    },
  },
)

export const shadcnPreset = {
  prefix: '',
  darkMode: ['class'],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config
