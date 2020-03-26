import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
var store = new vuex.Store({
  state: {
    id: 0,
    categoryId: 0,
    scope: {},
  },
  mutations: {
    changCtiyValue(state, city) { //  state  传过来的值
      state.id = city
      console.log(state.id);
    },
  },
  getters: {
    doubleCity(state) {
      return state.city
    }
  }
})
export default store