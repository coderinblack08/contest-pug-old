<template>
  <div id="app">
    <div class="antialiased box-border">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { onMounted } from '@vue/composition-api';

export default Vue.extend({
  name: 'App',
  setup(props, context) {
    const { $store } = context.root;
    onMounted(async () => {
      try {
        await $store.dispatch('auth/authenticate');
      } catch (error) {
        return;
      }
    });
  },
});
</script>
