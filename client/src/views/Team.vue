<template>
  <div class="team">
    <Navbar />
    <div class="p-5 md:p-10">
      <div class="mx-auto text-center break-words max-w-2xl mb-5">
        <h1 class="flex items-center justify-center mb-2 text-4xl font-black">
          <div class="bg-primary rounded-lg mr-5 p-3 text-white">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="users w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
          Meet our leadership
        </h1>
        <p class="text-xl text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil
          atque excepturi eaque itaque debitis quia maxime.
        </p>
      </div>
      <div class="px-2 mt-5 md:px-5 lg:px-16">
        <div class="flex items-center space-x-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Placeholder Image"
              class="rounded-full w-16"
            />
          </div>
          <div>
            <h2 class="text-lg font-medium">Codeirnblack</h2>
            <p class="text-gray-700">CEO / Full stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/navigation/Navbar.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: { Navbar },
});
</script>
