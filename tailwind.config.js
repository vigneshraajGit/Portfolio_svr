/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0b0f19',
          800: '#151b2b',
          700: '#1f2937',
        },
        accent: {
          primary: '#5a4efb',
          secondary: '#7785f5',
        }
      },
      fontFamily: {
        anta: ['Anta', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        delius: ['Delius', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'space-gradient': 'linear-gradient(to bottom, #0b0f19, #151b2b)',
      }
    },
  },
  plugins: [],
}
