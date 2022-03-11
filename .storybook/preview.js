import { TitleWithVersion } from '../docs/utils';
import theme from './theme';

export const parameters = {
    options: {
        storySort: {
            method: 'alphabetical',
            order: [TitleWithVersion, 'Status', 'Icon Set', 'CSS Utilities']
        }
    },
    docs: {
        theme: theme
    }
};
