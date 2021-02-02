const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            sm: ['0.875rem', '1.25rem'],
            body: ['1rem', '1.25rem'],
            lg: ['1.125rem', '1.25rem']
        },
        fontWeight: {
            medium: 500,
            semibold: 600
        },
        letterSpacing: {
            tight: '-.025em',
            wide: '.025em'
        },
        colors: {
            'action-primary': {
                DEFAULT: colors.lightBlue[700],
                disabled: colors.coolGray[100],
                hovered: colors.lightBlue[600],
                pressed: colors.lightBlue[800]
            },
            'action-secondary': {
                DEFAULT: colors.white,
                disabled: colors.coolGray[100],
                hovered: colors.coolGray[100],
                pressed: colors.coolGray[200]
            },
            'action-critical': {
                DEFAULT: colors.red[600],
                disabled: colors.coolGray[100],
                hovered: colors.red[700],
                pressed: colors.red[800]
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
        textColor: {
            base: colors.coolGray[900],
            muted: colors.coolGray[500],
            disabled: colors.coolGray[300],
            critical: colors.red[900],
            warning: colors.amber[900],
            highlight: colors.blue[900],
            success: colors.emerald[900],
            dark: colors.white
        },
        borderColor: {
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
        backgroundColor: (theme) => ({
            ...theme('colors'),
            base: colors.coolGray[100],
            muted: colors.coolGray[50],
            foreground: colors.white,
            'foreground-muted': colors.coolGray[50],
            critical: colors.red[100],
            'critical-muted': colors.red[50],
            warning: colors.amber[100],
            'warning-muted': colors.amber[50],
            highlight: colors.blue[100],
            'highlight-muted': colors.blue[50],
            success: colors.emerald[100],
            'success-muted': colors.emerald[50]
        }),
        divideColor: {
            base: colors.coolGray[200],
            muted: colors.coolGray[100]
        },
        fill: (theme) => ({
            current: 'currentColor',
            icon: {
                ...theme('colors.icon')
            }
        }),
        extend: {}
    },
    corePlugins: {
        lineHeight: false
    },
    variants: {
        extend: {
            fill: ['hover', 'active']
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
