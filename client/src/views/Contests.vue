<template>
  <div class="flex bg-gray-100">
    <Sidenav />
    <MobileSidenav />
    <div class="w-full h-screen overflow-y-scroll">
      <header
        class="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 sm:py-0 sm:h-24 w-full border-b border-gray-200"
      >
        <div class="flex items-center">
          <Statistics />
        </div>
        <router-link
          to="/actions/create"
          tag="button"
          class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none focus:shadow-outline-blue bg-white shadow py-3 px-5 text-gray-600 font-medium"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="view-grid-add w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            ></path>
          </svg>
          New Contest
        </router-link>
      </header>
      <div class="block lg:hidden h-32"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidenav from '../components/navigation/Sidenav.vue';
import Statistics from '../components/shared/Statistics.vue';
import MobileSidenav from '../components/navigation/MobileSidenav.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Contests',
  components: {
    Sidenav,
    Statistics,
    MobileSidenav,
  },
});
</script>
