import _ from 'lodash';
import { USER_REGISTER } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_REGISTER](state, { success, message, error }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
  },
  clear(state) {
    state.success = false;
    state.message = null;
    state.error = null;
  },
};

const actions = {
  signUp({ commit }, { signUp, policies }) {
    commit('clear');
    commit(USER_REGISTER, { success: true, message: null });
  },
  clear({ commit }) {
    commit('clear');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
