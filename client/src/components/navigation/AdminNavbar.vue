<template>
  <div class="hidden md:block relative z-50 text-left font-normal">
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      class="menu w-6 h-6 text-gray-600 cursor-pointer"
      @click="showDropdown = !showDropdown"
    >
      <path
        fill-rule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clip-rule="evenodd"
        v-if="showDropdown"
      ></path>
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
        v-else
      ></path>
    </svg>
    <div
      class="origin-top-right absolute left-0 mt-4 w-48 rounded-md shadow-lg"
      v-if="showDropdown"
    >
      <div class="rounded-md bg-white shadow-xs">
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <router-link
            :to="{ name: 'Problems', params: { id: $route.params.id } }"
            class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Edit Problems
          </router-link>
          <a
            href="#"
            class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Grade Submissions
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Contest Setttings
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const showDropdown = ref(false);
    return { showDropdown };
  },
});
</script>
