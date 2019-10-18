<template>
  <button @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Button',
  methods: {
    click() {
      this.$emit('click');
    }
  }
});
</script>
