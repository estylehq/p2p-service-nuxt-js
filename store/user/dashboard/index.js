import { USER_GET_DASHBOARD, USER_LOGOUT } from '~/store/mutation-types';

function parse(object) {
  return {
    virtual: {
      code: object.investBankCd, // 은행 코드
      name: object.investBankName, // 은행명
      id: object.investAccntNo, // 계좌
      owner: object.investAccntName, // 계좌 주
      deposit: object.deposit,
    },
    interests: {
      tax: object.afterInterest, // 세후 이자
      withoutTax: object.preInterest, // 세전 이자
    },
    rates: {
      tax: object.afterIntRate, // 세후 이자율
      withoutTax: object.preIntRate, // 세전 이자율
    },
    limit: {
      left: object.remainLimitInvMny, // 잔여 투자 한도 금액
      max: object.limitInvMny, // 투자자종류별 투자한도금액 (-1: 무제한)
    },
    items: {
      total: object.invCnt,
      ready: object.invCnt21,
      repay: object.invCnt40,
      delay: object.invCnt41,
      complete: object.invCnt50,
    },
    invests: {
      totalMoney: object.totInvMny,
      leftMoney: object.curInvMny,
    },
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  virtual: {},
  interests: {},
  rates: {},
  limit: {},
  items: {},
  invests: {},
};

const mutations = {
  [USER_GET_DASHBOARD](
    state,
    {
      success,
      message,
      error,
      virtual,
      interests,
      rates,
      limit,
      items,
      invests,
    }
  ) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    if (virtual) {
      state.virtual = {
        ...state.virtual,
        ...virtual,
      };
    }
    if (interests) {
      state.interests = {
        ...state.interests,
        ...interests,
      };
    }
    if (rates) {
      state.rates = {
        ...state.rates,
        ...rates,
      };
    }
    if (limit) {
      state.limit = {
        ...state.limit,
        ...limit,
      };
    }
    if (items) {
      state.items = {
        ...state.items,
        ...items,
      };
    }
    if (invests) {
      state.invests = {
        ...state.invests,
        ...invests,
      };
    }
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.dashboard = null;
    state.error = null;
    state.virtual = {};
    state.interests = {};
    state.rates = {};
    state.limit = {};
    state.items = {};
    state.invests = {};
  },
};

const actions = {
  dashboard({ commit, rootState }) {
    commit(USER_LOGOUT);
    const member = {
      limitInvMny: 20000000,
      remainLimitInvMny: 20000000,
      curInvMny: 0,
      totInvMny: 20000,
      preInterest: 86,
      afterInterest: 58,
      preIntRate: '0.43',
      afterIntRate: '0.29',
      invCnt: 2,
      invCnt21: 0,
      invCnt40: 0,
      invCnt41: 0,
      invCnt50: 2,
      investBankName: 'OO은행',
      investBankCd: 'OOOO_001',
      investAccntNo: '0000000000000',
      investAccntName: '누구(P2P 서비스)',
      refundBankCd: 'OOOO_001',
      refundBankName: 'OO은행',
      refundAccntNo: '0000000000000',
      refundAccntName: '누구',
    };

    const { virtual, interests, rates, limit, items, invests } = parse(member);
    commit(USER_GET_DASHBOARD, {
      success: true,
      message: null,
      virtual,
      interests,
      rates,
      limit,
      items,
      invests,
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
