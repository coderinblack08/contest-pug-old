<template>
  <div class="flex items-center">
    <div class="flex flex-col items-center pr-8 border-r">
      <div class="flex items-center">
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          view-box="0 0 24 24"
          class="w-6 h-6 text-gray-700 mr-2"
          stroke="currentColor"
        >
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <h2 class="text-gray-700 text-2xl font-medium leading-none">
          85%
        </h2>
      </div>
      <div class="text-gray-600 font-medium leading-snug">Average</div>
    </div>
    <div class="flex flex-col items-center pl-8">
      <div class="flex items-center">
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          view-box="0 0 24 24"
          class="text-gray-700 w-6 h-6 mr-2"
          stroke="currentColor"
        >
          <path
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h2 class="text-gray-700 text-2xl font-medium leading-none">
          17
        </h2>
      </div>
      <div class="text-gray-600 font-medium leading-snug">Contests</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Statistics',
});
</script>

<style scoped></style>
