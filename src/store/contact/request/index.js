import { USER_CONTACT_REQUEST } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_CONTACT_REQUEST](state, { success, message, error }) {
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
  request({ commit }, contact) {
    commit(USER_CONTACT_REQUEST, { success: true, message: null });
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
