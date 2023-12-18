import { USER_CONTACT_VERIFY } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_CONTACT_VERIFY](state, { success, message, error }) {
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
  verify({ commit }, { verCode }) {
    const success = verCode === '12345';
    commit('clear');
    commit(USER_CONTACT_VERIFY, {
      success,
      message: success ? null : '일치하지 않습니다.',
    });
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
