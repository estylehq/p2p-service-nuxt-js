import _ from 'lodash';
import { USER_LOAN_GET_LIST, USER_LOGOUT } from '~/store/mutation-types';

export function parse(object) {
  return {
    id: object.loanSeq,
    status: {
      text: object.loanStatName,
      value: object.loanStat,
    },
    loan: {
      type: {
        text: object.loanTypeName,
        value: object.loanType,
      },
      required: {
        money: object.loanReqMny,
        month: object.loanReqMonth,
      },
    },
    company: {
      name: object.compName,
      code: object.compBizNo,
    },
    created: new Date(object.regDtm),
    updated: new Date(object.udtDtm),
  };
}

const state = {
  items: [],
  success: false,
  message: null,
  totalItems: 0,
  error: null,
};

const mutations = {
  [USER_LOAN_GET_LIST](state, { success, message, error, items, totalItems }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.items = items;
    state.totalItems = totalItems || 0;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.items = [];
    state.totalItems = 0;
  },
};

const actions = {
  getList({ commit }, pageNumber) {
    let loans = [];
    for (let i = 1; i <= 8; i++) {
      const item = {
        loanSeq: i,
        memSeq: 6,
        member: {
          memId: 'example@email.com',
          memName: '누구',
          tel: '01000000000',
          investBankCd: 'OOOO_001',
          investAccntNo: '00000000000000',
          investAccntName: '누구(P2P서비스)',
          refundBankCd: 'OOOO_002',
          refundBankName: 'OO은행',
          refundAccntNo: '00000000000000',
          refundAccntName: '누구',
        },
        loanType: '01',
        loanTypeName: '대출형태',
        etcInfo: 'ㅎㅎㅎㅎㅎ',
        loanStat: '01',
        loanStatName: '신청중',
        loanReqMny: 3330000,
        loanReqMonth: 3,
        compName: '직장명',
        compBizNo: '000-00-00000',
        regDtm: 1568098780919,
        udtDtm: 1568098780919,
      };
      loans = [...loans, item];
    }
    commit(USER_LOAN_GET_LIST, {
      success: true,
      message: null,
      items: _.map(loans, loan => parse(loan)),
      totalItems: loans.length,
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
