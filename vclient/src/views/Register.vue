<template>
  <div>
    <Navbar />
    <div class="flex justify-center items-center py-10 md:py-20">
      <div class="max-w-md w-full">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="../assets/logo.svg"
            alt="Contest Pug Logo"
          />
          <h2
            class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >
            Create your Account
          </h2>
          <p class="mt-2 text-center text-sm leading-5 text-gray-600">
            Or
            <router-link
              to="/login"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              sign in with an existing account
            </router-link>
          </p>
        </div>
        <form class="mx-5 sm:mx-0 mt-8" @submit.prevent="handleSubmit">
          <div class="rounded-md shadow-sm transition ease-in-out duration-500">
            <div
              class="flex items-center appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 sm:text-sm sm:leading-5"
            >
              <svg
                fill="currentColor"
                view-box="0 0 20 20"
                class="text-gray-500 w-5 h-5 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <input
                class="w-full focus:outline-none"
                name="name"
                type="name"
                v-model="initialValues.name"
                placeholder="Full Name"
                aria-label="Full Name"
              />
            </div>
          </div>
          <div class="rounded-md shadow-sm transition ease-in-out duration-500">
            <div
              class="-mt-px flex items-center appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm sm:leading-5"
            >
              <svg
                fill="currentColor"
                view-box="0 0 20 20"
                class="text-gray-500 w-5 h-5 mr-2"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
              <input
                class="w-full focus:outline-none"
                name="email"
                type="text"
                v-model="initialValues.email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
          </div>
          <div class="rounded-md shadow-sm transition ease-in-out duration-500">
            <div
              class="-mt-px flex items-center appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm sm:leading-5"
            >
              <svg
                fill="currentColor"
                view-box="0 0 20 20"
                class="text-gray-500 w-5 h-5 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <input
                class="w-full focus:outline-none"
                name="password"
                type="password"
                v-model="initialValues.password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="terms-of-service"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                for="terms-of-service"
                class="ml-2 block text-sm leading-5 text-gray-900"
              >
                I Agree to the
                <router-link to="/" class="text-primary">
                  Terms of Service
                </router-link>
              </label>
            </div>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary transition ease-in-out duration-500 hover:opacity-75 focus:outline-none"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  fill="currentColor"
                  view-box="0 0 20 20"
                  class="text-secondary w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              Create Account
            </button>
          </div>
        </form>
        <div class="z-20 absolute left-0 bottom-0">
          <div
            class="flex items-center shadow-lg mb-5 mx-5 mt-2 text-white bg-primary text-sm py-3 px-6 rounded"
            v-if="errorMessage"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="exclamation-circle w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div class="ml-3 text-md font-medium">
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Yup from 'yup';
import { reactive, ref } from '@vue/composition-api';
import Navbar from '../components/navigation/Navbar.vue';

export default Vue.extend({
  name: 'Register',
  components: {
    Navbar,
  },
  setup(props, context) {
    const { User } = context.root.$FeathersVuex.api;
    const { $store } = context.root;

    const errorMessage = ref('');
    const initialValues = reactive({ name: '', email: '', password: '' });

    const validate = async () => {
      const userSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Name must be at least 5 characters long')
          .max(100, 'Name exceeds the 100 character limit')
          .required('Name is a required field'),
        email: Yup.string()
          .email('Please enter a valid email address')
          .max(500)
          .required('Email is a required field'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters long')
          .required('Password is a required field'),
      });
      try {
        await userSchema.validate(initialValues);
        return null;
      } catch (errors) {
        return errors;
      }
    };

    const createUser = async () => {
      try {
        const savedUser = await new User(initialValues).save();
        $store.dispatch('auth/authenticate', {
          strategy: 'local',
          ...initialValues,
        });
        console.log(savedUser);
      } catch (error) {
        errorMessage.value = 'User already exists!';
      }
    };

    const handleSubmit = async () => {
      const validationResults = await validate();
      if (!validationResults) {
        await createUser();
      } else {
        errorMessage.value = validationResults.message;
      }
    };

    return {
      initialValues,
      handleSubmit,
      errorMessage,
    };
  },
});
</script>
