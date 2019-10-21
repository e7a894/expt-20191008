<template>
  <div>
    <h1>Hello world!</h1>
    <button @click="openDialog">
      dialog
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MDialog from '~/components/molecules/Dialog.vue';

@Component({ components: { MDialog } })
export default class extends Vue {
  async openDialog() {
    const dialog = new MDialog();
    const result = await dialog.show();
    console.log(`result: ${result}`);
  }
}

// export default Vue.extend({
//   // components: { MDialog },
//   methods: {
//     openDialog() {
//       const dialog = new MDialog();
//       dialog.show();
//     }
//   }
// });

</script>
