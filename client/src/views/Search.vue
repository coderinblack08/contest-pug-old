<template>
  <div class="flex bg-gray-100">
    <Sidenav />
    <MobileSidenav />
    <div class="w-full h-screen overflow-y-scroll">
      <header>
        <form
          @submit.prevent="setQuery"
          class="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 sm:py-0 sm:h-24 w-full border-b border-gray-200"
        >
          <div class="flex items-center w-2/3 text-gray-500">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="search w-5 h-5 mr-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              v-model="queryInput"
              class="w-full focus:outline-none text-lg text-gray-800"
              placeholder="Search"
            />
          </div>
          <button
            class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none focus:shadow-outline-blue bg-white shadow py-3 px-5 text-gray-600 font-medium"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="sort-descending w-5 h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              ></path>
            </svg>
            Search Contests
          </button>
        </form>
      </header>
      <div class="p-5 md:p-8">
        <div class="flex flex-wrap">
          <div v-for="(contest, key) in contests" :key="key">
            <Card
              :id="contest._id"
              :name="contest.name"
              :date="formatDate(contest.start_date.substring(0, 10))"
              :thumbnail="contest.thumbnail"
              :participants="120"
              :tag="contest.tag"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidenav from '../components/navigation/Sidenav.vue';
import MobileSidenav from '../components/navigation/MobileSidenav.vue';
import Card from '../components/shared/ContestCard.vue';
import {
  defineComponent,
  computed,
  ref,
  watchEffect,
} from '@vue/composition-api';
import { useFind } from 'feathers-vuex';

export default defineComponent({
  components: {
    Card,
    Sidenav,
    MobileSidenav,
  },
  setup(props, context) {
    const searchQuery = ref('');
    const queryInput = ref('');
    const { Contest } = context.root.$FeathersVuex.api;

    const contestsParams = computed(() => {
      return {
        query: {
          name: {
            $search: searchQuery.value,
          },
          start_date: {
            $gt: new Date().getTime(),
          },
          private: {
            $ne: true,
          },
        },
        paginate: true,
      };
    });

    const { items: contestsItems, isPending } = useFind({
      model: Contest,
      params: contestsParams,
    });

    const formatDate = (date: Date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    };

    const setQuery = () => {
      searchQuery.value = queryInput.value;
    };

    watchEffect(() => {
      if (queryInput.value === '') {
        searchQuery.value = '';
      }
    });

    return {
      setQuery,
      formatDate,
      queryInput,
      searchQuery,
      contests: contestsItems,
    };
  },
});
</script>
