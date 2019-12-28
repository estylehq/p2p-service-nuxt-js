import _ from 'lodash';
import { NOTICE_GET_LIST } from '~/store/mutation-types';

export function parse(object) {
  return {
    id: object.artcSeq,
    title: object.title,
    created: new Date(object.regDtm),
  };
}

const state = {
  success: false,
  message: null,
  error: null,
  items: [],
  totalItems: 0,
};

const mutations = {
  [NOTICE_GET_LIST](state, { success, message, error, items, totalItems }) {
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
  getList({ commit }, current) {
    let notices = [];
    for (let i = 1; i <= 10; i++) {
      notices = [
        ...notices,
        {
          artcSeq: i,
          title: '공지사항 ' + i,
          regDtm: new Date().getMilliseconds(),
        },
      ];
    }

    commit(NOTICE_GET_LIST, {
      success: true,
      message: null,
      items: _.map(notices, notice => parse(notice)),
      totalItems: notices.length,
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
