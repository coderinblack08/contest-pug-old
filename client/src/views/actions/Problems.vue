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
          <!-- <div>
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
          </div> -->
        </div>
        <div
          v-if="!contest.problems.length && animate"
          class="text-gray-800 text-md"
        >
          Click new question to get started creating your amazing contest!
        </div>
        <div v-else v-for="(problem, key) in contest.problems" :key="key">
          <transition name="fade">
            <div
              class="flex flex-row-reverse space-x-reverse space-x-5"
              v-if="animate"
            >
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
                    v-if="!problem.free_response && !problem.multiple_choice"
                  >
                    Short answer question
                  </div>
                  <div class="flex items-center text-gray-600">
                    <input
                      type="text"
                      :value="problem.points"
                      class="w-10 text-right mr-2 p-0 focus:outline-none"
                      @input="
                        e => {
                          e.target.value
                            ? (problem.points = +e.target.value)
                            : 0;
                          updated(key);
                        }
                      "
                    />
                    Points
                  </div>
                </div>
                <textarea
                  class="w-full resize-none text-gray-900 mt-1 focus:outline-none"
                  @input="e => updated(key)"
                  v-model="problem.question"
                  placeholder="Question Statement"
                >
                </textarea>
                <div
                  v-if="!problem.free_response && !problem.multiple_choice"
                  class="mt-5"
                >
                  <div
                    v-for="(answer, id) in contest.answers[key].answers"
                    :key="id"
                  >
                    <div class="flex items-center space-y-3 space-x-2">
                      <div
                        class="flex items-center justify-between max-w-md xl:max-w-lg mt-2 shadow-sm appearance-none border rounded w-full py-2 px-3"
                      >
                        <input
                          class="w-full text-gray-700 leading-tight focus:outline-none"
                          placeholder="Question Answer"
                          v-model="contest.answers[key].answers[id]"
                          type="text"
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
                        v-if="id === contest.answers[key].answers.length - 1"
                        @click="contest.answers[key].answers.push('')"
                        class="focus:outline-none flex justify-center items-center bg-white text-gray-700 cursor-pointer px-4 h-10 shadow rounded-md mt-5"
                      >
                        Add Answer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
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
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUnmounted,
} from '@vue/composition-api';

interface ProblemModel {
  _id: string;
  contest_id: string;
  index: number;
  points: number;
  question: string;
  updated: boolean;
  free_response: boolean;
  mutiple_choice: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface Answer {
  answers: string[];
}

interface ContestModel {
  problems: ProblemModel[];
  answers: Answer[];
}

export default defineComponent({
  name: 'Contest',
  components: {
    Sidenav,
    ContestNavbar,
    MobileSidenav,
  },
  setup(props, { root: { $FeathersVuex, $route, $store } }) {
    const contest = reactive<ContestModel>({
      problems: [],
      answers: [],
    });
    const showToolbox = ref(false);
    const animate = ref(false);
    const save = () => {
      const updated = contest.problems.filter(contest => contest.updated);
      updated.forEach(async problem => {
        try {
          await $store.dispatch('questions/patch', [
            problem._id,
            { question: problem.question, points: problem.points },
          ]);
          problem.updated = false;
        } catch (error) {
          console.error(error);
        }
      });
    };
    onMounted(async () => {
      const problems = await $store.dispatch('questions/find', {
        contest_id: $route.params.id,
        query: {
          $sort: {
            index: 1,
          },
        },
      });
      contest.answers = new Array(problems.total).fill({ answers: [''] });
      contest.problems = problems.data;
      console.log(problems.data);
      setTimeout(() => {
        animate.value = true;
      }, 100);
      setInterval(() => {
        save();
      }, 1000);
    });
    onUnmounted(() => {
      save();
    });
    const newProblem = async (type: string) => {
      contest.answers.push({ answers: [''] });
      const { Question } = $FeathersVuex.api;
      const newQuestion = new Question({
        contest_id: $route.params.id,
        index: contest.problems.length,
        points: 0,
        question: '',
        updated: false,
        free_response: false,
        mutiple_choice: false,
      });
      try {
        const savedQuestion = await newQuestion.save();
        contest.problems.push(savedQuestion);
        console.log(savedQuestion);
      } catch (error) {
        console.error(error);
      }
      showToolbox.value = false;
    };
    const deleteProblem = async (index: number) => {
      try {
        await $store.dispatch('questions/remove', contest.problems[index]._id);
      } catch (error) {
        console.error(error);
      }
      contest.problems.splice(index, 1);
      contest.answers.splice(index, 1);
      // delete from database here:
    };
    const duplicateProblem = (index: number) => {
      const problem = contest.problems[index];
      problem.updated = false;
      contest.problems.splice(index, 0, problem);
      contest.answers.splice(index, 0, contest.answers[index]);
    };
    const addImage = (e: any) => {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log(files);
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const file = event.target.result;
        console.log(file);
      };
      reader.readAsDataURL(files[0]);
    };
    const deleteAnswer = (key: number, index: number): void => {
      if (index) {
        contest.answers[key].answers.splice(index, 1);
      } else {
        // Handle error: Must have at least one answer
      }
    };
    const updated = (index: number) => {
      contest.problems[index].updated = true;
    };
    return {
      save,
      updated,
      contest,
      animate,
      addImage,
      newProblem,
      showToolbox,
      deleteAnswer,
      deleteProblem,
      duplicateProblem,
    };
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
