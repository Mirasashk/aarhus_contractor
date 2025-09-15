/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'var(--color-border)' /* Subtle surface differentiation, natural linen texture */,
				input: 'var(--color-input)' /* Warm white foundation, Danish interior calm */,
				ring: 'var(--color-ring)' /* Warm Danish oak tone, craftsmanship heritage */,
				background:
					'var(--color-background)' /* Pure content canvas, gallery-quality backdrop */,
				foreground:
					'var(--color-foreground)' /* Rich charcoal, extended reading comfort */,
				primary: {
					DEFAULT:
						'var(--color-primary)' /* Warm Danish oak tone, craftsmanship heritage */,
					foreground:
						'var(--color-primary-foreground)' /* Pure content canvas, gallery-quality backdrop */,
				},
				secondary: {
					DEFAULT:
						'var(--color-secondary)' /* Subtle surface differentiation, natural linen texture */,
					foreground:
						'var(--color-secondary-foreground)' /* Rich charcoal, extended reading comfort */,
				},
				destructive: {
					DEFAULT:
						'var(--color-destructive)' /* Clay red, helpful concern */,
					foreground:
						'var(--color-destructive-foreground)' /* Pure content canvas, gallery-quality backdrop */,
				},
				muted: {
					DEFAULT:
						'var(--color-muted)' /* Gentle elevation, handcrafted paper feel */,
					foreground:
						'var(--color-muted-foreground)' /* Clear hierarchy, supporting information */,
				},
				accent: {
					DEFAULT:
						'var(--color-accent)' /* Sage green focus, Nordic forest connection */,
					foreground:
						'var(--color-accent-foreground)' /* Pure content canvas, gallery-quality backdrop */,
				},
				popover: {
					DEFAULT:
						'var(--color-popover)' /* Warm white foundation, Danish interior calm */,
					foreground:
						'var(--color-popover-foreground)' /* Rich charcoal, extended reading comfort */,
				},
				card: {
					DEFAULT:
						'var(--color-card)' /* Warm white foundation, Danish interior calm */,
					foreground:
						'var(--color-card-foreground)' /* Rich charcoal, extended reading comfort */,
				},
				success: {
					DEFAULT:
						'var(--color-success)' /* Muted forest green, positive confirmation */,
					foreground:
						'var(--color-success-foreground)' /* Pure content canvas, gallery-quality backdrop */,
				},
				warning: {
					DEFAULT:
						'var(--color-warning)' /* Warm amber, gentle attention */,
					foreground:
						'var(--color-warning-foreground)' /* Rich charcoal, extended reading comfort */,
				},
				error: {
					DEFAULT:
						'var(--color-error)' /* Clay red, helpful concern */,
					foreground:
						'var(--color-error-foreground)' /* Pure content canvas, gallery-quality backdrop */,
				},
				// Brand specific colors
				brand: {
					primary:
						'var(--color-brand-primary)' /* Warm Danish oak tone, craftsmanship heritage */,
					secondary:
						'var(--color-brand-secondary)' /* Sage green reflecting Danish interior trends */,
				},
				conversion: {
					accent: 'var(--color-conversion-accent)' /* Warm honey tone for call-to-action elements */,
				},
				trust: {
					builder:
						'var(--color-trust-builder)' /* Professional gray for certifications */,
				},
				text: {
					secondary:
						'var(--color-text-secondary)' /* Medium gray for body text */,
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				headlines: ['ui-sans-serif', 'system-ui', 'sans-serif'],
				body: ['ui-serif', 'Georgia', 'serif'],
				cta: ['ui-sans-serif', 'system-ui', 'sans-serif'],
				accent: ['ui-serif', 'Georgia', 'serif'],
			},
			fontSize: {
				'headline-primary': [
					'3rem',
					{ lineHeight: '1.1', fontWeight: '600' },
				],
				'headline-secondary': [
					'2rem',
					{ lineHeight: '1.2', fontWeight: '500' },
				],
				'body-primary': [
					'1.125rem',
					{ lineHeight: '1.6', fontWeight: '400' },
				],
				'body-secondary': [
					'1rem',
					{ lineHeight: '1.6', fontWeight: '400' },
				],
				'cta-text': ['1rem', { lineHeight: '1.4', fontWeight: '500' }],
				'accent-text': [
					'1.25rem',
					{ lineHeight: '1.4', fontWeight: '400' },
				],
			},
			spacing: {
				xs: 'var(--spacing-xs)' /* 8px */,
				sm: 'var(--spacing-sm)' /* 13px */,
				md: 'var(--spacing-md)' /* 21px */,
				lg: 'var(--spacing-lg)' /* 34px */,
				xl: 'var(--spacing-xl)' /* 55px */,
			},
			boxShadow: {
				subtle: 'var(--shadow-subtle)',
				card: 'var(--shadow-card)',
				elevated: 'var(--shadow-elevated)',
			},
			animation: {
				'hygge-breathing':
					'hygge-warmth 8s ease-in-out infinite alternate',
				'gentle-hover':
					'gentle-hover 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
			},
			keyframes: {
				'hygge-warmth': {
					'0%': { backgroundColor: 'var(--season-background)' },
					'100%': { backgroundColor: 'var(--season-background-alt)' },
				},
				'gentle-hover': {
					'0%': { transform: 'translateY(0) scale(1)' },
					'100%': { transform: 'translateY(-8px) scale(1.02)' },
				},
			},
			transitionTimingFunction: {
				gentle: 'var(--timing-gentle)',
			},
			transitionDuration: {
				fast: 'var(--duration-fast)',
				medium: 'var(--duration-medium)',
				slow: 'var(--duration-slow)',
			},
			backdropBlur: {
				consultation: '10px',
			},
			zIndex: {
				header: '50',
				sidebar: '40',
				modal: '60',
				tooltip: '70',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
	],
};
