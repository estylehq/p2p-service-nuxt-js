import moment from 'moment';
import { parse as listParse } from '../list/index';
import { USER_LOAN_DETAIL, USER_LOGOUT } from '~/store/mutation-types';

function parse(object) {
  let result = listParse(object);
  result = {
    ...result,
    loan: {
      ...result.loan,
      refund: {
        text: object.refundTypeName,
        value: object.refundType,
      },
      reason: {
        text: object.loanRsnName,
        value: object.loanRsn,
        detail:
          object.loanRsnDtl && object.loanRsnDtl.length > 0
            ? object.loanRsnDtl
            : null,
      },
      approved: {
        money: object.loanApprMny,
        month: object.loanApprMonth,
        rate: object.loanApprRate,
        activated:
          object.loanApprDtm && object.loanApprDtm.length > 0
            ? moment(object.loanApprDtm, 'YYYYMMDDHHmmss').toDate()
            : null,
      },
    },
    offerer: {
      ...result.offerer,
      address: {
        postcode: object.homeZipcode,
        cityState: object.homeAddr1,
        detail: object.homeAddr2,
      },
    },
    company: {
      ...result.company,
      address: {
        postcode: object.compZipcode,
        cityState: object.compAddr1,
        detail: object.compAddr2,
      },
    },
    other: object.etcInfo,
    created: new Date(object.regDtm),
    updated: new Date(object.udtDtm),
  };
  return result;
}

const state = {
  success: false,
  message: null,
  error: null,
  id: null,
  status: null,
  loan: null,
  offerer: null,
  company: null,
  other: null,
  created: new Date(),
  updated: new Date(),
};

const mutations = {
  [USER_LOAN_DETAIL](
    state,
    {
      success,
      message,
      error,
      id,
      status,
      loan,
      offerer,
      company,
      other,
      created,
      updated,
    }
  ) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.id = id || null;
    state.status = { ...state.status, ...status } || null;
    state.loan = { ...state.loan, ...loan } || null;
    state.offerer = { ...state.offerer, ...offerer } || null;
    state.company = { ...state.company, ...company } || null;
    state.other = other || null;
    state.created = created || new Date();
    state.updated = updated || new Date();
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.id = null;
    state.status = null;
    state.loan = null;
    state.offerer = null;
    state.company = null;
    state.other = null;
    state.created = null;
    state.updated = null;
  },
};

const actions = {
  get({ commit }, id) {
    const loan = {
      loanSeq: id,
      memSeq: 6,
      loanType: '01',
      loanTypeName: '대출종류',
      etcInfo: '대출의 기타 정보',
      loanStat: '01',
      loanStatName: '신청 중',
      loanReqMny: 3330000,
      loanReqMonth: 3,
      compName: '직장명',
      compBizNo: '000-00-00000',
      regDtm: 1568098780919,
      udtDtm: 1568098780919,
    };
    commit(USER_LOGOUT);
    commit(USER_LOAN_DETAIL, {
      success: true,
      message: null,
      ...parse(loan),
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
