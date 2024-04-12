import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ['Epilogue', 'sans-serif'],
      title: ['Satoshi', 'sans-serif'],
      hand: ['Pencerio', 'serif'],
      test: ['var(--font-epi)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'my-blue': '#013D76',
        'my-violet': '#CAB8DB',
        'my-orange': '#ECA7A4',
        'my-pink': '#EF91B3',
        'my-beige': '#F6EFEE',
        'my-red': '#DF6950',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
