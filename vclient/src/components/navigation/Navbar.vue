<template>
  <header class="bg-white w-screen text-gray-700 body-font">
    <div class="container mx-auto flex flex-col md:flex-row p-4 items-center">
      <div class="flex w-full md:w-48">
        <router-link
          to="/"
          class="flex title-font font-semibold items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            class="w-10"
            src="../../assets/logo.svg"
            alt="Contest Pug Logo"
          />
          <span class="ml-3 text-xl">Contest Pug</span>
        </router-link>
        <div
          class="flex items-center justify-center rounded-lg w-12 h-12 transition ease-in duration-500 hover:bg-gray-200 md:hidden ml-auto mb-2 text-gray-600 cursor-pointer"
          @click="toggleNavbar"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="menu-alt3 w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <nav
        :class="[
          showNavbar ? 'flex' : 'hidden',
          'md:ml-auto md:flex flex-wrap items-center text-base justify-center',
        ]"
      >
        <router-link to="/" class="mr-8 hover:text-gray-900">
          Our Message
        </router-link>
        <router-link to="/team" class="mr-8 hover:text-gray-900">
          Our Team
        </router-link>
        <router-link to="/login" class="mr-8 hover:text-gray-900">
          Login
        </router-link>
        <router-link
          to="/register"
          class="inline-flex items-center md:bg-primary md:shadow-outline-blue md:text-white border-0 py-3 md:py-2 md:px-4 md:hover:shadow-md focus:outline-none rounded text-base"
        >
          Get Started
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@vue/composition-api';

export default Vue.extend({
  name: 'Navbar',
  setup() {
    const showNavbar = ref(false);
    const toggleNavbar = () => (showNavbar.value = !showNavbar.value);
    return {
      showNavbar,
      toggleNavbar,
    };
  },
});
</script>
