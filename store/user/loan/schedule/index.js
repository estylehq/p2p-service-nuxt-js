import _ from 'lodash';
import api from '~/api/user/loan';
import parser from '~/util/parser/user/loan/UserLoanScheduleParser';
import { USER_LOAN_SCHEDULE, USER_LOGOUT } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  items: [],
};

const mutations = {
  [USER_LOAN_SCHEDULE](state, { success, message, items }) {
    state.success = success;
    state.message = message || null;
    state.items = items || [];
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.items = [];
  },
};

const actions = {
  async getSchedule({ commit }, { id, type }) {
    commit(USER_LOGOUT);

    try {
      const { result, planList } = await api.plan(id, type || '01');
      const { code, msg } = result;
      const success = code === 1;
      const message = success ? null : `${msg}(${code})`;
      commit(USER_LOAN_SCHEDULE, {
        success,
        message,
        items: success ? _.map(planList, plan => parser.parse(plan)) : null,
      });
    } catch (e) {
      commit(USER_LOAN_SCHEDULE, { success: false, message: e.toString() });
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
