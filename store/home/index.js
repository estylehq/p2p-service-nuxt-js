import { HOME_DISCLOSURE } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
  date: new Date(),
  amount: null,
  balance: null,
  balancedDelayRate: null,
  delayRate: null,
  delayCount: null,
  marginRate: null,
};

const mutations = {
  [HOME_DISCLOSURE](
    state,
    {
      success,
      message,
      error,
      date,
      amount,
      balance,
      balancedDelayRate,
      delayRate,
      delayCount,
      marginRate,
    }
  ) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.date = date || new Date();
    state.amount = amount || null;
    state.balance = balance || null;
    state.balancedDelayRate = balancedDelayRate || null;
    state.delayRate = delayRate || null;
    state.delayCount = delayCount || null;
    state.marginRate = marginRate || null;
  },
};

const actions = {
  disclosure({ commit }) {
    commit(HOME_DISCLOSURE, {
      success: true,
      message: null,
      date: new Date(),
      amount: 999999,
      balance: 999999,
      balancedDelayRate: '0.0',
      delayRate: '0.0',
      delayCount: 0,
      marginRate: '10.0',
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
