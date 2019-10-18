import { storiesOf } from '@storybook/vue';
import AOverlay from '../../src/components/atoms/Overlay.vue';

storiesOf('atoms/Overlay', module).add(
  'playground',
  () => ({
    components: { AOverlay },
    template: `
      <div style="height: 300px; position: relative;">
        <a-overlay><span style="background: white;">window</span></a-overlay>
      </div>
    `
  })
);
