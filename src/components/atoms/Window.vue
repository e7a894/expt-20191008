<template>
  <div class="window" :style="{ width: `${width}px` }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Window',
  props: {
    width: { type: Number, default: 300 }
  }
});
</script>

<style lang="scss" scoped>
.window {
  background: #ddd;
}
</style>
