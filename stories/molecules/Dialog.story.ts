import { storiesOf } from '@storybook/vue';
import { number } from '@storybook/addon-knobs';
import MDialog from '../../src/components/molecules/Dialog.vue';

storiesOf('molecules/Dialog', module).add(
  'playground',
  () => ({
    components: { MDialog },
    data() {
      return { dialog: new MDialog() };
    },
    props: {
      width: { default: number('width', 300) }
    },
    template: `<button @click="openDialog(dialog)">dialog</button>`,
    methods: {
      openDialog(dialog) {
        dialog.show();
      }
    }
  })
);
