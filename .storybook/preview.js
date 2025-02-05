import theme from './theme';

import '../src/styles.css';

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
