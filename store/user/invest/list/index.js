import _ from 'lodash';
import itemParser from '~/util/parser/invest/list-parser';
import { USER_INVEST_GET_LIST, USER_LOGOUT } from '~/store/mutation-types';

const state = {
  items: [],
  success: false,
  message: null,
  totalItems: 0,
};

const mutations = {
  [USER_INVEST_GET_LIST](state, { success, message, items, totalItems }) {
    state.success = success;
    state.message = message || null;
    state.items = items || [];
    state.totalItems = totalItems || 0;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.items = [];
    state.totalItems = 0;
    state.message = null;
  },
};

const actions = {
  getList({ commit }, pageNumber) {
    let funds = [];
    for (let i = 1; i <= 8; i++) {
      funds = [
        ...funds,
        {
          fundSeq: i,
          fundName: `투자상품 ${i}`,
          refundMonth: 1,
          fundMny: 1000000,
          invMny: 50000,
          curFundMny: 10000,
          fundMemCnt: 1,
          refundType: '01',
          refundTypeName: '만기일시상환',
          fundType: '01',
          fundTypeName: '일반',
          dispCond: '02',
          dispCondName: '표시안함',
          loanSeq: 36,
          intRate: '5',
          fundSdtm: 1556496000000,
          fundEdtm: 1556528399000,
          myInvStat: '01',
          myInvStatName: '참여',
          fundStat: '50',
          fundStatName: '상환완료',
          regDtm: 1556525114738,
          udtDtm: 1574241092935,
        },
      ];
    }
    commit(USER_INVEST_GET_LIST, {
      success: true,
      message: null,
      items: _.map(funds, fund => itemParser.parse(fund)),
      totalItems: funds.length,
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
