import { addDecorator, configure } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import '../src/assets/global.scss';

const req = require.context('../stories', true, /.stor(y|ies).ts$/);
const loadStories = () => req.keys().forEach(file => req(file));

addDecorator(withKnobs);
configure(loadStories, module)
