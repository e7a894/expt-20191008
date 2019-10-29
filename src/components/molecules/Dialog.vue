<template>
  <dialog ref="dialog">
    <a-button @click="close">
      button
    </a-button>
  </dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AButton from '~/components/atoms/Button.vue';
import { IDialog } from '~/components/molecules/types';

@Component({ components: { AButton } })
export default class Dialog extends Vue implements IDialog {
  dialog!: HTMLDialogElement;
  private attach() {
    if (!this.$parent) {
      this.$mount();
      document.body.appendChild(this.$el);
    } else {
      this.$mount();
      this.$parent.$el.appendChild(this.$el);
    }
  }
  private remove() {
    if (!this.$parent) {
      document.body.removeChild(this.$el);
      this.$destroy();
    } else {
      this.$parent.$el.removeChild(this.$el);
      this.$destroy();
    }
  }
  mounted() {
    this.dialog = this.$refs.dialog as HTMLDialogElement;
  }
  close() {
    if (this.dialog) this.dialog.close('yeah!');
    this.remove();
  }
  show(): Promise<string> {
    this.attach();
    return new Promise(resolve => {
      this.dialog.showModal();
      this.dialog.close = (v: string) => resolve(v);
    });
  }
}
</script>

<style lang="scss" scoped>
dialog {
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  &::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>
