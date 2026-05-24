/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:        '#1F6B4B',
          'primary-deep': '#154E37',
          'primary-soft': '#E6F0EA',
          secondary:      '#E2A23B',
          'secondary-deep': '#B8801E',
          'secondary-soft': '#FBEFD6',
        },
        ink: {
          1: '#15201B', 2: '#38463F', 3: '#5B6660', 4: '#8A9189', 5: '#B8BCB7',
        },
        line: { 1: '#E5E7E3', 2: '#EEEFEC' },
        surface: '#FAFAF7',
        inset:   '#F2F3F0',
        cream:   { 1: '#FBF7EE', 2: '#F4ECDA' },
        success: '#2E7D5B',
        warning: '#C97A14',
        danger:  '#B23A2C',
        info:    '#2E6BA8',
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body:    ['Manrope', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // [size, lineHeight]
        hero:   ['clamp(40px, 6vw, 84px)',   { lineHeight: '0.96', letterSpacing: '-0.04em' }],
        h2:     ['clamp(32px, 3.8vw, 52px)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        h2sm:   ['clamp(28px, 3.4vw, 44px)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider2:    '0.18em',
      },
      borderRadius: {
        xs: '4px', sm: '8px', md: '10px', lg: '14px', xl: '20px', '2xl': '28px',
      },
      boxShadow: {
        soft:   '0 1px 2px rgba(21,32,27,0.06), 0 1px 1px rgba(21,32,27,0.04)',
        ring:   '0 4px 12px -2px rgba(21,32,27,0.08), 0 2px 4px -1px rgba(21,32,27,0.05)',
        lift:   '0 16px 32px -8px rgba(21,32,27,0.12), 0 4px 8px -2px rgba(21,32,27,0.06)',
        deep:   '0 32px 64px -16px rgba(21,32,27,0.18)',
        cta:    '0 6px 16px -8px rgba(31,107,75,0.45)',
        'cta-hover': '0 10px 24px -10px rgba(31,107,75,0.55)',
        wa:     '0 12px 28px -10px rgba(37,211,102,0.55)',
        'wa-hover': '0 16px 36px -10px rgba(37,211,102,0.7)',
      },
      maxWidth: {
        container: '1240px',
        prose: '640px',
      },
      transitionTimingFunction: {
        out:  'cubic-bezier(0.2, 0.8, 0.2, 1)',
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        ping2: {
          '0%':   { transform: 'scale(1)',   opacity: '0.35' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        ping2:   'ping2 2s ease-out infinite',
      },
      backdropBlur: { xs: '4px' },
    },
  },
  plugins: [],
};
