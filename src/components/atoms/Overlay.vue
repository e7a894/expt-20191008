<template>
  <div class="overlay">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Overlay'
});
</script>

<style lang="scss" scoped>
.overlay {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
