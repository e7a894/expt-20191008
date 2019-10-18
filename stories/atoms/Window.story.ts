import { storiesOf } from '@storybook/vue';
import { number } from '@storybook/addon-knobs';
import AWindow from '../../src/components/atoms/Window.vue';

storiesOf('atoms/Window', module).add(
  'playground',
  () => ({
    components: { AWindow },
    props: {
      width: { default: number('width', 300) }
    },
    template: `<a-window :width="width"><button>button</button></a-window>`
  })
);
