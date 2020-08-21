<template>
  <div class="flex flex-col items-center justify-center h-screen px-5">
    <h2
      class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
    >
      404 Error !
    </h2>
    <p
      class="text-center mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
    >
      Uh oh! Looks like we couldn't find the page that you requested!
    </p>
    <div class="w-full max-w-screen-xl mt-5 sm:mt-8 sm:flex sm:justify-center">
      <div class="rounded-md shadow">
        <router-link
          to="/"
          class="w-full flex items-center justify-center shadow-md px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:opacity-75 focus:outline-none transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10"
        >
          Return Home
        </router-link>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <router-link
          to="/dashboard"
          class="w-full flex items-center justify-center shadow-md px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary bg-white hover:opacity-75 focus:outline-none transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10"
        >
          Dashboard
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Error',
});
</script>
