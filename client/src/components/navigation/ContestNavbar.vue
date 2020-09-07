<template>
  <header
    class="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 w-full border-b border-gray-200"
  >
    <div class="flex flex-col xl:flex-row justify-between w-full items-center">
      <nav
        class="font-medium inline-flex space-x-10 items-center text-gray-600 text-md sm:text-lg select-none"
      >
        <AdminNavbar />
        <router-link
          :to="{ name: 'Contest', params: { id: $route.params.id } }"
          :class="[
            $route.path.match(/contest/)
              ? 'text-gray-700 shadow bg-white rounded px-5 py-2'
              : '',
          ]"
        >
          Homepage
        </router-link>
        <router-link
          :to="{
            name: 'Leaderboard',
            params: { id: $route.params.id },
          }"
          :class="[
            $route.path.match(/leaderboard/)
              ? 'text-gray-700 shadow bg-white rounded px-5 py-2'
              : '',
          ]"
        >
          Leaderboard
        </router-link>
        <router-link
          :to="{ name: 'Forum', params: { id: $route.params.id } }"
          :class="[
            $route.path.match(/forum/)
              ? 'text-gray-700 shadow bg-white rounded px-5 py-2'
              : '',
          ]"
        >
          Forum
        </router-link>
      </nav>
      <div
        class="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 mt-5 xl:mt-0"
      >
        <FeathersVuexFind
          service="stars"
          :query="{ contest_id: $route.params.id }"
          watch="query"
        >
          <div slot-scope="{ items: stars }">
            <button
              type="button"
              @click="star"
              class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none shadow bg-white text-gray-600 font-medium"
            >
              <div class="flex items-center bg-gray-100 border-r py-3 px-4">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="star w-4 h-4 mr-2"
                  v-if="!stars.length"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="star w-5 h-5 mr-2"
                  v-if="stars.length"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>

                {{ stars.length }}
              </div>
              <div class="px-4">
                Star Contest
              </div>
            </button>
          </div>
        </FeathersVuexFind>
        <FeathersVuexFind
          service="contests"
          :query="{ _id: $route.params.id }"
          watch="query"
        >
          <div slot-scope="{ items: contest }">
            <button
              type="button"
              @click="join"
              v-if="
                contest[0] && contest[0].user_id !== $store.state.auth.user._id
              "
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
              <FeathersVuexFind
                service="members"
                :query="{
                  contest_id: $route.params.id,
                  user_id: $store.state.auth.user._id,
                }"
                watch="query"
              >
                <div slot-scope="{ items: member }">
                  <span v-if="member.length > 0">Leave Contest</span>
                  <span v-else>Join Contest</span>
                </div>
              </FeathersVuexFind>
            </button>
          </div>
        </FeathersVuexFind>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import AdminNavbar from '../../components/navigation/AdminNavbar.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {
    AdminNavbar,
  },
  setup(props, { root: { $store, $route } }) {
    const star = async () => {
      const getStar = await $store.dispatch('stars/find', {
        query: {
          contest_id: $route.params.id,
          user_id: $store.state.auth.user._id,
        },
      });
      if (!getStar.total) {
        await $store.dispatch('stars/create', {
          contest_id: $route.params.id,
        });
      } else {
        await $store.dispatch('stars/remove', getStar.data[0]._id);
      }
    };
    const join = async () => {
      const getMember = await $store.dispatch('members/find', {
        query: {
          contest_id: $route.params.id,
          user_id: $store.state.auth.user._id,
        },
      });
      if (!getMember.total) {
        await $store.dispatch('members/create', {
          contest_id: $route.params.id,
        });
      } else {
        await $store.dispatch('members/remove', getMember.data[0]._id);
      }
    };
    return { join, star };
  },
});
</script>
