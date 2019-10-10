<template>
  <div>
    <h1>Hello world!</h1>
    <a-dialog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ADialog from '~/components/atoms/Dialog.vue';

export default Vue.extend({
  components: { ADialog }
});
</script>
