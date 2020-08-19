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
          to="/contests"
          tag="button"
          class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none focus:shadow-outline-blue bg-gray-100 border border-gray-200 py-3 px-5 text-gray-600 font-medium"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="backspace w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
            />
          </svg>
          Exit
        </router-link>
      </header>
      <div>
        <form class="flex flex-col p-5 md:p-12">
          <div class="flex flex-col sm:flex-row justify-between mb-5">
            <div>
              <h1 class="text-gray-700 font-semibold text-2xl">
                General Information
              </h1>
              <p class="text-gray-500 font-medium text-lg">
                Basic information about your contest
              </p>
            </div>
          </div>
          <div class="bg-white w-full px-8 py-12 shadow rounded-md space-y-5">
            <div>
              <label for="name" class="block text-gray-700 font-medium text-md">
                Contest Name
              </label>
              <input
                class="max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                name="name"
                type="text"
                placeholder="Example"
                aria-label="Contest Name"
              />
            </div>
            <div>
              <label
                for="website"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Website
              </label>
              <div>
                <div
                  class="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
                >
                  <div
                    class="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="globe-alt w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <input
                    class="py-2 px-3 w-full focus:outline-none"
                    name="website"
                    type="url"
                    placeholder="www.example.com"
                    aria-label="Contest Website"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-gray-700 font-medium text-md"
              >
                Email Address
              </label>
              <div
                class="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <div
                  class="flex items-center px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="mail w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  class="py-2 px-3 w-full focus:outline-none"
                  name="email"
                  type="email"
                  placeholder="contact@example.com"
                  aria-label="Contest Email"
                />
              </div>
            </div>
            <div>
              <label
                for="description"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Thumbnail (Quick Description)
              </label>
              <div
                class="flex flex-col items-center max-w-lg xl:max-w-xl mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <textarea
                  class="rounded py-3 px-4 w-full focus:outline-none h-24"
                  name="thumbnail"
                  placeholder="Contest Thumbnail"
                  aria-label="Contest Thumbnail"
                />
              </div>
            </div>
            <div>
              <label
                for="description"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Description (Homepage)
              </label>
              <div
                class="flex flex-col items-center max-w-lg xl:max-w-xl mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <textarea
                  class="rounded py-3 px-4 w-full focus:outline-none h-32"
                  name="description"
                  placeholder="Contest Description"
                  aria-label="Contest Description"
                />
                <a
                  target="_blank"
                  href="https://guides.github.com/features/mastering-markdown/"
                  class="flex items-center text-sm font-medium bg-gray-100 text-gray-600 hover:text-gray-700 w-full px-4 py-2 rounded-b border-t"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    class="w-5 h-5 mr-2"
                    role="img"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"
                    ></path>
                  </svg>
                  Styling with markdown supported
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Sidenav from '../../components/navigation/Sidenav.vue';
import Statistics from '../../components/shared/Statistics.vue';
import MobileSidenav from '../../components/navigation/MobileSidenav.vue';

export default Vue.extend({
  name: 'Create',
  components: {
    Sidenav,
    Statistics,
    MobileSidenav,
  },
});
</script>

<style scoped></style>
