/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      boxShadow:{
        'glass-inset': 'inset 0 0 10px rgba(255, 255, 255, 0.2)',
        'glass-sm':'5px 5px 20px 0px rgba(254,254,91,0.3)',
      },
      keyframes:{
        'spin-reverse':{
          '0%':{transform:'rotate(0deg'},
          '100%':{transform:'rotate(360deg)'}
        }
      },
      animation:{
        'spin-slow':'spin 40s linear infinite',
        'spin-slow-reverse':'spin-reverse 40s linear infinite',
      },
      screens:{
        xs:'480px'
      }
    },
  },
  plugins: [],
}

