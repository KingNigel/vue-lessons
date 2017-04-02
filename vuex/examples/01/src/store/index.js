import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as actions from './actions';
import getters from './getters';


Vue.use(Vuex);

const state = {
  isLoading: false,
  mode: 'day',
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});