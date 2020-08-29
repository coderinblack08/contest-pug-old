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
                  <div class="cursor-pointer">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="pencil-alt w-5 h-5"
                    >
                      <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
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
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Contest',
  components: {
    Sidenav,
    ContestNavbar,
    MobileSidenav,
  },
});
</script>

<style scoped></style>
