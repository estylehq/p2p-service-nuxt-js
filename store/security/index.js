import { SECURITY_REQUEST } from '~/store/mutation-types';

function parseResult(object) {
  return {
    company: {
      name: object.compName,
      code: object.compBizNo,
    },
    loan: object.loanReqMny,
    term: object.loanReqMonth,
    other: object.etcInfo,
    created: new Date(object.regDtm),
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  result: null,
};

const mutations = {
  [SECURITY_REQUEST](state, { success, message, error, result }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.result = result;
  },
  clear(state) {
    state.success = false;
    state.message = null;
    state.error = null;
    state.result = null;
  },
};

const actions = {
  request({ commit }, { company, loan, term, other }) {
    commit('clear');
    commit(SECURITY_REQUEST, {
      success: true,
      message: null,
      result: parseResult({
        compName: company.name,
        compBizNo: company.code,
        loanReqMny: loan * 10000,
        loanReqMonth: term,
        etcInfo: other,
        regDtm: new Date().getMilliseconds(),
      }),
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
