import { storiesOf } from '@storybook/vue';
import AButton from '../../src/components/atoms/Button.vue';

storiesOf('atoms/Button', module).add(
  'playground',
  () => ({
    components: { AButton },
    template: `<a-button>button</a-button>`
  })
);
