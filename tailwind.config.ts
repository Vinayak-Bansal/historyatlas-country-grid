import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				/* Custom HistoryAtlas colors */
				'vintage-gold': 'hsl(var(--vintage-gold))',
				'map-blue': 'hsl(var(--map-blue))',
				'parchment': 'hsl(var(--parchment))',
				'earth-brown': 'hsl(var(--earth-brown))',
				/* Modern sleek colors */
				'modern-purple': 'hsl(var(--modern-purple))',
				'modern-cyan': 'hsl(var(--modern-cyan))',
				'modern-emerald': 'hsl(var(--modern-emerald))',
        
        // Country Detail Page Colors
        "hero-bg": "hsl(var(--hero-bg))",
        "hero-bg-end": "hsl(var(--hero-bg-end))",
        "stats-bg": "hsl(var(--stats-bg))",
        "timeline-bg": "hsl(var(--timeline-bg))",
        "text-primary": "hsl(var(--text-primary))",
        "chart-blue": "hsl(var(--chart-blue))",
        "chart-green": "hsl(var(--chart-green))",
        "chart-gray": "hsl(var(--chart-gray))"
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-modern': 'var(--gradient-modern)',
				'gradient-sleek': 'var(--gradient-sleek)',
        "gradient-country-hero": "linear-gradient(135deg, hsl(var(--hero-bg)), hsl(var(--hero-bg-end)))"
			},
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "Inter", "sans-serif"],
        body: ["Open Sans", "Roboto", "sans-serif"],
      },
			boxShadow: {
				'vintage': 'var(--shadow-vintage)',
				'card-hover': 'var(--shadow-card)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
