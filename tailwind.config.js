/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — edit these to retheme the whole site
        ink: '#05070d',        // page background (near-black, blue-tinted)
        panel: '#0b0f1a',      // card / panel surfaces
        cyan: {
          glow: '#22d3ee',     // primary accent
        },
        violet: {
          glow: '#a78bfa',     // secondary accent
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -8px rgba(34, 211, 238, 0.35)',
        'glow-violet': '0 0 40px -8px rgba(167, 139, 250, 0.35)',
      },
    },
  },
  plugins: [],
}
