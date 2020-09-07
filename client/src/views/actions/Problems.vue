<template>
  <div class="flex bg-gray-100">
    <Sidenav />
    <MobileSidenav />
    <div class="w-full h-screen overflow-y-scroll">
      <ContestNavbar />
      <div class="p-5 md:p-10 space-y-5">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-gray-800 font-semibold text-2xl">
              Contest Problems
            </h1>
            <router-link
              to="/settings"
              class="flex items-center mt-2 text-gray-600 text-lg"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="z-0 cog w-5 h-5 transform scale-95 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Customize settings
            </router-link>
          </div>
          <div>
            <button
              @click="save"
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
                ></path></svg
              >Save Draft
            </button>
          </div>
        </div>
        <div v-if="!contests.problems.length" class="text-gray-800 text-md">
          Click new question to get started creating your amazing contest!
        </div>
        <div v-for="(contest, key) in contests.problems" :key="key">
          <div class="flex flex-row-reverse space-x-reverse space-x-5">
            <div
              class="flex flex-col space-y-5 bg-white shadow px-4 py-5 rounded-md text-gray-700"
            >
              <div @click="deleteProblem(key)" class="cursor-pointer">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="trash w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </div>
              <div @click="duplicateProblem(key)" class="cursor-pointer">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="duplicate w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <input
                type="file"
                ref="file"
                id="file"
                @change="addImage"
                class="hidden"
                accept="image/*"
              />
              <div
                class="cursor-pointer"
                onclick="document.getElementById('file').click()"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="photograph w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="bg-white shadow w-full p-5 rounded-md">
              <div class="flex justify-between">
                <div
                  class="flex items-center text-gray-600"
                  v-if="contest.short_answer"
                >
                  Short answer question
                </div>
                <div class="flex items-center text-gray-600">
                  <input
                    type="text"
                    name="points"
                    id="points"
                    :value="contest.points"
                    class="w-10 text-right mr-2 p-0 focus:outline-none"
                    @input="
                      e =>
                        e.target.value ? (contest.points = +e.target.value) : 0
                    "
                  />
                  Points
                </div>
              </div>
              <textarea
                class="w-full resize-none text-gray-900 mt-1 focus:outline-none"
                @input="e => updated(key)"
                v-model="contest.question"
                placeholder="Question Statement"
              >
              </textarea>
              <div v-if="contest.short_answer" class="mt-5">
                <div
                  v-for="(answer, id) in contests.answers[key].answers"
                  :key="id"
                >
                  <div class="flex items-center space-y-3 space-x-2">
                    <div
                      class="flex items-center justify-between max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full py-2 px-3"
                    >
                      <input
                        class="w-full text-gray-700 leading-tight focus:outline-none"
                        placeholder="Question Answer"
                        v-model="contests.answers[key].answers[id]"
                        type="text"
                        name="answer"
                        id="answer"
                      />
                      <div
                        @click="deleteAnswer(key, id)"
                        class="flex items-center justify-center cursor-pointer p-1 rounded-full hover:bg-gray-200"
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="x w-4 h-4 text-gray-700"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <button
                      v-if="id === contests.answers[key].answers.length - 1"
                      @click="contests.answers[key].answers.push('')"
                      class="focus:outline-none flex justify-center items-center bg-white text-gray-700 cursor-pointer px-4 h-10 shadow rounded-md mt-5"
                    >
                      Add Answer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center space-x-5">
          <div
            :class="[
              'flex justify-center items-center bg-white text-gray-700 cursor-pointer h-10 shadow rounded-md mt-5',
              showToolbox ? 'w-10' : 'px-3',
            ]"
            @click="showToolbox = !showToolbox"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="x w-4 h-4"
              v-if="showToolbox"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="plus w-5 h-5 mr-1"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span v-if="!showToolbox">New Question</span>
          </div>
          <div class="flex space-x-5" v-if="showToolbox">
            <div
              class="flex justify-center items-center bg-white text-gray-700 cursor-pointer px-4 h-10 shadow rounded-md mt-5"
              @click="newProblem('short_answer')"
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
              Short answer
            </div>
            <div
              class="flex justify-center items-center bg-white text-gray-700 cursor-pointer px-4 h-10 shadow rounded-md mt-5"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="menu-alt3 w-4 h-4 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Free response
            </div>
          </div>
        </div>
      </div>
      <div class="block lg:hidden h-32"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidenav from '../../components/navigation/Sidenav.vue';
import ContestNavbar from '../../components/navigation/ContestNavbar.vue';
import MobileSidenav from '../../components/navigation/MobileSidenav.vue';
import { defineComponent, ref, reactive } from '@vue/composition-api';

export default defineComponent({
  name: 'Contest',
  components: {
    Sidenav,
    ContestNavbar,
    MobileSidenav,
  },
  setup() {
    const contests = reactive({
      problems: [
        {
          index: 0,
          points: 5,
          question:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, suscipit quis? Placeat repellat eum id? Repudiandae veniam, deserunt, cupiditate ut numquam labore quidem voluptas quo delectus ipsum, tempora cumque?',
          created: true,
          updated: false,
          short_answer: true,
          mutiple_choise: false,
        },
      ],
      answers: [
        {
          answers: ['Lorem Ipsum'],
        },
      ],
    });
    const showToolbox = ref(false);
    const newProblem = (type: string) => {
      contests.problems.push({
        index: 0,
        points: 0,
        question: '',
        created: true,
        updated: false,
        short_answer: type === 'short_answer',
        mutiple_choise: false,
      });
      contests.answers.push({ answers: [''] });
      showToolbox.value = false;
    };
    const deleteProblem = (index: number) => {
      contests.problems.splice(index, 1);
      contests.answers.splice(index, 1);
      // delete from database here:
    };
    const duplicateProblem = (index: number) => {
      const problem = contests.problems[index];
      problem.created = true;
      problem.updated = false;
      contests.problems.splice(index, 0, problem);
      contests.answers.splice(index, 0, contests.answers[index]);
    };
    const addImage = (e: any) => {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log(files);
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const file = event.target.result;
      };
      reader.readAsDataURL(files[0]);
    };
    const deleteAnswer = (key: number, index: number): void => {
      if (index) {
        contests.answers[key].answers.splice(index, 1);
      } else {
        alert('you must have at least one answer per question');
      }
    };
    const save = () => {
      const created = contests.problems.filter(contest => contest.created);
      const updated = contests.problems.filter(contest => contest.updated);
      created.forEach(async (problem, index) => {
        problem.index = index;
        const updated = problem.updated;
        delete problem.created;
        delete problem.updated;
        contests.problems[index].created = false;
        contests.problems[index].updated = updated;
        console.log(problem);
      });
    };
    const updated = (index: number) => {
      contests.problems[index].updated = true;
      console.log(contests.problems[index]);
    };
    return {
      save,
      updated,
      addImage,
      contests,
      newProblem,
      showToolbox,
      deleteAnswer,
      deleteProblem,
      duplicateProblem,
    };
  },
});
</script>
