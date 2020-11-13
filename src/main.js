import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import Vuex from "vuex";
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
      score: 0,
      currentQuestionIndex: 0,
      questions: [],
      answersArray: []
  },
  getters: {
    questions: state => {
      return state.questions
    }
  },
  mutations: {
      increment(state) {
          state.score += 10;
      },
      incrementIndex(state) {
        state.score ++;
    },
      SET_Questions (state, questions) {
        state.questions = questions
      },
      listOfAnswers(state) {
        state.answersArray.push(state.questions[state.currentQuestionIndex].correct_answer);
        let incorrect = state.questions[state.currentQuestionIndex].incorrect_answers;
        for(let i = 0 ; i < incorrect.length; i++) {
          state.answersArray.push(incorrect[i]);
        }
        return state.answersArray;
    }
  },
  actions: {
    fetchQuestions({commit}) {
      axios.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium')
            .then(res => this.questions = res.data.results)
            .then(questions => {
              commit('SET_Questions', questions)
            })
            .catch(err => console.log(err))
    }
  }
 });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


