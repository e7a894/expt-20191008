import { storiesOf } from '@storybook/vue';
import ADialog from '../../src/components/atoms/Dialog.vue';

storiesOf('atoms/Dialog', module).add(
  'playground',
  () => ({
    components: { ADialog },
    template: `<a-dialog />`
  })
);
