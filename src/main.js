import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
      score: 0
  },
  getters: {},
  mutations: {
      increment(state) {
          state.score += 10;
      }
  },
  actions: {}
 });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


