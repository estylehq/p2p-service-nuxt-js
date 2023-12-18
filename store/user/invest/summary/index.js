import api from '~/api/user/invest';
import { USER_INVEST_SUMMARY, USER_LOGOUT } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  money: 0,
  principal: 0,
  interest: 0,
};

const mutations = {
  [USER_INVEST_SUMMARY](
    state,
    { success, message, money, principal, interest }
  ) {
    state.success = success;
    state.message = message || null;
    state.money = money || 0;
    state.principal = principal || 0;
    state.interest = interest || 0;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.money = 0;
    state.principal = 0;
    state.interest = 0;
  },
};

const actions = {
  async getSummary({ commit }) {
    commit(USER_LOGOUT);
    try {
      const { result, summary } = await api.summary();
      const { code, msg } = result;
      const success = code === 1;
      const message = success ? null : msg;

      if (!success) {
        commit(USER_INVEST_SUMMARY, { success, message });
        return null;
      }

      const { invMny, principal, interest } = summary;
      commit(USER_INVEST_SUMMARY, {
        success,
        message,
        money: success ? invMny : 0,
        principal: success ? principal : 0,
        interest: success ? interest : 0,
      });
    } catch (e) {
      commit(USER_INVEST_SUMMARY, { success: false, message: e.toString() });
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
