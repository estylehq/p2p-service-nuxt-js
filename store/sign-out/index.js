import _ from 'lodash';
import { USER_LOGOUT } from '~/store/mutation-types';
import { COOKIE_KEY_SESSION_TOKEN } from '~/store/session';

const storeClearTarget = ['user', 'user/dashboard', 'sign-in', 'session'];

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_LOGOUT](state, { success, message, error }) {
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
  signOut({ commit }, callback) {
    commit('clear');
    _.map(storeClearTarget, store => {
      commit(`${store}/${USER_LOGOUT}`, null, { root: true });
    });
    this.$cookies.set(COOKIE_KEY_SESSION_TOKEN, null);
    commit(
      `sign-in/${USER_LOGOUT}`,
      { success: false, message: null },
      { root: true }
    );
    if (callback) {
      callback();
    }
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
