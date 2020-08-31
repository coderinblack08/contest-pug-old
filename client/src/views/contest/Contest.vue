<template>
  <FeathersVuexGet
    service="contests"
    :id="$route.params.id"
    :watch="[$route.params.id]"
  >
    <template slot-scope="{ item: contest }">
      <div class="flex bg-gray-100">
        <Sidenav />
        <MobileSidenav />
        <div class="w-full h-screen overflow-y-scroll">
          <ContestNavbar />
          <div v-if="contest">
            <div
              class="flex flex-col-reverse md:flex-row items-start space-y-reverse space-y-6 md:space-y-0 md:space-x-6 p-5 md:p-8"
            >
              <div class="bg-white shadow w-full p-5 rounded-md">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-semibold">Description</h3>
                  <div class="relative inline-block text-left">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="dots-vertical w-5 h-5 cursor-pointer"
                      @click="showDropdown = !showDropdown"
                    >
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                      ></path>
                    </svg>
                    <div
                      class="origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg"
                      v-if="showDropdown"
                    >
                      <div class="rounded-md bg-white shadow-xs">
                        <div
                          class="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="#"
                            class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem"
                          >
                            <!-- <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="pencil w-4 h-4 mr-2"
                            >
                              <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                              ></path>
                            </svg> -->
                            Edit Homepage
                          </a>
                          <a
                            href="#"
                            class="flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem"
                          >
                            <!-- <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="cog w-4 h-4 mr-2"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg> -->
                            Contest Settings
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <article class="prose xl:prose pt-2">
                  <p>
                    {{ contest.description }}
                  </p>
                </article>
              </div>
              <div
                class="bg-white max-w-xs w-full shadow rounded-lg border border-gray-200 overflow-hidden p-5"
              >
                <h1 class="text-xl font-bold">{{ contest.name }}</h1>
                <p class="text-md mt-1">
                  {{ contest.thumbnail }}
                </p>
                <div class="flex items-center space-x-2 mt-3 text-gray-700">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="link w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                  </svg>
                  <a
                    class="text-link font-medium"
                    target="_blank"
                    :href="contest.website"
                  >
                    {{ contest.website }}
                  </a>
                </div>
                <div class="flex items-center space-x-2 mt-2 text-gray-700">
                  <div>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="mail w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <a class="font-medium" :href="`mailto:${contest.email}`">
                    {{ contest.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="p-12">
            <h1 class="text-4xl font-extrabold">Contest Not Found</h1>
            <p class="text-xl">
              Whoops! We couldn't find the contest you requested for!
            </p>
          </div>
        </div>
      </div>
    </template>
  </FeathersVuexGet>
</template>

<script lang="ts">
import Sidenav from '../../components/navigation/Sidenav.vue';
import ContestNavbar from '../../components/navigation/ContestNavbar.vue';
import MobileSidenav from '../../components/navigation/MobileSidenav.vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Contest',
  components: {
    Sidenav,
    ContestNavbar,
    MobileSidenav,
  },
  setup() {
    const showDropdown = ref(false);
    return { showDropdown };
  },
});
</script>

<style scoped></style>
