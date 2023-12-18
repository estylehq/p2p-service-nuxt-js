import _ from 'lodash';
import parser from '~/util/parser/invest/schedule-parser';
import { USER_LOGOUT, INVEST_PREVIEW } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  items: [],
};

const mutations = {
  [INVEST_PREVIEW](state, { success, message, items }) {
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
  getPreview({ commit }, { id, money }) {
    let plans = [];
    for (let i = 1; i <= 9; i++) {
      plans = [
        ...plans,
        {
          planType: '01',
          planNum: i,
          useDay: 30,
          principal: '0',
          interest: '1234',
          balance: '01',
          fee: '1234',
          tax: '1234',
          refundMny: '1234',
        },
      ];
    }
    plans = [
      ...plans,
      {
        planType: '01',
        planNum: 10,
        useDay: 31,
        principal: `${money}`,
        interest: '1234',
        balance: '0',
        fee: '1234',
        tax: '1234',
        refundMny: `${money + 1234}`,
      },
    ];

    commit(USER_LOGOUT);
    commit(INVEST_PREVIEW, {
      success: true,
      message: null,
      items: _.map(plans, plan => parser.parse(plan)),
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
