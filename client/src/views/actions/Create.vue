<template>
  <div class="flex bg-gray-100">
    <Sidenav />
    <MobileSidenav />
    <div class="w-full h-screen overflow-y-scroll">
      <header
        class="flex flex-col sm:flex-row items-center justify-between px-10 bg-white py-5 sm:py-0 sm:h-24 w-full border-b border-gray-200"
      >
        <div class="flex items-center">
          <Statistics />
        </div>
        <button
          class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none focus:shadow-outline-blue bg-white shadow py-3 px-5 text-gray-600 font-medium"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="save w-5 h-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            ></path>
          </svg>
          Save Form
        </button>
      </header>
      <div>
        <form
          class="flex flex-col p-5 md:p-12 space-y-8"
          @submit.prevent="handleSubmit"
        >
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <div v-if="tab === 1">
              <h1 class="text-gray-700 font-semibold text-2xl">
                General Information
              </h1>
              <p class="text-gray-500 font-medium text-lg">
                Basic information about your contest
              </p>
            </div>
            <div v-if="tab === 2">
              <h1 class="text-gray-700 font-semibold text-2xl">
                Techincal Information
              </h1>
              <p class="text-gray-500 font-medium text-lg">
                Basic settings for your contest
              </p>
            </div>
            <nav class="flex items-center space-x-5 font-medium mt-6 sm:mt-0">
              <div
                class="cursor-pointer flex items-center justify-center w-10 h-10 transition ease-in duration-300 hover:bg-secondary rounded-md text-primary"
                @click="tab = (tab % 2) + 1"
                v-if="tab === 2"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="chevron-left w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div
                :class="[
                  'cursor-pointer flex items-center justify-center w-10 h-10 rounded-md select-none',
                  tab === 1
                    ? 'bg-primary text-secondary shadow-md'
                    : 'text-primary transition ease-in duration-200 hover:bg-secondary rounded-md',
                ]"
                @click="tab = 1"
              >
                1
              </div>
              <div
                :class="[
                  'cursor-pointer flex items-center justify-center w-10 h-10 rounded-md select-none',
                  tab === 2
                    ? 'bg-primary text-secondary shadow-md'
                    : 'text-primary transition ease-in duration-200 hover:bg-secondary rounded-md',
                ]"
                @click="tab = 2"
              >
                2
              </div>
              <div
                class="cursor-pointer flex items-center justify-center w-10 h-10 transition ease-in duration-300 hover:bg-secondary rounded-md text-primary"
                @click="tab = (tab % 2) + 1"
                v-if="tab === 1"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="chevron-right w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </nav>
          </div>
          <div
            class="bg-white w-full px-8 py-12 shadow rounded-md space-y-6"
            v-if="tab === 1"
          >
            <div>
              <label for="name" class="block text-gray-700 font-medium text-md">
                Contest Name
              </label>
              <input
                class="max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                name="name"
                type="text"
                v-model="initialValues.name"
                placeholder="Example"
                aria-label="Contest Name"
              />
              <div
                class="flex items-center text-red-500 mt-2"
                v-if="findError('name')"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="exclamation-circle w-4 h-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ findError('name').message }}
              </div>
            </div>
            <div>
              <label
                for="website"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Website
              </label>
              <div>
                <div
                  class="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
                >
                  <div
                    class="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="globe-alt w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <input
                    class="py-2 px-3 w-full focus:outline-none"
                    name="website"
                    type="url"
                    v-model="initialValues.website"
                    placeholder="www.example.com"
                    aria-label="Contest Website"
                  />
                </div>
              </div>
              <div
                class="flex items-center text-red-500 mt-2"
                v-if="findError('website')"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="exclamation-circle w-4 h-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ findError('website').message }}
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-gray-700 font-medium text-md"
              >
                Email Address
              </label>
              <div
                class="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <div
                  class="flex items-center px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="mail w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  class="py-2 px-3 w-full focus:outline-none"
                  name="email"
                  type="email"
                  v-model="initialValues.email"
                  placeholder="contact@example.com"
                  aria-label="Contest Email"
                />
              </div>
              <div
                class="flex items-center text-red-500 mt-2"
                v-if="findError('email')"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="exclamation-circle w-4 h-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ findError('email').message }}
              </div>
            </div>
            <div>
              <label
                for="description"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Thumbnail (Quick Description)
              </label>
              <div
                class="flex flex-col items-center max-w-lg xl:max-w-xl mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <textarea
                  class="rounded py-3 px-4 w-full focus:outline-none h-24"
                  name="thumbnail"
                  v-model="initialValues.thumbnail"
                  placeholder="Contest Thumbnail"
                  aria-label="Contest Thumbnail"
                />
              </div>
              <div
                class="flex items-center text-red-500 mt-2"
                v-if="findError('thumbnail')"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="exclamation-circle w-4 h-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ findError('thumbnail').message }}
              </div>
            </div>
            <div>
              <label
                for="description"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Description (Homepage)
              </label>
              <div
                class="flex flex-col items-center max-w-lg xl:max-w-xl mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <textarea
                  class="rounded py-3 px-4 w-full focus:outline-none h-32"
                  name="description"
                  v-model="initialValues.description"
                  placeholder="Contest Description"
                  aria-label="Contest Description"
                />
                <a
                  target="_blank"
                  href="https://guides.github.com/features/mastering-markdown/"
                  class="flex items-center text-sm font-medium bg-gray-100 text-gray-600 hover:text-gray-700 w-full px-4 py-2 rounded-b border-t"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    class="hidden sm:block w-5 h-5 mr-2"
                    role="img"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"
                    ></path>
                  </svg>
                  Styling with markdown supported
                </a>
              </div>
            </div>
            <div
              class="flex items-center text-red-500 mt-2"
              v-if="findError('description')"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="exclamation-circle w-4 h-4 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {{ findError('description').message }}
            </div>
          </div>
          <div
            class="bg-white w-full px-8 py-12 shadow rounded-md space-y-6"
            v-if="tab === 2"
          >
            <div>
              <label
                for="website"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Tag (Subject)
              </label>
              <div
                class="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <div
                  class="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="tag w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    ></path>
                  </svg>
                </div>
                <input
                  class="py-2 px-3 w-full focus:outline-none"
                  name="tag"
                  type="string"
                  v-model="initialValues.tag"
                  placeholder="Mathematics"
                  aria-label="Contest Tag"
                />
              </div>
              <div
                class="flex items-center text-red-500 mt-2"
                v-if="findError('tag')"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="exclamation-circle w-4 h-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ findError('tag').message }}
              </div>
            </div>
            <div>
              <label
                for="website"
                class="block text-gray-700 font-medium text-md"
              >
                Contest Length
              </label>
              <div
                class="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full text-gray-700 leading-tight"
              >
                <div
                  class="flex px-4 rounded-l py-3 bg-gray-100 text-gray-500 border-r"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="globe-alt w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
                <label for="length" class="ml-3 mr-1 text-gray-500"
                  >Hours:</label
                >
                <input
                  class="py-2 px-3 w-1/3 focus:outline-none"
                  name="length"
                  type="number"
                  min="0"
                  v-model="initialValues.hours"
                  aria-label="Contest Hours"
                />
                <label for="length" class="ml-3 mr-1 text-gray-500"
                  >Minutes:</label
                >
                <input
                  class="py-2 px-3 w-2/3 focus:outline-none"
                  name="length"
                  type="number"
                  min="0"
                  max="59"
                  v-model="initialValues.minutes"
                  aria-label="Contest Minutes"
                />
              </div>
              <div
                class="flex items-center text-red-500 mt-2"
                v-if="findError('length')"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="exclamation-circle w-4 h-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ findError('length').message }}
              </div>
            </div>
            <div>
              <label
                for="start-date"
                class="block text-gray-700 font-medium text-md"
              >
                Submission Dates
              </label>
              <div
                class="flex items-center max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none rounded w-full text-gray-700 leading-tight"
              >
                <VueCtkDateTimePicker
                  :range="true"
                  :only-date="true"
                  v-model="initialValues.date"
                ></VueCtkDateTimePicker>
              </div>
              <div
                class="flex items-center text-red-500 mt-2"
                v-if="findError('date')"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="exclamation-circle w-4 h-4 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ findError('date').message }}
              </div>
            </div>
            <div class="flex flex-col space-y-3 my-8 mx-2">
              <label
                class="inline-flex items-center text-gray-700 font-medium text-md"
              >
                <input
                  type="checkbox"
                  id="private"
                  v-model="initialValues.private"
                  class="form-checkbox mr-2"
                />
                <span>Private Contest</span>
              </label>
              <label
                class="inline-flex items-center text-gray-700 font-medium text-md"
              >
                <input
                  type="checkbox"
                  id="leaderboard"
                  v-model="initialValues.leaderboard"
                  class="form-checkbox mr-2"
                />
                <span>Enable leaderboard</span>
              </label>
            </div>
          </div>
          <div v-if="tab === 2">
            <button
              class="flex items-center mt-5 sm:mt-0 justify-between rounded-md focus:outline-none focus:shadow-outline-blue bg-white shadow py-3 px-5 text-gray-600 font-medium"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="view-grid-add w-4 h-4 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                ></path>
              </svg>
              Submit Contest
            </button>
          </div>
        </form>
      </div>
      <div class="block lg:hidden h-32"></div>
    </div>
  </div>
