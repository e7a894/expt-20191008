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
  openDialog() {
    const dialog = new MDialog();
    dialog.show();
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
