import _ from 'lodash';
import api from '~/api/user/account';
import { USER_LOGOUT, USER_GET_BANK_HISTORY } from '~/store/mutation-types';

const state = {
  success: false,
  message: null,
  error: null,
  list: [],
  totalItems: 0,
};

const mutations = {
  [USER_GET_BANK_HISTORY](
    state,
    { success, message, error, list, totalItems }
  ) {
    state.success = success;
    state.message = message || null;
    state.error = error || null;
    state.list = list;
    state.totalItems = totalItems;
  },
  [USER_LOGOUT](state) {
    state.success = false;
    state.message = null;
    state.error = null;
    state.list = [];
    state.totalItems = 0;
  },
};

const actions = {
  getList({ commit }, pageNumber) {
    commit(USER_LOGOUT);
    let inOutArr = [];

    for (let i = 1; i <= 20; i++) {
      inOutArr = [
        ...inOutArr,
        {
          type: {
            text: i % 3 === 0 ? '입금' : '출금',
            value: i % 3 === 0 ? 'in' : 'out',
          },
          state: {
            text: '완료',
            value: '02',
          },
          amount: 10000,
          datetime: new Date(),
        },
      ];
    }

    commit(USER_GET_BANK_HISTORY, {
      success: true,
      message: null,
      list: inOutArr,
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
