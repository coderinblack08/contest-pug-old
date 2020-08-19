<template>
  <div
    class="fixed bottom-0 z-50 flex lg:hidden justify-around items-center bg-white border-t border-gray-300 w-screen py-4 md:py-6"
  >
    <router-link
      to="/dashboard"
      :class="[
        'cursor-pointer p-3 md:py-3 md:px-8 flex items-center justify-center rounded',
        this.$route.path === '/dashboard' ? 'shadow bg-gray-50' : '',
      ]"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="text-gray-600 w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        ></path>
      </svg>
    </router-link>
    <router-link
      to="/search"
      :class="[
        'cursor-pointer p-3 md:py-3 md:px-8 flex items-center justify-center rounded',
        this.$route.path === '/search' ? 'shadow bg-gray-50' : '',
      ]"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="text-gray-600 w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </router-link>
    <router-link
      to="/contests"
      :class="[
        'cursor-pointer p-3 md:py-3 md:px-8 flex items-center justify-center rounded',
        this.$route.path === 'dashboard' ? 'shadow bg-gray-50' : '',
      ]"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="text-gray-600 w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        ></path>
      </svg>
    </router-link>
    <router-link
      to="/scores"
      :class="[
        'cursor-pointer p-3 md:py-3 md:px-8 flex items-center justify-center rounded',
        this.$route.path === 'dashboard' ? 'shadow bg-gray-50' : '',
      ]"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="text-gray-600 w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        ></path>
      </svg>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MobileSidenav',
});
</script>
