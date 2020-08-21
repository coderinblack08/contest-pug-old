<template>
  <div class="home">
    <Navbar />
    <div class="flex justify-center items-center">
      <div
        class="mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
      >
        <div class="text-center lg:text-left">
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
          >
            Insipring Contests <br />
            Minus the Hassle
          </h2>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Conest Pug delivers a platform for both educators and students to
            easily create and take contests while practicing social distancing.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <router-link
                to="/register"
                class="w-full flex items-center justify-center shadow-md px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:opacity-75 focus:outline-none transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Get started
              </router-link>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <router-link
                to="/dashboard"
                class="w-full flex items-center justify-center shadow-md px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary bg-white hover:opacity-75 focus:outline-none transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Dashboard
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          class="lg:max-w-sm xl:max-w-md hidden lg:block mt-20 xl:ml-20"
          src="../assets/images/teaching.svg"
          alt="Teaching Illustration"
        />
      </div>
    </div>
    <div class="flex justify-center flex-wrap my-10 sm:mx-5">
      <div class="p-4 lg:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary text-white flex-shrink-0"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="desktop-computer w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">
              Easy to Connect
            </h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-gray-600">
              Contest Pug is a hassle-free platform, meaning that you all you
              have to do is create an account and solve problems!
            </p>
            <router-link
              to="/"
              class="inline-flex items-center mt-3 text-primary"
            >
              Learn More
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="arrow-narrow-right w-4 h-4 ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary text-white flex-shrink-0"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="star w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">
              Advertise your Contest
            </h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-gray-600">
              Contest Pug allows you to create public contests, meaning that
              your competition will be exposed to a whole new host of
              contestants!
            </p>
            <router-link
              to="/"
              class="inline-flex items-center mt-3 text-primary"
            >
              Learn More
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="arrow-narrow-right w-4 h-4 ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div
              class="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary text-white flex-shrink-0"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="chat w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">
              Discuss with Others
            </h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-gray-600">
              Contest Pug allows contestants to discuss problems after the
              contest is over, bringing contestants together as a community.
            </p>
            <router-link
              to="/"
              class="inline-flex items-center mt-3 text-primary"
            >
              Learn More
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="arrow-narrow-right w-4 h-4 ml-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 border border-gray-200 mt-20">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Ready to dive in?
          <br />
          <span class="text-primary">Get Started for Free Today</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <router-link
              to="/"
              class="inline-flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-primary hover:opacity-75 focus:outline-none transition duration-500 ease-in-out"
            >
              Get Started
            </router-link>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <router-link
              to="/"
              class="inline-flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-primary bg-white hover:opacity-75 focus:outline-none transition duration-500 ease-in-out"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '../components/navigation/Navbar.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
  },
});
</script>
