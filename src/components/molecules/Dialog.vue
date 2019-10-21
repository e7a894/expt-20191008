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

@Component({ components: { AButton } })
export default class Dialog extends Vue {
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
    // if (!this.dialog) this.dialog = this.$refs.dialog as HTMLDialogElement;
    if (this.dialog) this.dialog.close('yeah!');
    // (this.$refs.dialog as HTMLDialogElement).close();
    this.remove();
  }
  show(): Promise<string> {
    this.attach();
    // if (!this.dialog) this.dialog = this.$refs.dialog as HTMLDialogElement;
    return new Promise((resolve) => {
      this.dialog.showModal();
      this.dialog.close = function(v: string) { resolve(v); };
    });
    // if (this.dialog) {
    //   const result = await this.dialog.showModal();
    //   return result;
    // }
    // (this.$refs.dialog as HTMLDialogElement).showModal();
  }
}
</script>
