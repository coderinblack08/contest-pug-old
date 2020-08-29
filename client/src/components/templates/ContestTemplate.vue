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
          <header
            class="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 w-full border-b border-gray-200"
          >
            <div
              class="flex flex-col xl:flex-row justify-between w-full items-center"
            >
              <div
                class="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 mt-5 xl:mt-0"
              >
                <button
                  type="button"
                  @click="star"
                  class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none shadow bg-white text-gray-600 font-medium"
                >
                  <div class="flex items-center bg-gray-100 border-r py-3 px-4">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="star w-5 h-5 mr-2"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <FeathersVuexFind
                      service="stars"
                      :query="{ contest_id: $route.params.id }"
                      watch="query"
                    >
                      <div slot-scope="{ items: stars }">
                        {{ stars.length }}
                      </div>
                    </FeathersVuexFind>
                  </div>
                  <div class="px-4">
                    Star Contest
                  </div>
                </button>
                <button
                  type="button"
                  @click="join"
                  class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none shadow bg-primary py-3 px-5 text-white font-medium"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="view-grid-add w-4 h-4 mr-2"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                    ></path>
                  </svg>
                  <span v-if="joined.data[0]">Leave Contest</span>
                  <span v-else>Join Contest</span>
                </button>
              </div>
            </div>
          </header>
          <div v-if="contest">
            <div
              class="flex flex-col-reverse md:flex-row items-start space-y-reverse space-y-6 md:space-y-0 md:space-x-6 p-5 md:p-8"
            >
              <div class="bg-white shadow w-full p-5 rounded-md">
                <article class="prose xl:prose pt-2">
                  <h3>Description</h3>
                  <p>
                    {{ contest.description }}
                  </p>
                </article>
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
import MobileSidenav from '../../components/navigation/MobileSidenav.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Contest',
  components: {
    Sidenav,
    MobileSidenav,
  },
});
</script>
