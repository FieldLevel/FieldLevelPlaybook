// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    // purge: ['./src/**/*.tsx', './docs/**/*.tsx'],
    purge: false,
    darkMode: false,
    theme: {
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
                base: colors.coolGray[800],
                muted: colors.coolGray[500],
                disabled: colors.coolGray[300],
                critical: colors.red[900],
                warning: colors.amber[900],
                highlight: colors.blue[900],
                success: colors.emerald[900],
                dark: colors.white
            },
            interactive: {
                active: colors.lightBlue[700],
                hover: colors.lightBlue[900],
                visited: colors.coolGray[800]
            },
            primary: {
                base: colors.lightBlue[700],
                disabled: colors.coolGray[100],
                hovered: colors.lightBlue[600],
                pressed: colors.lightBlue[800]
            },
            secondary: {
                base: colors.white,
                disabled: colors.coolGray[100],
                hovered: colors.coolGray[100],
                pressed: colors.coolGray[200]
            },
            critical: {
                base: colors.red[600],
                disabled: colors.coolGray[100],
                hovered: colors.red[700],
                pressed: colors.red[800]
            },
            border: {
                base: colors.coolGray[300],
                muted: colors.coolGray[200],
                critical: colors.red[400],
                'critical-muted': colors.red[200],
                warning: colors.amber[600],
                'warning-muted': colors.amber[300],
                highlight: colors.blue[400],
                'highlight-muted': colors.blue[200],
                success: colors.emerald[500],
                'success-muted': colors.emerald[200]
            },
            background: {
                base: colors.coolGray[100],
                muted: colors.coolGray[50],
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
                muted: colors.coolGray[50]
            },
            divider: {
                base: colors.coolGray[200],
                muted: colors.coolGray[100]
            },
            icon: {
                base: colors.coolGray[600],
                'base-hovered': colors.coolGray[800],
                'base-pressed': colors.coolGray[700],
                disabled: colors.coolGray[300],
                muted: colors.coolGray[400],
                critical: colors.red[800],
                warning: colors.amber[800],
                highlight: colors.blue[800],
                success: colors.emerald[700]
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
            }
        })
    },
    corePlugins: {
        preflight: false,
        lineHeight: false,
        fontFamily: false
    },
    variants: {
        extend: {
            fill: ['hover', 'active']
        }
    }
};