</template>

<script lang="ts">
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import Sidenav from '../../components/navigation/Sidenav.vue';
import Statistics from '../../components/shared/Statistics.vue';
import MobileSidenav from '../../components/navigation/MobileSidenav.vue';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import { defineComponent, reactive, ref } from '@vue/composition-api';
import * as Yup from 'yup';

export default defineComponent({
  name: 'Create',
  components: {
    Sidenav,
    Statistics,
    MobileSidenav,
    VueCtkDateTimePicker,
  },
  setup(props, context) {
    const { Contest } = context.root.$FeathersVuex.api;
    const tab = ref(1);
    const errorMessage = reactive({ errors: [] });
    const initialValues = reactive({
      name: '',
      website: '',
      email: '',
      thumbnail: '',
      description: '',
      tag: '',
      hours: 0,
      minutes: 0,
      length: 0,
      date: null,
      private: false,
      leaderboard: true,
    } as any);

    const validate = async () => {
      const contestSchema = Yup.object().shape({
        name: Yup.string()
          .max(500, 'Name exceed the 500 character maximum')
          .required('Name is a required field'),
        website: Yup.string()
          .url('Please enter a valid website url')
          .required('Website is a required field'),
        email: Yup.string()
          .email('Pleae enter a valid email address')
          .required('Email is a required field'),
        thumbnail: Yup.string()
          .max(100, 'Thumbnail is too long')
          .required('Thumbnail is a requied field'),
        description: Yup.string()
          .max(1e6, 'Description exceeded the 100,000 character limit')
          .required('Description is a required field'),
        tag: Yup.string().required('Tag is a required field'),
        hours: Yup.number().required('Contest Hours is a required field'),
        minutes: Yup.number().required('Contest Minutes is a required field'),
        // eslint-disable-next-line @typescript-eslint/camelcase
        date: Yup.string().required('Date is a required field'),
        private: Yup.boolean().required(),
        leaderboard: Yup.boolean().required(),
      });
      try {
        await contestSchema.validate(initialValues, {
          abortEarly: false,
        });
        return null;
      } catch (errors) {
        return errors;
      }
    };

    const createContest = async () => {
      try {
        initialValues.length =
          Number(initialValues.hours * 60) + Number(initialValues.minutes);
        const contestValues = {
          ...initialValues,
          start_date: initialValues.date.start,
          end_date: initialValues.date.end,
        };
        delete contestValues.hours;
        delete contestValues.minutes;
        delete contestValues.date;
        console.log(contestValues);
        const savedContest = await new Contest(contestValues).save();
        console.log(savedContest);
        // eslint-disable-next-line no-empty
      } catch (error) {
        console.error(error);
      }
    };

    const findError = (path: string) => {
      return errorMessage.errors.find((error: any) => error.path === path);
    };

    const handleSubmit = async () => {
      const validationResults = await validate();
      if (!validationResults) {
        errorMessage.errors = [];
        await createContest();
      } else {
        errorMessage.errors = validationResults.inner;
      }
    };

    return {
      tab,
      findError,
      initialValues,
      handleSubmit,
      errorMessage,
    };
  },
});
</script>
