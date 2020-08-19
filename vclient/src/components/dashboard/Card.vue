<template>
  <div
    class="flex shadow bg-white rounded py-5 mr-5 mb-5 select-none cursor-pointer"
  >
    <span class="ml-8" />
    <div
      :class="`bg-${color}-400 hidden sm:block w-3 h-3 rounded-full mt-3 mr-3`"
    />
    <div>
      <h3 class="text-xl sm:text-2xl font-medium text-gray-700">
        {{ name }}
      </h3>
      <p class="text-md font-medium text-gray-500">{{ date }}</p>
    </div>
    <div>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="dots-vertical w-6 h-6 text-gray-500 mr-2 ml-10 cursor-pointer"
      >
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
  props: {
    color: String,
    name: String,
    date: String,
  },
});
</script>
