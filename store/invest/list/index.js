import _ from 'lodash';
import InvestListItemParser from '~/util/parser/invest/list-parser';
import { INVEST_GET_LIST } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
  items: [],
  totalItems: 0,
};

const mutations = {
  [INVEST_GET_LIST](state, { success, message, items, totalItems, error }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.items = items || [];
    state.totalItems = totalItems || 0;
  },
  clear(state) {
    state.success = false;
    state.message = null;
    state.error = null;
    state.items = [];
    state.totalItems = 0;
  },
};

const actions = {
  getList({ rootState, commit }, pageNumber) {
    commit('clear');

    let dummyArr = [];
    for (let i = 1; i <= 20; i++) {
      dummyArr = [
        ...dummyArr,
        {
          fundSeq: i,
          fundName: '펀드 ' + i,
          fundTypeName: '펀드 종류',
          fundType: '01',
          intRate: '10.0',
          fundSdtm: new Date().getMilliseconds(),
          fundEdtm: new Date().getMilliseconds(),
          fundStatName: '펀딩 중',
          fundStat: '21',
          curFundMny: 2000000,
          fundMny: 10000000,
          refundTypeName: '상환 방법',
          refundType: i % 2 === 0 ? '01' : '02',
          refundMonth: 12,
          fundMemCnt: 99,
          myInvStat: rootState['sign-in'].success ? '01' : '00',
          invMny: 100000,
        },
      ];
    }

    commit(INVEST_GET_LIST, {
      success: true,
      message: null,
      items: _.map(dummyArr, fund => InvestListItemParser.parse(fund)),
      totalItems: dummyArr.length,
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
