/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['var(--font-sans)', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				fadeToRight: 'fadeToRight 0.5s ease-in-out',
				shake: 'shake 0.5s ease-in-out'
			},
			keyframes: {
				fadeToRight: {
					'0%': { opacity: 0, transform: 'translateX(-1rem)' },
					'70%': { opacity: 1, transform: 'translateX(0)' },
					'100%': { opacity: 0, transform: 'translateX(0)' },
				},
				shake: {
					'0%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(0.5rem)' },
					'50%': { transform: 'translateX(-0.5rem)' },
					'75%': { transform: 'translateX(0.5rem)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
}

