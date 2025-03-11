import theme from './theme';

import '../src/css/styles.css';

export const parameters = {
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Playbook', 'Status', 'Icon Set', 'CSS Utilities']
        }
    },
    docs: {
        theme: theme
    }
};
