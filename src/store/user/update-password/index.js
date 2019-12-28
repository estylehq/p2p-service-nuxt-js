import { CHECK_PASSWORD, USER_LOGOUT } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [CHECK_PASSWORD](state, { success, message, error }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.error = null;
  },
};

const actions = {
  update({ commit }, { password, newPassword }) {
    commit(USER_LOGOUT);
    commit(CHECK_PASSWORD, {
      success: true,
      message: null,
    });
  },
  clear({ commit }) {
    commit(USER_LOGOUT);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
