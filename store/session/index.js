import { SESSION_UPDATE, USER_LOGOUT } from '~/store/mutation-types';

export const COOKIE_KEY_SESSION_TOKEN = 'session-token';

const state = {
  token: null,
};

const mutations = {
  [SESSION_UPDATE](state, { token }) {
    this.$cookies.set(COOKIE_KEY_SESSION_TOKEN, token);
    state.token = token;
  },
  [USER_LOGOUT](state) {
    this.$cookies.set(COOKIE_KEY_SESSION_TOKEN, null);
    state.token = null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
