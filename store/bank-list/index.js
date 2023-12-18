import { BANK_GET_LIST } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
  real: null,
  virtual: null,
};

const mutations = {
  [BANK_GET_LIST](state, { success, message, real, virtual, error }) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    if (real) {
      state.real = real;
    }
    if (virtual) {
      state.virtual = virtual;
    }
  },
};

const actions = {
  getList({ commit }) {
    commit(BANK_GET_LIST, {
      success: true,
      message: null,
      real: [{ '001': 'Bank Name' }],
      virtual: [{ V01: 'Virtual Bank Name' }],
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
