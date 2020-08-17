<template>
  <div id="app">
    <div class="antialiased box-border">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
