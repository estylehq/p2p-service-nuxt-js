import _ from 'lodash';
import api from '~/api/user/invest';
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
  getSchedule({ commit }, { id, type }) {
    commit(USER_LOGOUT);
    let plans = [];
    for (let i = 1; i <= 9; i++) {
      plans = [
        ...plans,
        {
          memSeq: 21,
          fundSeq: id,
          planSeq: id,
          planType: '03',
          planTypeName: '실행',
          planNum: i,
          useDay: 30,
          issueDate: '20190523',
          principal: '0',
          interest: '1234',
          balance: '0',
          fee: '1234',
          tax: '1234',
          refundMny: '1234',
          useCond: '01',
          regDtm: 1556008046229,
          udtDtm: 1556008046229,
        },
      ];
    }
    plans = [
      ...plans,
      {
        memSeq: 21,
        fundSeq: id,
        planSeq: id,
        planType: '03',
        planTypeName: '실행',
        planNum: 10,
        useDay: 30,
        issueDate: '20190523',
        principal: '0',
        interest: '1234',
        balance: '0',
        fee: '1234',
        tax: '1234',
        refundMny: '12345678',
        useCond: '01',
        regDtm: 1556008046229,
        udtDtm: 1556008046229,
      },
    ];
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
