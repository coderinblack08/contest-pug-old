<template>
  <div class="flex bg-gray-100">
    <Sidenav />
    <MobileSidenav />
    <div class="w-full h-screen overflow-y-scroll">
      <header
        class="flex items-center justify-between px-10 bg-white h-24 w-full border-b border-gray-200"
      >
        <div class="hidden sm:flex items-center">
          <div
            class="p-3 rounded-full flex items-center justify-center bg-gray-200"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
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
          <div class="ml-3">
            <h2 class="text-gray-800 font-medium text-lg leading-none">
              John Doe
            </h2>
          </div>
        </div>
        <Statistics />
      </header>
      <div
        class="flex flex-col md:flex-row justify-between md:items-center bg-primary m-5 md:m-10 rounded-md py-6 px-8 shadow"
      >
        <div>
          <h1 class="text-white font-semibold text-2xl">
            Welcome Back
            <span v-if="$store.state.auth.user">
              {{ $store.state.auth.user.name }}
            </span>
          </h1>
          <p class="text-secondary text-md md:text-lg font-medium">
            Don't forget to study for you upcoming competition
            <span v-if="firstContest.data.length > 0">
              {{ firstContest.data.name }}!
            </span>
          </p>
        </div>
        <router-link
          :to="{ name: 'Contest', params: { id: firstContest.data._id } }"
          tag="button"
          class="flex justify-center items-center text-primary font-medium bg-secondary rounded py-4 px-5 h-12 md:ml-5 w-48 mt-4 md:mt-0 focus:outline-none focus:shadow-outline-blue"
        >
          View Contest
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="external-link ml-2 w-5 h-5"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            />
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            />
          </svg>
        </router-link>
      </div>
      <div class="px-10 py-3">
        <h1
          class="flex items-center text-gray-800 font-extrabold text-3xl leading-none mb-8"
        >
          Upcoming Contests
        </h1>
        <div class="flex flex-wrap">
          <div v-for="(member, key) in members" :key="key">
            <FeathersVuexGet
              service="contests"
              :id="member.contest_id"
              :watch="[member.contest_id]"
            >
              <div slot-scope="{ item: contest }">
                {{ setFirst(contest, key) }}
                <Card
                  v-if="contest"
                  :id="contest._id"
                  :name="contest.name"
                  :date="formatDate(contest.start_date)"
                  :thumbnail="contest.thumbnail"
                  :participants="120"
                  :tag="contest.tag"
                />
              </div>
            </FeathersVuexGet>
          </div>
        </div>
      </div>
    </div>
    <div class="block lg:hidden h-32"></div>
  </div>
</template>

<script lang="ts">
import Card from '../components/shared/ContestCard.vue';
import Sidenav from '../components/navigation/Sidenav.vue';
import Statistics from '../components/shared/Statistics.vue';
import MobileSidenav from '../components/navigation/MobileSidenav.vue';
import { defineComponent, computed, reactive } from '@vue/composition-api';
import { useFind } from 'feathers-vuex';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Card,
    Sidenav,
    Statistics,
    MobileSidenav,
  },
  setup(props, { root: { $FeathersVuex, $route, $store } }) {
    const { Member } = $FeathersVuex.api;
    const firstContest = reactive({ data: [] });

    const membersParams = computed(() => {
      return {
        user_id: $store.state.auth.user._id,
        contest_id: $route.params.id,
      };
    });

    const members = useFind({ model: Member, params: membersParams }).items;

    const formatDate = (date: Date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    };

    const setFirst = (contest: any, id: number) => {
      firstContest.data = id ? [] : contest;
    };

    return {
      members,
      setFirst,
      formatDate,
      firstContest,
    };
  },
});
</script>
