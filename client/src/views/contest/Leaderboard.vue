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
            <div class="p-5 md:p-8 space-y-5">
              <div class="bg-white shadow w-full p-6 rounded-md">
                <h2 class="text-2xl font-extrabold">
                  Whoops! Looks like the contest hasn't finished yet!
                </h2>
                <p>
                  Please come check the leaderboard after the contest has
                  officially ended for your score and rank!
                </p>
              </div>
              <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div
                    class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                  >
                    <div
                      class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                    >
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th
                              class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Title
                            </th>
                            <th
                              class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th
                              class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Role
                            </th>
                            <th class="px-6 py-3 bg-gray-50"></th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr>
                            <td class="px-6 py-4 whitespace-no-wrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img
                                    class="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                    alt=""
                                  />
                                </div>
                                <div class="ml-4">
                                  <div
                                    class="text-sm leading-5 font-medium text-gray-900"
                                  >
                                    Jane Cooper
                                  </div>
                                  <div class="text-sm leading-5 text-gray-500">
                                    jane.cooper@example.com
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap">
                              <div class="text-sm leading-5 text-gray-900">
                                Regional Paradigm Technician
                              </div>
                              <div class="text-sm leading-5 text-gray-500">
                                Optimization
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap">
                              <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                              >
                                Active
                              </span>
                            </td>
                            <td
                              class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
                            >
                              Admin
                            </td>
                            <td
                              class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"
                            >
                              <a
                                href="#"
                                class="text-indigo-600 hover:text-indigo-900"
                                >Edit</a
                              >
                            </td>
                          </tr>

                          <!-- More rows... -->
                        </tbody>
                      </table>
                    </div>
                  </div>
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
