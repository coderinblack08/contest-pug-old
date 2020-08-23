<template>
  <div
    class="hidden lg:block h-screen w-full max-w-xs bg-white border-r border-gray-200"
  >
    <router-link to="/dashboard">
      <a
        class="flex title-font font-semibold items-center px-8 py-4 text-gray-900"
      >
        <img class="w-10" src="@/assets/logo.svg" alt="Contest Pug Logo" />
        <span class="ml-3 text-xl">Contest Pug</span>
      </a>
    </router-link>
    <nav class="flex flex-col px-5 py-2">
      <router-link
        to="/dashboard"
        :class="[
          'flex items-center text-gray-600 font-medium text-xl px-6 py-4',
          this.$route.path === '/dashboard' ? 'bg-gray-100 rounded-md' : '',
        ]"
      >
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linkjoin="round"
          stroke-width="2"
          view-box="0 0 24 24"
          class="text-gray-600 w-6 h-6 mr-3"
          stroke="currentColor"
        >
          <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Dashboard
      </router-link>
      <router-link
        to="/search"
        :class="[
          'flex items-center text-gray-600 font-medium text-xl px-6 py-4',
          this.$route.path === '/search' ? 'bg-gray-100 rounded-md' : '',
        ]"
      >
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linkjoin="round"
          stroke-width="2"
          view-box="0 0 24 24"
          class="text-gray-600 w-6 h-6 mr-3"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search
      </router-link>
      <router-link
        to="/contests"
        :class="[
          'flex items-center text-gray-600 font-medium text-xl px-6 py-4',
          this.$route.path === '/contests' ? 'bg-gray-100 rounded-md' : '',
        ]"
      >
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linkjoin="round"
          stroke-width="2"
          view-box="0 0 24 24"
          class="text-gray-600 w-6 h-6 mr-3"
          stroke="currentColor"
        >
          <path
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        Contests
      </router-link>
      <router-link
        to="/scores"
        :class="[
          'flex items-center text-gray-600 font-medium text-xl px-6 py-4',
          this.$route.path === '/scores' ? 'bg-gray-100 rounded-md' : '',
        ]"
      >
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linkjoin="round"
          stroke-width="2"
          view-box="0 0 24 24"
          class="text-gray-600 w-6 h-6 mr-3"
          stroke="currentColor"
        >
          <path
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
        Scores
      </router-link>
    </nav>
    <div class="absolute bottom-0 max-w-xs w-full">
      <div
        class="ml-auto mr-3 rounded-lg bg-white shadow overflow-hidden p-2 mb-3 w-56"
        v-if="showDropdown"
      >
        <router-link to="/settings">
          <a
            class="flex items-center px-3 py-2 rounded-md text-md font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="user-circle w-5 h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            User Settings
          </a>
        </router-link>
        <div
          @click="logout"
          class="cursor-pointer flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="logout w-5 h-5 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Sign Out
        </div>
      </div>
      <div
        class="flex items-center bg-gray-100 p-5 border-t border-r border-gray-200"
      >
        <div
          class="p-3 rounded-full flex items-center justify-center bg-gray-200"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linkjoin="round"
            stroke-width="2"
            class="w-6 h-6 text-gray-600"
            view-box="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="flex flex-col ml-3" v-if="$store.state.auth.user">
          <h2 class="text-gray-800 font-medium text-lg leading-none">
            {{ this.$store.state.auth.user.name }}
          </h2>
          <p class="text-gray-700 text-md">
            @{{ converToHandle(this.$store.state.auth.user.name) }}
          </p>
        </div>
        <div class="ml-auto cursor-pointer" @click="toggleDropdown">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linkjoin="round"
            stroke-width="2"
            view-box="0 0 24 24"
            class="w-6 h-6 text-gray-500 hover:text-gray-600"
            stroke="currentColor"
          >
            <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@vue/composition-api';

export default Vue.extend({
  name: 'Sidenav',
  setup(props, context) {
    const { $store, $router } = context.root;
    const showDropdown = ref(false);
    const toggleDropdown = () => (showDropdown.value = !showDropdown.value);
    const converToHandle = (username: string) =>
      username
        .toLowerCase()
        .trim()
        .split(' ')
        .join('');
    const logout = async () => {
      await $store.dispatch('auth/logout');
      $router.push('/login');
    };
    return {
      logout,
      showDropdown,
      toggleDropdown,
      converToHandle,
    };
  },
});
</script>
