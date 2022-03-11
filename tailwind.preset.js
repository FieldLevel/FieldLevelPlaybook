// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    darkMode: false,
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
            bold: 500
        },
        letterSpacing: {
            tight: '-.025em',
            wide: '.025em'
        },
        colors: {
            text: {
                base: colors.gray[800],
                muted: colors.gray[500],
                disabled: colors.gray[300],
                critical: colors.red[900],
                warning: colors.amber[900],
                highlight: colors.blue[900],
                success: '#105e26',
                'on-dark': colors.white
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
                base: colors.gray[300],
                muted: colors.gray[200],
                critical: colors.red[400],
                'critical-muted': colors.red[200],
                warning: colors.amber[600],
                'warning-muted': colors.amber[300],
                highlight: colors.blue[400],
                'highlight-muted': colors.blue[200],
                success: colors.emerald[500],
                'success-muted': colors.emerald[200],
                primary: colors.sky[700]
            },
            background: {
                base: colors.gray[100],
                muted: colors.gray[50],
                critical: colors.red[100],
                'critical-muted': colors.red[50],
                warning: colors.amber[100],
                'warning-muted': colors.amber[50],
                highlight: colors.blue[100],
                'highlight-muted': colors.blue[50],
                success: colors.emerald[100],
                'success-muted': colors.emerald[50]
            },
            foreground: {
                base: colors.white,
                muted: colors.gray[50]
            },
            divider: {
                base: colors.gray[200],
                muted: colors.gray[100]
            },
            icon: {
                base: colors.gray[600],
                disabled: colors.gray[300],
                muted: colors.gray[400],
                critical: colors.red[800],
                warning: colors.amber[800],
                highlight: colors.blue[800],
                success: colors.emerald[700],
                'on-dark': colors.white
            }
        },
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
            }
        }
    },
    corePlugins: {
        preflight: false,
        lineHeight: false,
        fontFamily: false,
        textOpacity: false,
        divideOpacity: false
    },
    variants: {
        extend: {
            fill: ['hover', 'active'],
            backgroundColor: ['active'],
            backgroundOpacity: ['active'],
            outline: ['active'],
            boxShadow: ['active']
        }
    }
};
