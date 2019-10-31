import { storiesOf } from '@storybook/vue';
import MDialog from '../../src/components/molecules/Dialog.vue';
import { IDialog } from '../../src/components/molecules/types';

interface data {
  result: string;
}

storiesOf('molecules/Dialog', module).add('playground', () => ({
  components: { MDialog },
  data(): data {
    return { result: '' };
  },
  template: `<div>
    <button @click="openDialog">dialog</button>
    <p>result: {{ result }}</p>
    </div>`,
  methods: {
    async openDialog() {
      const dialog: IDialog = new MDialog();
      dialog.buttons = [
        { text: 'delete', value: 'delete!' },
        { text: 'cancel', value: 'cancel!' }
      ];
      dialog.message = 'Are you sure you want to delete?';
      await dialog.show();
      (this as data).result = dialog.returnValue;
    }
  }
}));
