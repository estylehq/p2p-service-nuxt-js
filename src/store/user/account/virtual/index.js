import api from '~/api/user/account';
import {
  USER_UPDATE,
  USER_GET_V_BANK_DEPOSIT,
  USER_LOGOUT,
} from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
};

const mutations = {
  [USER_GET_V_BANK_DEPOSIT](state, { success, message, error }) {
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
  async deposit({ commit, error }) {
    try {
      const { result, member } = await api.deposit();
      const { code, msg } = result;
      const success = code === 1;
      const message = success ? null : `${msg}(code:${code})`;
      commit(USER_GET_V_BANK_DEPOSIT, { success, message });
      if (success) {
        let account = {};
        const {
          deposit,
          investBankName,
          investAccntNo,
          investAccntName,
        } = member;
        account = {
          ...account,
          name: investBankName || null,
          id: investAccntNo,
          owner: investAccntName,
          deposit,
        };
        commit(
          `user/${USER_UPDATE}`,
          { investor: { account } },
          { root: true }
        );
      }
    } catch (error) {
      commit(USER_GET_V_BANK_DEPOSIT, { success: false, error });
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
