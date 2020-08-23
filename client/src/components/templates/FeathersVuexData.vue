<template>
  <div>
    <div class="flex flex-wrap">
      <div v-for="(value, key) in values.data" :key="key"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@vue/composition-api';

export default defineComponent({
  setup(props, { root: { $store } }) {
    const values = reactive({ data: [] });
    const valueGetter = $store.getters['value/find'];
    onMounted(async () => {
      try {
        await $store.dispatch('value/find', { query: {} });
        values.data = valueGetter({ query: {} }).data;
      } catch (error) {
        console.error(error);
      }
    });
    return {
      values,
    };
  },
});
</script>
