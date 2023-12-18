import api from '~/api/user/account';
import { USER_LOGOUT, USER_BANK_WITHDRAW } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_BANK_WITHDRAW](state, { success, message, error }) {
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
  async withdraw({ commit }, amount) {
    commit(USER_LOGOUT);
    try {
      const { result } = await api.withdraw(amount);
      const { code, msg } = result;
      const success = code === 1;
      const message = success ? null : `${msg}(code:${code})`;
      commit(USER_BANK_WITHDRAW, { success, message });
    } catch (error) {
      commit(USER_BANK_WITHDRAW, { success: false, error });
    }
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
