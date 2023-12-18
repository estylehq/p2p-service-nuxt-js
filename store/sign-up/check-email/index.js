import { CHECK_EMAIL } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [CHECK_EMAIL](state, { success, message, error }) {
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
  check({ commit }, email) {
    commit(CHECK_EMAIL, { success: true, message: null });
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
