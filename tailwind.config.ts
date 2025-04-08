import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '10rem',
      },
      screens: {
        'xl': '1440px',
        '2xl': '1650px',
      },
    },
  },
  plugins: [],
}

export default config
