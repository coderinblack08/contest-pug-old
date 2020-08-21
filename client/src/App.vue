<template>
  <div id="app">
    <div class="antialiased box-border">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';

export default defineComponent({
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
