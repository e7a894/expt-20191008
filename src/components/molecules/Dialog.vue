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
  close() {
    (this.$refs.dialog as HTMLDialogElement).close();
    this.remove();
  }
  show() {
    this.attach();
    (this.$refs.dialog as HTMLDialogElement).showModal();
  }
}
</script>
