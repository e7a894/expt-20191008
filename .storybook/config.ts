import { configure } from '@storybook/vue';

const req = require.context('../stories', true, /.stor(y|ies).ts$/);
const loadStories = () => req.keys().forEach(file => req(file));

configure(loadStories, module)
