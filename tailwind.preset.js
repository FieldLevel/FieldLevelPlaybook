// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

const LOCAL_COLORS = {
    success: '#105e26'
};

module.exports = {
    theme: {
        screens: {
            xs: '400px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1440px'
        },
        container: {
            center: true,
            padding: '1rem'
        },
        fontSize: {
            'body-sm': ['0.75rem', '1.25rem'],
            body: ['0.875rem', '1.25rem'],
            'body-lg': ['1rem', '1.25rem']
        },
        fontWeight: {
            normal: 400,
            bold: 600
        },
        letterSpacing: {
            tight: '-.025em',
            wide: '.025em'
        },
        colors: {
            current: 'currentColor',
            text: {
                current: 'currentColor',
                base: colors.gray[800],
                muted: colors.gray[500],
                disabled: colors.gray[300],
                critical: '#991b1b',
                warning: colors.amber[900],
                highlight: '#4a6fa5',
                success: LOCAL_COLORS.success,
                'on-dark': colors.white,
                black: colors.black
            },
            interactive: {
                active: colors.sky[700],
                hover: colors.sky[900],
                visited: colors.gray[800]
            },
            primary: {
                base: colors.sky[700],
                disabled: colors.gray[100],
                hovered: colors.sky[600],
                pressed: colors.sky[800]
            },
            secondary: {
                base: colors.white,
                disabled: colors.gray[100],
                hovered: colors.gray[100],
                pressed: colors.gray[200]
            },
            critical: {
                base: colors.red[600],
                disabled: colors.gray[100],
                hovered: colors.red[700],
                pressed: colors.red[800]
            },
            border: {
                // NOTE: this is manually set to match in reset.css so if it changes here it needs to change there
                base: colors.gray[300],
                muted: colors.gray[200],
                critical: '#e03c3c',
                'critical-muted': '#f4a3a3',
                warning: colors.amber[600],
                'warning-muted': colors.amber[300],
                highlight: '#b8d4ea',
                'highlight-muted': '#e1ecf5',
                success: colors.emerald[500],
                'success-muted': colors.emerald[200],
                primary: colors.sky[700],
                black: colors.black
            },
            background: {
                base: colors.gray[100],
                muted: colors.gray[50],
                critical: '#fecaca',
                'critical-muted': '#feecec',
                warning: colors.amber[100],
                'warning-muted': colors.amber[50],
                highlight: '#eaf3fa',
                'highlight-muted': '#f5f9fc',
                success: colors.emerald[100],
                'success-muted': colors.emerald[50],
                black: colors.black
            },
            foreground: {
                base: colors.white,
                muted: colors.gray[50],
                dark: colors.gray[200],
                success: LOCAL_COLORS.success
            },
            divider: {
                base: colors.gray[200],
                muted: colors.gray[100]
            },
            icon: {
                base: colors.gray[600],
                disabled: colors.gray[300],
                muted: colors.gray[400],
                critical: '#991b1b',
                warning: colors.amber[800],
                highlight: '#4a6fa5',
                success: colors.emerald[700],
                'on-dark': colors.white
            },
            placeholder: {
                base: colors.gray[400]
            }
        },
        placeholderColor: (theme) => ({
            ...theme('colors.placeholder')
        }),
        textColor: (theme) => ({
            ...theme('colors.text'),
            interactive: {
                ...theme('colors.interactive')
            }
        }),
        borderColor: (theme) => ({
            ...theme('colors.border')
        }),
        backgroundColor: (theme) => ({
            transparent: 'transparent',
            background: {
                ...theme('colors.background')
            },
            foreground: {
                ...theme('colors.foreground')
            },
            primary: {
                ...theme('colors.primary')
            },
            secondary: {
                ...theme('colors.secondary')
            },
            critical: {
                ...theme('colors.critical')
            }
        }),
        divideColor: (theme) => ({
            ...theme('colors.divider')
        }),
        fill: (theme) => ({
            current: 'currentColor',
            icon: {
                ...theme('colors.icon')
            },
            background: {
                ...theme('colors.background')
            }
        }),
        extend: {
            maxHeight: {
                'screen-m': 'calc(100vh - theme(spacing.16))'
            },
            keyframes: {
                slideInDown: { from: { transform: 'translate3d(0, -100%, 0)' } },
                slideInLeft: { from: { transform: 'translate3d(-100%, 0, 0)' } },
                slideInRight: { from: { transform: 'translate3d(100%, 0, 0)' } },
                slideInUp: { from: { transform: 'translate3d(0, 100%, 0)' } }
            },
            animation: {
                'slide-in-down': 'slideInDown 0.5s forwards',
                'slide-in-left': 'slideInLeft 0.5s forwards',
                'slide-in-right': 'slideInRight 0.5s forwards',
                'slide-in-up': 'slideInUp 0.3s forwards ease-out'
            }
        }
    },
    corePlugins: {
        preflight: false,
        lineHeight: false,
        fontFamily: false,
        textOpacity: false,
        divideOpacity: false
    }
};
