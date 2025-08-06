/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'scan': 'scan 3s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      fontFamily: {
        'mono': ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },
      dropShadow: {
        'glow': [
          '0 0 20px rgba(34, 197, 94, 0.35)',
          '0 0 65px rgba(34, 197, 94, 0.2)'
        ],
        'glow-blue': [
          '0 0 20px rgba(59, 130, 246, 0.35)',
          '0 0 65px rgba(59, 130, 246, 0.2)'
        ]
      }
    },
  },
  plugins: [],
};