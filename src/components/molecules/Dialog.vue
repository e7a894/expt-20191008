<template>
  <dialog ref="dialog" @cancel="() => close('')">
    <div>{{ message }}</div>
    <div>
      <button
        v-for="(b, index) in buttons"
        :key="index"
        @click="() => click(b.value, b.click)"
      >
        {{ b.text }}
      </button>
    </div>
  </dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';
import AButton from '~/components/atoms/Button.vue';
import { IButton, IDialog } from '~/components/molecules/types';

@Component({ components: { AButton } })
export default class Dialog extends Vue implements IDialog {
  private dialog!: HTMLDialogElement;

  @Prop() buttons!: IButton[];
  @Prop() message!: string;

  private attach() {
    this.$mount();
    if (!this.$parent) {
      document.body.appendChild(this.$el);
    } else {
      this.$parent.$el.appendChild(this.$el);
    }
  }

  private remove() {
    if (!this.$parent) {
      document.body.removeChild(this.$el);
    } else {
      this.$parent.$el.removeChild(this.$el);
    }
    this.$destroy();
  }

  private click(v: string, e: Function | null) {
    if (e) e();
    this.close(v);
  }

  mounted() {
    this.dialog = this.$refs.dialog as HTMLDialogElement;
    this.dialog.returnValue = '';
  }

  get returnValue(): string {
    return this.dialog.returnValue;
  }

  private close(value: string) {
    if (this.dialog) {
      this.dialog.returnValue = value;
      this.dialog.close();
    }
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
