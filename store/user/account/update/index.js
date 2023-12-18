import { USER_LOGOUT, USER_UPDATE_BANK } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_UPDATE_BANK](state, { success, message, error }) {
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
  update({ commit }, { code, name, id, owner }) {
    commit(USER_LOGOUT);
    commit(USER_UPDATE_BANK, { success: true, message: null });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
