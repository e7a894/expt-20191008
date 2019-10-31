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
import { Component } from 'nuxt-property-decorator';
import MDialog from '~/components/molecules/Dialog.vue';
import { IButton } from '~/components/molecules/types';

@Component({ components: { MDialog } })
export default class extends Vue {
  buttons: IButton[] = [{ text: 'save', value: 'save' }, { text: 'cancel' }];
  async openDialog() {
    const dialog = new MDialog();
    dialog.buttons = this.buttons;
    await dialog.show();
  }
}
</script>
