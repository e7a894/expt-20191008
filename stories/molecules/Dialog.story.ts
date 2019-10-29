import { storiesOf } from '@storybook/vue';
import { number } from '@storybook/addon-knobs';
import MDialog from '../../src/components/molecules/Dialog.vue';
import { IDialog } from '../../src/components/molecules/types';

storiesOf('molecules/Dialog', module).add('playground', () => ({
  components: { MDialog },
  data() {
    return { result: '' };
  },
  props: {
    width: { default: number('width', 300) }
  },
  template: `<div>
    <button @click="openDialog">dialog</button>
    <p>result: {{ result }}</p>
    </div>`,
  methods: {
    async openDialog() {
      const dialog: IDialog = new MDialog();
      const result = await dialog.show();
      this.result = result;
    }
  }
}));
