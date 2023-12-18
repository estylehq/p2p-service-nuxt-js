import api from '~/api/user';
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
  check({ commit }, password) {
    commit(USER_LOGOUT);
    const isMatched = password === 'password';
    commit(CHECK_PASSWORD, {
      success: isMatched,
      message: isMatched ? null : `암호가 일치하지 않습니다.`,
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
