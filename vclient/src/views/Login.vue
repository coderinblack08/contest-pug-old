<template>
  <div>
    <Navbar />
    <div class="flex justify-center items-center py-10 md:py-20">
      <div class="max-w-md w-full">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="../assets/logo.svg"
            alt="Contest Pug Logo"
          />
          <h2
            class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >
            Account Sign In
          </h2>
          <p class="mt-2 text-center text-sm leading-5 text-gray-600">
            Or
            <router-link
              to="/register"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              create a new account
            </router-link>
          </p>
        </div>
        <form class="mx-5 sm:mx-0 mt-8">
          <div class="rounded-md shadow-sm transition ease-in-out duration-500">
            <div
              class="-mt-px flex items-center appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm sm:leading-5"
            >
              <svg
                fill="currentColor"
                view-box="0 0 20 20"
                class="text-gray-500 w-5 h-5 mr-2"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
              <input
                class="w-full focus:outline-none"
                name="email"
                type="text"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
          </div>
          <div class="rounded-md shadow-sm transition ease-in-out duration-500">
            <div
              class="-mt-px flex items-center appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm sm:leading-5"
            >
              <svg
                fill="currentColor"
                view-box="0 0 20 20"
                class="text-gray-500 w-5 h-5 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <input
                class="w-full focus:outline-none"
                name="password"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="terms-of-service"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                for="terms-of-service"
                class="ml-2 block text-sm leading-5 text-gray-900"
              >
                Keep me logged in
              </label>
            </div>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary transition ease-in-out duration-500 hover:opacity-75 focus:outline-none"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  fill="currentColor"
                  view-box="0 0 20 20"
                  class="text-secondary w-5 h-5"
                >
                  <path
                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                  ></path>
                </svg>
              </span>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '../components/navigation/Navbar.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  components: {
    Navbar,
  },
});
</script>

<style scoped></style>
