import { QNA_WRITE, USER_LOGOUT } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
  id: -1,
};

const mutations = {
  [QNA_WRITE](state, { success, message, error, id }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.id = id || -1;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.mesage = null;
    state.error = null;
    state.id = -1;
  },
};

const actions = {
  write({ commit }, { title, content }) {
    commit(QNA_WRITE, { success: true, message: null, id: 1 });
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
