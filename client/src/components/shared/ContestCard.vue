<template>
  <router-link
    tag="div"
    :to="{ name: 'Contest', params: { id } }"
    class="transform transition ease-in duration-150 hover:-translate-y-1 cursor-pointer max-w-md w-full shadow hover:shadow-md rounded-lg overflow-hidden mr-4 mb-4"
  >
    <div class="bg-white border-b border-gray-200 p-6">
      <p class="text-md text-gray-600">{{ date }}</p>
      <h3 class="text-2xl font-bold text-gray-900">{{ name }}</h3>
      <p class="text-md text-gray-600 font-medium">
        {{ thumbnail }}
      </p>
    </div>
    <div
      class="flex justify-between bg-gray-50 border-t border-gray-100 py-3 px-5 text-gray-600"
    >
      <div class="flex space-x-6">
        <div class="flex items-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="tag w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            ></path>
          </svg>
          {{ tag }}
        </div>
        <div class="flex items-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="users w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          {{ participants }} Participants
        </div>
      </div>
      <div class="cursor-pointer text-gray-600">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="dots-horizontal w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ContestCard',
  props: {
    id: String,
    name: String,
    thumbnail: String,
    date: String,
    tag: String,
    participants: Number,
  },
});
</script>
